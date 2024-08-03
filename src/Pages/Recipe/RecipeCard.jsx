import { Link } from "react-router-dom";

export default function RecipeCard({recipe,tickedIngredients,handleRecipeTick}) {

    return ( 
    <div className="lg:max-w-6xl my-2 xl:max-w-7xl rounded-md bg-white m-auto py-5 px-8">
        <div className=" border-8 border-orange-500 h-full px-5">
            <div className="relative -top-1 border-b-2 border-orange-500  w-full">
                <div className="relative flex items-center">
                    <header className="relative text-black md:text-xl 2xl:text-2    xl mx-auto mb-[2%]">
                        <span>Recipe</span> 
                        <span className="bg-orange-500 px-1 mx-2 text-white">
                            MixList
                        </span> 
                        <span>Page</span>
                        <span className=" absolute top-[91.1%] left-[35.1%] w-0 h-0 
                        border-l-[20px] border-l-transparent
                        border-t-[15px] border-t-orange-500
                        border-r-[20px] border-r-transparent"></span>
                        <span className=" absolute top-[91.1%] right-[27%] w-0 h-0 
                        border-l-[20px] border-l-transparent
                        border-t-[15px] border-t-orange-500
                        border-r-[20px] border-r-transparent"></span>
                    </header>
                </div>       
            </div>
            <main className=" grid gap-1 divide-x-1 grid-rows-[0.99fr,0.3fr] md:grid-cols-[0.35fr,0.65fr] xl:grid-cols-[0.30fr,0.70fr] m-1">
                <section className="min-h-full mb-7 flex flex-col md:space-y-5">
                    <div className="mt-2">                        
                        <img src={recipe.image} draggable="false" className="border border-black mx-auto w-[90%] md:w-[90%] lg:mx-0 lg:w-full  xl:w-full mb-2" width={400} alt="" />
                    </div>
                    <div className="text-black font-bold text-3xl xl:text-base 2xl:text-xl flex md:hidden my-2">
                        <span className="mx-auto">{recipe.name}</span>
                    </div>

                    <div className="relative mb-4">
                        {/* Middle line */}
                        <div className=" absolute w-[1px] h-full bg-black bottom-0  top-0 left-[48%] "></div>

                        <div className=" text-black grid text-[0.9em] my-2 xl:text-sm 2xl:text-xl grid-cols-2">
                            {/* First Column */}
                            <div className="flex flex-col my-2 ">
                                <div className="w-[90%] border-b-[1px] border-black" >
                                    <p className="font-light">
                                        Serves
                                    </p>
                                    <span>
                                        {recipe.servings} servings 
                                    </span>
                                </div>
                                
                            </div>

                            {/* Second Column */}
                            <div className="w-full my-2 border-b-[1px] border-black" >
                                <p className="font-light">
                                    Prep Time
                                </p>
                                    <span>
                                        {recipe.prepTimeMinutes} minutes
                                    </span>
                            </div>

                            {/* First Column */}    
                            <div className="w-[90%] border-b-[1px] border-black" >
                                <p className="font-light">
                                    cals per serving
                                </p>
                                <span>
                                    {recipe.caloriesPerServing} kcal
                                </span>
                            </div>

                            {/* Second Column */}
                            <div className="w-full border-b-[1px] border-black" >
                                <p className="font-light">
                                    Cook Time
                                </p>
                                <span>
                                    {recipe.cookTimeMinutes} minutes
                                </span>
                            </div>

                            {/* First Column */}    
                            <div className="w-[90%] my-2 border-b-[1px] border-black" >
                                <p className="font-light">
                                    Difficulty
                                </p>
                                <span>
                                    {recipe.difficulty}
                                </span>
                            </div>

                            {/* Second Column */}
                            <div className="w-full my-2 border-b-[1px] border-black" >
                                <p className="font-light">
                                Rating
                                </p>
                                <span>
                                    {recipe.rating} ⭐
                                </span>
                            </div>

                            {/* First Column */}    
                            <div className="w-[90%] border-b-[1px] border-black" >
                                <p className="font-light">
                                    Cuisine
                                </p>
                                <span>
                                    {recipe.cuisine}
                                </span>
                            </div>

                            {/* Second Column */}
                            <div className="w-full border-b-[1px] border-black" >
                                <p className="font-light">
                                Total Time
                                </p>
                                <span>
                                {recipe.cookTimeMinutes + recipe.prepTimeMinutes} minutes
                                </span>
                            </div>
                            
                        </div>
                    </div>
                </section>
                <section className="text-black grid grid-rows-2  md:grid-rows-[0.2fr,1fr,1fr] md:pl-2 border-black">
                    <div className="hidden md:!flex flex-col md:p-1">
                        <div className="w-full  border-black" >
                        <h2 className="text-base w-full font-light">Recipe Name</h2>
                            <p className=" font-semibold md:text-2xl xl:text-3xl 2xl:text-3xl">
                                {recipe.name}
                            </p>
                        </div>

                    </div>
                    <div className="md:p-1">
                        <h2 className="text-lg font-light mb-2">Ingredients</h2>
                        <ul className="list-disc text-sm md:text-base xl:text-lg 2xl:text-lg list-inside">
                            {recipe.ingredients.map((ingredient,index) => (
                                <div key={index} className="flex gap-2 items-center">
                                    <input type="checkbox" style={{backgroundColor: 'white'}} checked={tickedIngredients[ingredient]} onChange={(e) => handleRecipeTick(ingredient,e)} className="accent-orange-500 invert checked:invert-0 text-emerald-500 checked:bg-sky-700 border-white h-6 w-6 bg-white"/>
                                    <li className="list-none border-b-[1px] mb-1 w-full border-black" key={index}>{ingredient}</li>
                                </div>
                            ))}
                        </ul>
                        <div className="relative w-fit text-sm justify-self-start font-medium">*Tick the Ingredients you already have</div>
                    </div>

                    <div className="md:p-1 mb-4 w-full">
                        <h2 className="text-xl font-light">Directions</h2>
                        <ul className="list-disc text-sm md:text-base xl:text-lg 2xl:text-xl list-inside">
                            {recipe.instructions.map((instruction,index) => (
                                <div key={index}>
                                <li className="list-decimal mt-2 w-full border-black" key={index}>{instruction}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </section>
                </main>
        </div>
        <div className="my-2 flex justify-center">
            <Link className="bg-orange-300 p-2 block w-fit hover:font-bold hover:text-black border border-black text-black rounded-md"  to={'/shopping-list-web-app/recipes/'} draggable="false">Back</Link>
        </div>
    </div>)
}