import TabTg from "./TabToggler.jsx" 

import cardImg1 from "../assets/Img/cyanCyber.png"
import cardImg2 from "../assets/Img/cyanCyber1.png"
import cardImg3 from "../assets/Img/cyanCyber2.png"
import iconPrompt from "../assets/Img/iconPrompt.png"


export default function Features(){

    return(
        <>


            <div className=" flex flex-col bg-background17 h-400 w-full " id="pathGenerator">
                

                    {/* Describing Feature for Path Generator */}
                <div className="flex flex-col w-full items-center mb-70">
                    <div className="flex rounded-full w-fit border border-border10  text-center text-[30px] my-4 px-2 shadow-[0px_-4px_97px_10px_#1daa91]"> 1 </div>
                    <h3 className="text-center text-[30px] my-4">Path Generator</h3>

                    <div className="flex flex-wrap justify-center h-auto w-full lg:w-[90%] m-5">
                        <img  draggable="false" src={cardImg1} className="max-md:hidden max-md:w-[70%] h-auto my-6 opacity-40" alt="card" />

                        <div className="flex border border-border1 rounded-xl min-h-80 w-[50%] xl:min-w-[800px]">
                            <div class="p-4 max-w-sm m-4 border border-border1 rounded-md bg-Background1/70">
                                <div class="flex rounded-lg h-full bg-Background-400 p-8 flex-col bg-white-950">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img  draggable="false" src={iconPrompt} />
                                        </div>
                                        <h2 class="text-white text-lg font-medium">Prompt Based</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="leading-relaxed text-base text-white">Whatever it is that you are pllaning to learn, tell it to us we will tell you what exactly you need to staart with and where to find each resouce .
                                        </p>

                                        <img  draggable="false" src={cardImg1} className="my-6" alt="card" />
                                        <a href="#" class="mt-3 text-black hover:text-blue-600 inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" class="w-4 h-4 ml-2 hover:text-blue-600" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
        
                                </div>
                            </div>
                            <TabTg/>
                        </div>

                    </div>
                </div>




                    {/* Describing Features for Todo list */}
                <div className="flex flex-col w-full items-center mb-70">
                    <div className="flex rounded-full w-fit border border-border10  text-center text-[30px] my-4 px-2 shadow-[0px_-4px_97px_10px_#1daa91]"> 2 </div>
                    <h3 className="text-center text-[30px] my-4">To-Do List</h3>

                    <div className="flex flex-wrap justify-center h-auto w-full lg:w-[90%] m-5">

                        <div className="flex border border-border1 rounded-xl min-h-80 w-[50%] xl:min-w-[800px]">
                            <div class="p-4 max-w-sm m-4 border border-border1 rounded-md bg-Background1/70">
                                <div class="flex rounded-lg h-full bg-Background-400 p-8 flex-col bg-white-950">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img  draggable="false" src={iconPrompt} />
                                        </div>
                                        <h2 class="text-white text-lg font-medium">Researched Approach</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="leading-relaxed text-base text-white">Whatever it is that you are pllaning to learn, tell it to us we will tell you what exactly you need to staart with and where to find each resouce .
                                        </p>

                                        <img  draggable="false" src={cardImg2} className="my-6" alt="card" />
                                        <a href="#" class="mt-3 text-black hover:text-blue-600 inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" class="w-4 h-4 ml-2 hover:text-blue-600" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
        
                                </div>
                            </div>
                            <TabTg/>
                        </div>

                        <img  draggable="false" src={cardImg2} className="max-md:hidden max-md:w-[70%] h-auto my-6 opacity-40" alt="card" />

                    </div>
                </div>
       
            </div>                
                

                
        </>
    )

}