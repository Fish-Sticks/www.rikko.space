
import { Link } from "react-router-dom"

export default function RecipesCarousel({title,recipes}) {
    return (
    <div className="flex flex-col bg-white/80 ">
        <h1 className="text-zinc-900 text-3xl font-bold p-2 pl-10">{title}</h1>
        <div className="flex md:flex-row flex-col">
            {
                recipes.map((recipe) => (
                    <Link to={'./'+recipe.id} draggable="false" key={recipe.id} className="bg-orange-900  text-black cursor-pointer p-2 m-4 rounded-lg shadow-solid w-[20%]">
                        <div>
                            <img draggable="false" src={recipe.image} alt={recipe.image} />
                        </div>
                        <h1 className="text-2xl font-bold">{recipe.name}</h1>
                    </Link>
                ))
            }
        </div>
    </div>)
}