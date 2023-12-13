import * as React from "react"

import { Reveal, RevealWrapper } from "../components/reveal"
import Logo from "../images/whale_app.png"
import backgroundImage from "../images/burj_khalifa_white.png"

const HeroSection = () => {

    return (
        <RevealWrapper>
        <div 
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className="w-full h-[95vh] flex flex-col justify-center items-center bg-no-repeat bg-cover"
        >
            <Reveal>
            <div className="flex flex-row w-[95vw] justify-center items-center">
                <div className="w-[60%] h-full  flex flex-col justify-center items-center">
                    <div className="w-[70%] h-[80%] flex flex-col justify-center items-center">
                        <span class="type-description text-8xl font-bold text-secondary-color"></span>
                    </div>
                </div>
                <div className="w-[40%] flex flex-col justify-center items-center">
                    <img src={Logo} alt="Whale Finance Logo" className="w-[400px] h-[400px]"/>
                    <button className="px-16 py-2 mt-12 text-xl font-bold rounded-full bg-secondary-color text-white hover:bg-white hover:text-secondary-color transition duration-1000 ease-in-out">
                        Launch App
                    </button>
                </div>
            </div>
            </Reveal>
        </div>
        </RevealWrapper>
    )
}

export default HeroSection