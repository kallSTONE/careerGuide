import cardImg1 from "../assets/Img/cyanCyber.png"
import cardImg2 from "../assets/Img/cyanCyber1.png"
import cardImg3 from "../assets/Img/cyanCyber2.png"

export default function FeatureCards(){

    return(
        <>
            
                <div class="justify-center bg-Background20/5 w-full p-5 my-40 shadow-[10px_-60px_97px_5px_#03c3a1] rounded-xs lg:min-h-100">

                    <h3 className="text-center text-[30px] my-4">Features</h3>

                    <div className="flex flex-wrap justify-center  py-20">

                        <div class="p-4 max-w-sm m-4 border border-border1 rounded-md bg-Background20/12">
                            <div class="flex rounded-lg h-full bg-Background-400 p-8 flex-col bg-white-950">
                                <div class="flex items-center mb-3">
                                    <div
                                        class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 class="text-white text-lg font-medium">Path Generator</h2>
                                </div>
                                <div class="flex flex-col justify-between flex-grow">
                                    <p class="leading-relaxed text-base text-white">
                                        Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
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

                        <div class="p-4 max-w-sm m-4 border border-border1 rounded-md bg-Background20/12">
                            <div class="flex rounded-lg h-full bg-Background-400 p-8 flex-col bg-white-950">
                                <div class="flex items-center mb-3">
                                    <div
                                        class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 class="text-white text-lg font-medium">To-do list</h2>
                                </div>
                                <div class="flex flex-col justify-between flex-grow">
                                    <p class="leading-relaxed text-base text-white">
                                        Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                                    </p>

                                    <img  draggable="false" src={cardImg2} className="my-6" alt="card" />

                                    <a href="#" class="mt-3 text-black hover:text-blue-600 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="p-4 max-w-sm m-4 border border-border1 rounded-md bg-Background20/12">
                            <div class="flex rounded-lg h-full bg-Background-400 p-8 flex-col bg-white-950">
                                <div class="flex items-center mb-3">
                                    <div
                                        class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 class="text-white text-lg font-medium">Milestone</h2>
                                </div>
                                <div class="flex flex-col justify-between flex-grow">
                                    <p class="leading-relaxed text-base text-white">
                                        Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                                    </p>

                                    <img  draggable="false" src={cardImg3} className="my-6 opacity-60" alt="card" />
                                    <a href="#" class="mt-3 text-black hover:text-blue-600 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
        
        </>
    )
}