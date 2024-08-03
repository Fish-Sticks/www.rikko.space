export const fetchRecipes = async (query) => {
    const BASE_URL = `https://dummyjson.com/recipes`

    try{
        const response = await fetch(BASE_URL + query)
        if(!response.ok){
            throw new Error(`API call failed: ${response.status}`)
        }
        const data = await response.json()
        return data || [];

    }catch(error){

    }
}

export const fetchSingleRecipe = async (id) => {
    const BASE_URL = `https://dummyjson.com/recipes/`

    const response = await fetch(BASE_URL + id)
    if(!response.ok){
        throw new Error(`API call failed: ${response.status}`)
    }
    const data = await response.json()
    
    return data;

}