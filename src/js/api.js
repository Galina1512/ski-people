import { API_URL } from "./const"
import { paginationData } from "./paginationData";

export const getData = async (query) => {
    try {
        const response = await fetch(API_URL);
        const obj = await response.json();

        if (query !='' && query !=null) {
            const querySearch = obj.filter(item => item.type === query || item.name === query);
            return paginationData(querySearch, 12);
        }
            return paginationData(obj, 12);
        } catch (error) {
            console.log('error:', error);
        
    }
}