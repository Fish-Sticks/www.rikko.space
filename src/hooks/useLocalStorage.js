export function useLocalStorage(key){
    const setItem = (value) => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    const getItem = () => {
        const value = window.localStorage.getItem(key)
        return JSON.parse(value) || null;
    }

    return {setItem,getItem}
}