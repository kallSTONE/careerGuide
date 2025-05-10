import heroImage from "../assets/img/3.png"

export default function Hero(){
    return (
        <>
            <div className="flex flex-wrap justify-between mt-35 h-[70vh] w-full   mx-0 p-5 ">

                <div className="text-left max-w-[600px]  pl-30">
                    <h1 className="text-left mb-10 font-stretch-95%">Your Chance to Excel In Any Endevour</h1>
                    <h3>Learning guide at your finger tips</h3>
                    <button className="mt-9 border border-Emerald py-2 px-4 rounded-lg bg-Background hover:bg-blue-300">Get now</button>
                </div>

                <img  draggable="false" class="w-auto h-auto " src={heroImage} alt="hero" />
            </div>

        </>
    )
}