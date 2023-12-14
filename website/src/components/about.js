import * as React from "react"

import { Reveal, RevealWrapper } from "../components/reveal"
import ChartImg from "../images/graph_image.png"

const AboutSection = () => {

    return (
        <RevealWrapper>
        <div className="flex flex-col w-full items-center justify-center bg-slate-50 my-10 py-10">
            {/* Left Side with Graphs */}
            <Reveal>
            <div className="w-[80%] flex flex-row">
                <div className="flex flex-col items-center md:items-start">
                    <img src={ChartImg} alt="Chart " className="w-[400px] h-auto"/>
                </div>
                {/* Right Side with Text */}
                <div className="flex flex-col justify-center md:ml-10 mt-5 md:mt-0 text-center md:text-left">
                    <h1 className="text-5xl font-600 text-primary-color mb-12">Asset Management tools</h1>
                    <p className="text-3xl font-light mb-4">
                    Allowing to bring decentralization into Financial Markets
                    </p>
                    <p className="mb-12">Available on Ethereum</p>
                    <div className="px-6 py-3 w-48 text-center text-sm font-bold text-primary-color uppercase transition-all duration-150 ease-linear bg-transparent rounded shadow-lg outline-none active:bg-secondary-color focus:outline-none hover:bg-primary-color hover:text-white hover:cursor-pointer">
                        About
                    </div>
                </div>
            </div>
            </Reveal>
        </div>
        </RevealWrapper>
    )
}

export default AboutSection