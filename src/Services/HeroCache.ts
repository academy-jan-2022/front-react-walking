import {Hero} from "../App";

export const setCachedResult = (key: string, result: Array<Hero>) => {
    window.sessionStorage.setItem(key, JSON.stringify(result));
}

export const getCachedResult = (key: number): Array<Hero>|null => {
    const cached = window.sessionStorage.getItem(key.toString());
    if (cached) {
        return JSON.parse(cached);
    }
    return null;
}