import { useEffect, useState } from "react";
import { fetchSingleRecipe } from "./fetchRecipes";

export function useFetchSingleRecipe({recipeId}) {
    const [isLoading,setIsLoading] = useState(false);
    const [recipe,setRecipe] = useState(null);

    useEffect(() => {
        async function fetchData(recipeId){
            setIsLoading(true)
            try{
                const data = await fetchSingleRecipe(recipeId);
                setRecipe(data)
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

        fetchData(recipeId);
    }, [recipeId]);

    return {recipe} 
}

 