import { Link } from "react-router-dom";

function Cards(){
    return(
    <div  className="flex flex-col bg-orange-50 gap-0 md:gap-10 xl:gap-0">
        <div className="min-h-[93vh] grid grid-rows-[.45fr,.4fr] lg:grid-rows-[.65fr,.20fr]">
            <section className="bg-gradient-to-br from-orange-300 border-b-[1px] border-zinc-200 sm:border-0 to-orange-400">
                <div className="flex flex-col max-w-7xl md:flex-row md:items-center justify-center lg:space-y-4 lg:w-[70%] xl:gap-0 mx-auto h-full md:gap-3 lg:gap-9 text-wrap flex-wrap md:flex-nowrap 
                                xl:mt-0 xl:justify-center xl:max-w-7xl 2xl:w-[50%] ">
                    <h2 className="text-amber-50 xl:text-6xl xl:text-left mx-auto text-[2.3rem] lg:text-5xl/snug md:text-5xl lg:w-[80%] xl:w-[56%] md:w-[75%] text-center 2xl:text-left font-bold sm:mb-0">
                        Organize your next shopping spree
                    </h2>
                    <div>
                        <img src="./img/app-compras.svg" className="w-[45vw] md:w-[40vw] lg:w-[25vw] mx-auto xl:w-72" draggable="false" alt="" />
                    </div>
                </div>
            </section>

            <section className="flex flex-col md:flex-row h-full items-center lg:gap-12 xl:w-[45%] xl:mx-auto xl:gap-2 justify-center md:mt-0">
                    <div className="">
                        <img src="./img/lista-mulher.svg" draggable="false" className="w-[40vw] md:w-[45vw] lg:w-[30vw] xl:w-[40vw] mx-auto 2xl:w-[40vw] md:pr-6 scale-x-[-1]" 
                        alt="lista-mulher.svg" />
                    </div>
                    <div className="flex md:w-[85%] items-center lg:items-start lg:w-[50%] xl:w-full flex-col gap-2 lg:gap-4 ">
                        <p className="text-zinc-600 text-center lg:text-left  w-[80%] lg:text-2xl md:text-2xl/8 xl:text-2xl md:w-[80%] mx-auto lg:mx-0 lg:w-[80%] xl:w-full 2xl:w-[80%] mb-4 2xl:text-3xl md:pt-4">
                            Create a digital list to organize your shopping and save time and paper.
                        </p>
                        <Link to={'/shopping-list-web-app/register'} className= 
                        "text-base w-fit md:text-left text-center hover:text-black xl:mr-auto p-2 md:text-xl 2xl:text-xl lg:text-xl lg:p-3 xl:text-base mb-2 bg-transparent lg:block \
                        px-5 rounded-lg border-2  align-text-top border-black \
                        hover:bg-gradient-to-tr cursor-pointer text-black hover:from-orange-100 \
                        shadow-solid hover:to-orange-300 text-md hover:font-bold">
                            Plan your next journey
                        </Link>
                    </div>

                    
            </section>
        </div>
                

            <div className=" bg-orange-200 flex items-center justify-center">
                <div className="w-full bg-orange-100 border-t border-b border-gray-200 px-5 py-16 md:py-24 text-black">
                    <div className="w-full max-w-6xl mx-auto">
                    <div className="text-center max-w-xl mx-auto">
                            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">What people <br/>are saying.</h1>

                            <div className="text-center mb-10">
                                <span className="inline-block w-1 h-1 rounded-full bg-amber-500 ml-1"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-amber-500 ml-1"></span>
                                <span className="inline-block w-40 h-1 rounded-full bg-amber-500"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-amber-500 ml-1"></span>
                                <span className="inline-block w-1 h-1 rounded-full bg-amber-500 ml-1"></span>
                            </div>
                    </div>

                    <div className="-mx-3 md:flex items-start">
                        <div className="px-3 md:w-1/3">
                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf_VZkIPQeGvdfpFynZQJU95xU_YiSo9vmdw&s" alt=""/>
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-base uppercase text-gray-600">Joshua Hughes.</h6>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-base leading-tight"><span className="text-xl leading-none italic font-bold text-gray-400 mr-1">"</span>MixList has revolutionized my shopping and cooking experience. It's so easy to organize my groceries and find new recipes all in one place!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <img src="https://cdn.discordapp.com/avatars/775350431495880724/f59812eb63cfac2d3d98ed70e9c5d224.webp?size=1024&format=webp&width=0&height=281" alt=""/>
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-base uppercase text-gray-600">Mindaugas Taujanskas.</h6>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-base leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>I love how MixList combines my shopping list and recipes. It saves me so much time, and the recipes are fantastic!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 md:w-1/3">
                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <img src="https://i.pravatar.cc/100?img=3" alt=""/>
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-base uppercase text-gray-600">Tommie Ewart.</h6>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-base leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>MixList is a game-changer! The convenience of having my shopping list and recipe collection together is unmatched.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <img src="https://i.pravatar.cc/100?img=4" alt=""/>
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-base uppercase text-gray-600">Charlie Howse.</h6>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-base leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Thanks to MixList, meal planning has never been easier. I can easily add ingredients to my shopping list straight from the recipes.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 md:w-1/3">
                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <img src="https://i.pravatar.cc/100?img=5" alt=""/>
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-base uppercase text-gray-600">Nevada Herbertson.</h6>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-base leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>MixList is incredibly user-friendly. I appreciate how it simplifies my grocery shopping and meal preparation.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <img src="https://i.pravatar.cc/100?img=6" alt=""/>
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-base uppercase text-gray-600">Kris Stanton.</h6>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-base leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>MixList is my go-to for meal planning and grocery shopping. It's intuitive, efficient, and has made my life so much easier!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Cards;