import { API_URL } from "./const"

export const getData = async () => {
    try {
        const response = await fetch(API_URL);
        const obj = await response.json();
            return obj;
        } catch (error) {
            console.log('error:', error);
        
    }
}