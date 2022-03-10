import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

export interface heroState {
    id: number,
    name: string,
    description: string,
    thumbnail: {
        path: string,
        extension: string
    },
}

const initialState = {
    hero: {
        id: 0,
        name: "",
        description: "",
        thumbnail: {
            path: "",
            extension: ""
        },
    }

}

export const HeroSlice = createSlice({
    name: "hero",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchHeroAsync.fulfilled, (state, action) => {
            state.hero = action.payload;
        })
    }
})

export const fetchHeroAsync = createAsyncThunk(
    'hero/fetchHero',
    async (id: number) => {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?apikey=cb0bf27ee604b7033dac0e8988a429ea`)
        const hero: heroState = response.data.data.results[0]
        return hero
    }
)
