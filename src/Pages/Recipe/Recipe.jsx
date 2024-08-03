import { useParams } from "react-router-dom";
import NotFoundPage from "../components/NotFound";
import NavBar from "../components/NavBar";
import { useState,useEffect } from "react";
import { useFetchSingleRecipe } from "../../hooks/useFetchSingleRecipe";
import RecipeCard from "./RecipeCard";
import { fetchRecipes } from "../../hooks/fetchRecipes";
import Footer from "../components/Footer";
import RelatedRecipes from "./RelatedRecipes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import ReactTextareaAutosize from "react-textarea-autosize";
import { useLocalStorage } from "../../hooks/useLocalStorage";


export default function Recipe() {
    const params = useParams()

    if(isNaN(parseInt(params.recipeId)))
        return (<NotFoundPage/>)

    const [recipeId,setRecipeId] = useState(parseInt(params.recipeId));

    const {recipe} = useFetchSingleRecipe({recipeId});
    
    const [relatedRecipes,setRelatedRecipes] = useState(undefined);

    const [notesHidden,setNotesHidden] = useState(true);
    const [notesContent,setNotesContent] = useState("");

    const [LocalStorageData,setLocalStorageData] = useState({
        note: "",
        tickedIngredients: []
    });

    useEffect( () => {
        if(!recipe)
            return;

        async function fetchData(){
            try{
                const data = await fetchRecipes(`/tag/${recipe.cuisine}`);
                const filteredRecipes = data.recipes.filter((r) => r.id != recipe.id);
                setRelatedRecipes(filteredRecipes.slice(0,5));

                const {getItem,setItem} = useLocalStorage(recipe.id)

                if(getItem() == null){
                    setItem(LocalStorageData)
                }else{
                   setLocalStorageData(getItem());
                }

                setNotesContent(getItem().note || "")
                
            }catch(error){
                if(error.name != 'AbortError'){
                    console.log('Failed to fetch books:', error);
                }else{
                    throw error;
                }
            }
        }
        fetchData();

    },[recipe]);

    function handleChangeRecipe(id){
        params.recipeId = id;
        setRecipeId(id)
        setLocalStorageData({
            note: "",
            tickedIngredients: []
        })
    }

    function handleSaveNote(){
        if(!recipe)
            return;
        
        const {setItem} = useLocalStorage(recipe.id)
        LocalStorageData.note = notesContent;
        setItem(LocalStorageData)
    }

    function handleClearNote(){
        if(!recipe)
            return;

        const {setItem} = useLocalStorage(recipe.id)

        setNotesContent('')
        setItem("")
    }

    function handleRecipeTick(Ingredient,e){
        console.log("hi")
        const {setItem} = useLocalStorage(recipe.id)
 
        setLocalStorageData((prevData) => {
            const updatedData = {
                ...prevData,
                tickedIngredients: {
                    ...prevData.tickedIngredients,
                    [Ingredient]: !prevData.tickedIngredients[Ingredient]
                }
            };
    
            setItem(updatedData);
            e.target.checked = updatedData.tickedIngredients[Ingredient];
    
            return updatedData;
        });
    }
        
    return (
        <main className=" bg-neutral-900 overflow-auto">
            <NavBar/>
                <div className="relative">
                    { recipe && <RecipeCard recipe={recipe} tickedIngredients={LocalStorageData.tickedIngredients} handleRecipeTick={handleRecipeTick}/>}
                    <RelatedRecipes recipes={relatedRecipes} handleChangeRecipe={handleChangeRecipe}/>
        
                    <div className="min-w-58">
                        <div className={`transition-all p-0.5 pt-0 duration-500 ${notesHidden ? '-right-[79vw] md:-right-[16.6em]' : 'right-1'} p-1 absolute top-12 rounded-md  bg-white border border-black`}>
                        <button onClick={()=> setNotesHidden(!notesHidden)} className="absolute top-0 -left-9 bg-orange-400 p-2 text-lg rounded-md text-white">
                            <FontAwesomeIcon icon={notesHidden ? faArrowLeft : faArrowRight} />
                        </button>
                            <p className=" font-semibold">Note: </p>
                            <ReactTextareaAutosize 
                            name="" 
                            value={notesContent} 
                            onChange={(e) => setNotesContent(e.target.value)} 
                            minRows={5}
                            className=" resize-none outline-none bg-neutral-600 overflow-auto px-1 text-base h-fit rounded-sm text-zinc-100 min-w-64 w-full" id=""/>
                            <div className="flex gap-2 justify-end">
                                <button onClick={handleClearNote} className="text-sm">Clear</button>
                                <button onClick={handleSaveNote} className="bg-orange-500 text-sm text-white">Save</button>
                            </div>
                        </div>
                    </div>
                </div>

            <Footer/>
        </main>
   )
}