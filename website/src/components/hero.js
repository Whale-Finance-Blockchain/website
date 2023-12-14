import * as React from "react"

import Logo from "../images/whale_logo_white.png"
import { Reveal, RevealWrapper } from "./reveal"

const HeroSection = () => {

    return (
        <div className="relative w-full">
            {/* Hero Section */}
            <div className="relative w-full h-screen ">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="https://docs.material-tailwind.com/demo.mp4"
                    autoPlay
                    loop
                    muted
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-cyan-700 opacity-90"></div>
                <RevealWrapper>
                <div className="relative flex flex-col items-center justify-center w-full h-full px-4 mx-auto text-center md:px-10">
                    <Reveal>
                    <div className="flex flex-col items-center justify-center pt-32">
                    <img src={Logo} alt="Whale Finance Logo" className="w-[200px] h-[200px]"/>
                    </div>
                    <h1 className="mt-4 mb-4 text-4xl font-bold text-white md:mt-6 md:text-6xl">
                        Whale Finance
                    </h1>
                    </Reveal>
                    <span class="type-description mt-4 mb-8 text-4xl font-normal text-white md:mt-6 md:text-3xl "></span>
                    <Reveal>
                    <div className="flex flex-col items-center justify-center w-full mt-6 text-center md:flex-row md:mb-16">
                        <button className="px-6 py-3 mb-3 mr-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-transparent rounded shadow-xl outline-none active:bg-secondary-color focus:outline-none hover:bg-primary-color">
                            Launch App
                        </button>
                        <button className="px-6 py-3 mb-3 mr-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-transparent rounded shadow-xl outline-none active:bg-secondary-color focus:outline-none hover:bg-primary-color">
                            Documentation
                        </button>
                    </div>
                    </Reveal>
                </div>
                </RevealWrapper>
            </div>
            {/* Menu Flutuante */}
            <RevealWrapper>
            <div className="absolute bottom-8 w-full h-[28vh] flex flex-col items-center">
                <div className="z-10 w-[70%] h-full bg-white/50 rounded-xl shadow-xl backdrop-blur-md p-4">
                    <Reveal>
                    <div className="mx-auto flex flex-row h-[100%]">
                        {/* Feature 1 */}
                        <div className="basis-1/2 flex flex-col justify-center items-center text-center">
                            <h2 className="font-bold text-primary-color text-2xl mb-4">Investor</h2>
                            <p className="mb-8">Platform that makes easy investments</p>
                            <div className="px-6 py-3 w-48 text-center text-sm font-bold text-primary-color uppercase transition-all duration-150 ease-linear bg-transparent rounded shadow-lg outline-none active:bg-secondary-color focus:outline-none hover:bg-primary-color hover:text-white hover:cursor-pointer">
                                Invest Now
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="basis-1/2 flex flex-col justify-center items-center text-center">
                            <h2 className="font-bold text-primary-color text-2xl mb-4">Manager</h2>
                            <p className="mb-8">Provides opportunities to profit</p>
                            <div className="px-6 py-3 w-48 text-center text-sm font-bold text-primary-color uppercase transition-all duration-150 ease-linear bg-transparent rounded shadow-lg outline-none active:bg-secondary-color focus:outline-none hover:bg-primary-color hover:text-white hover:cursor-pointer">
                                Manage Now
                            </div>
                        </div>
                    </div>
                    </Reveal>
                </div>
            </div>
            </RevealWrapper>
            {/* Line Section */}
            <div className="w-full h-[24vh] bg-gradient-to-b from-slate-300 to-transparent">
            </div>
        </div>
    )
}

export default HeroSection