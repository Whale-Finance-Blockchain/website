import * as React from "react"
import Bkg from "../assets/whale_bkg2.png"
import Logo from "../assets/whale_logo_white.png"
import AreonLogo from "../assets/Areon_white.svg"
import { Button } from "./ui/button"
import { Link } from "gatsby"
import { FaDiscord, FaTwitter, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
// import { Reveal, RevealWrapper } from "./reveal"
// import Cover from "../assets/whale_impressionist.png"

const HeroSection = () => {

    // const [position, setPosition] = React.useState({ x: 0, y: 0 });
    // const divRef = React.useRef(null);

    // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    //     if (divRef.current) {
    //     const rect = (divRef.current as HTMLDivElement).getBoundingClientRect();
    //       setPosition({
    //         x: e.clientX - rect.left - rect.width / 2,
    //         y: e.clientY - rect.top - rect.height / 2
    //       });
    //     }
    // };

    // const translateXClass = `translate-x-[${position.x}px]`;
    // const translateYClass = `translate-y-[${position.y}px]`
    // console.log(translateXClass, translateYClass);

    return (
        <div className="w-full">
            <div className="w-full flex flex-col items-center justify-center">
                {/* <div 
                    ref={divRef}
                    onMouseMove={handleMouseMove}
                    className="relative overflow-hidden bg-gray-100 h-[100vh] w-full flex flex-row justify-start items-center"
                >
                    <img style={{ 
                            transform: `translate(${Math.floor(-1*position.x/40)}px, ${Math.floor(position.y/40)}px)`
                        }}
                        src={Cover} 
                        alt="" 
                        className="saturate-150 absolute -top-[2vh] left-0 w-auto h-[110vh]"
                    />
                    <div 
                        style={{ 
                            transform: `translate(${Math.floor(position.x/10)}px, ${Math.floor(position.y/10)}px)`
                        }}
                        className="absolute -top-[5%] -left-[5%] w-[25%] h-[110%] bg-green-300/50 backdrop-blur-md transform-gpu transition-transform ease-in-out duration-1000"
                    >
                        LEFT
                    </div>

                    <div className="w-[70%] h-[100%] bg-transparent"></div>

                    <div style={{ 
                            transform: `translate(${Math.floor(-1*position.x/10)}px, ${Math.floor(-1*position.y/10)}px)`
                        }}
                        className="absolute -top-[5%] -right-[5%] w-[25%] h-[110%] bg-blue-300/50 backdrop-blur-md transform-gpu transition-transform ease-in-out duration-1000"
                    >
                        RIGHT
                    </div>

                </div> */}
                <div 
                    className="relative overflow-hidden bg-gray-100 h-[90vh] w-full flex flex-row justify-start items-center"
                >
                    <img 
                        src={Bkg} 
                        alt="" 
                        className="absolute cover w-full h-[100%]"
                    />
                    <div className="absolute w-full h-[100%] flex flex-col justify-center items-center">
                        <img src={Logo} alt="Whale Finance Logo" className="w-[200px] h-[200px]"/>
                        <h1 className="mt-4 mb-4 text-2xl font-bold text-white">
                            Whale Finance
                        </h1>
                        <h2 className="mt-4 mb-4 italic text-white">
                            Decentralized Asset Management for
                        </h2>
                        <img src={AreonLogo} alt="Areon" className="w-auto h-[40px]"/>
                        <div className="flex flex-row justify-center space-x-6 pt-12">
                            <Button variant="secondary" className="w-[180px]"><a href="https://docs.google.com/document/d/1-L9aI6h1UAKb5a494ocbFlLQsVnvTPgunvr82geSgYo/edit?usp=sharing">Litepaper</a></Button>
                            <Button className="w-[180px]"><a href="https://whale-finance-areon.vercel.app/">Launch App</a></Button>
                        </div>
                        <div className="flex justify-center mt-20 space-x-8 text-background">
                            <a href="https://discord.gg/zCRxDTTM"><FaDiscord className="text-3xl cursor-pointer" /></a>
                            <a href="https://twitter.com/Whale_dApp"><FaTwitter className="text-3xl cursor-pointer" /></a>
                            <a href="https://t.me/finance_whale"><FaTelegram className="text-3xl cursor-pointer" /></a>
                            <a href="https://github.com/Whale-Finance-Blockchain"><FaGithub className="text-3xl cursor-pointer" /></a>
                            <a href="https://www.linkedin.com/company/whale-finance/"><FaLinkedin className="text-3xl cursor-pointer" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection