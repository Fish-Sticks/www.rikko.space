export default function AboutContent() {
    return (
    <div className=" max-w-7xl bg-gradient-to-tl w-[90%] md:w-[80%] mx-auto from-orange-300 to-orange-500">
        <div className="flex flex-col items-center justify-center rounded-md h-full p-4 my-7 shadow-lg shadow-black/60 bg-orange-light">
            <header className=" text-white p-2 bg-zinc-900 w-full rounded-lg text-lg  py-3   text-center font-bold ">About MixList</header>
            <main className="md:p-9 text-black grid lg:grid-cols-2 gap-2 grid-rows-2 p-5">
                <section className="w-full md:w-[80%] my-4 text-zinc-800 flex flex-col gap-2 md:gap-5">
                    <h2 className="text-2xl font-bold">
                        What's MixList?
                        </h2>
                    <p>
                    MixList was created with the aim of providing its users with a simple,
                    quick and intuitive way to create multiple shopping lists to share with their family,
                    friends, among other people.
                    </p>
                </section> 

                <section className="w-full md:w-[90%] my-4 flex flex-col gap-2 md:gap-5">
                    <h2 className="text-2xl font-bold">
                        Why Choose Us
                    </h2>
                    <p> 
                    Mixlist aims to provide the best experience to its users, offering quick costumer support,
                    a secure and easy to use interface and offers a wide range of features to help you organize your shopping lists.
                    </p>
                </section>

                <section className="w-[80%] md:w-[65%] my-4 flex flex-col gap-2 md:gap-3">
                    <h2 className="text-xl md:text-2xl font-bold">
                    Contacts
                        </h2>
                    <p className="font-semibold"> 
                    If you have any questions or suggestions, please contact us at the following email:
                    </p>
                    <p className=" font-bold">
                    mixlist.ua@gmail.com
                    </p>
                </section>

                <section className="w-full md:w-[80%] my-4 flex flex-col gap-2 md:gap-3">
                    <h2 className=" text-xl md:text-2xl font-bold">
                    Who are we?
                        </h2>
                    <p className=" md:text-md"> 
                    MixList was created by a group of passionate developers who 
                    wanted to create a tool to help people in their daily lives.
                    </p>
                    <p className="text-md font-semibold">
                    Special thanks to our friends for their support and guidance.
                    </p>
                </section>
            </main>
        </div>
    </div>)
}