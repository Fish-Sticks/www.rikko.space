import { useEffect, useState } from "react";
import { fetchRecipes } from "./fetchRecipes";

export function useFetchRecipes(query) {
    const [isLoading,setIsLoading] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [searchQuery,setSearchQuery] = useState(query);

    useEffect(() => {
        async function fetchData(query){
            setIsLoading(true)
            try{
                const data = await fetchRecipes(query);
                setRecipes(data.recipes)
            }catch(error){
                if(error.name != 'AbortError'){
                    console.log('Failed to fetch books:', error);
                }else{
                    throw error;
                }
            }finally{
                setIsLoading(false);
            }
        }
        console.log(searchQuery)
        if(searchQuery)
            fetchData(searchQuery);
    }, [searchQuery]);

    return {recipes,error,isLoading} 
}

 