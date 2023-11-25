import {getLength} from './header.js';

export const save = (key, value) => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
    } catch (error) {
        console.error("Set state error: ", error.message);
    }
    getLength();
    };

export const load = key => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
        console.error("Get state error: ", error.message);
    }

};

export function remove(key) {
    localStorage.removeItem(key);
    getLength();
}