import * as React from "react"
import { Link } from "gatsby"
// import { useScrollDirection } from "../hooks/use-scroll-direction"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button";
import { FaDiscord, FaTwitter, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

const Header = ({ siteTitle }: { siteTitle: string }) => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    // const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const [isScrolled, setIsScrolled] = React.useState(false);

    // const scrollDirection = useScrollDirection(50)
    // const translateClass = (scrollDirection === 'down') ? '-translate-y-full' : 'translate-y-0';
    const bgMenu = !isScrolled ? 'lg:bg-transparent lg:text-white' : 'lg:bg-background lg:text-foreground lg:shadow-lg';

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 20) {
        setIsScrolled(true);
        } else {
        setIsScrolled(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headersData = [
        {
            id: '1',
            trigger: 'About',
            submenu1_title: 'Litepaper',
            submenu1_text: 'Check our idea and how we are going to implement it.',
            submenu2_title: 'Our Social Media',
            submenu2_text: 'Luiz Bryan'
        },
        // {
        //     id: '2',
        //     trigger: 'Get Involved',
        //     submenu1_title: 'Our Social Media',
        //     submenu1_text: 'DISCORD, INSTA, DKAS DSADA',
        //     submenu2_title: 'Our Blog',
        //     submenu2_text: 'dnaksdbasduabdusabd'
        // }
    ];

    return  (
        <>
        {/* transform ${translateClass} transition duration-1000 */}
        <header className="z-20 sticky top-0 w-full">
            
            {/* responsivo */}

            <div className="block lg:hidden bg-primary p-2">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex items-center px-3 py-2 border rounded appearance-none focus:outline-none">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>

            {/* sidebar menu */}

            {isMenuOpen && (
                <div className="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>
                    <div className="relative flex-1 flex flex-col max-w-xs w-full bg-primary">
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                            <button onClick={() => setIsMenuOpen(false)} className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Close sidebar</span>
                                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                            <nav className="mt-5 flex-1 px-2 space-y-8 text-background">
                                <Button variant="ghost" className="w-[180px] text-2xl"><a href="https://docs.google.com/document/d/1-L9aI6h1UAKb5a494ocbFlLQsVnvTPgunvr82geSgYo/edit?usp=sharing">Litepaper</a></Button>
                                <div className="flex justify-center space-x-6 text-background">
                                    <a href="https://discord.gg/zCRxDTTM"><FaDiscord className="text-2xl cursor-pointer" /></a>
                                    <a href="https://twitter.com/Whale_dApp"><FaTwitter className="text-2xl cursor-pointer" /></a>
                                    <a href="https://t.me/finance_whale"><FaTelegram className="text-2xl cursor-pointer" /></a>
                                    <a href="https://github.com/Whale-Finance-Blockchain"><FaGithub className="text-2xl cursor-pointer" /></a>
                                    <a href="https://www.linkedin.com/company/whale-finance/"><FaLinkedin className="text-2xl cursor-pointer" /></a>
                                </div>
                            </nav>
                        </div>
                        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                        </div>
                    </div>
                </div>
            )}



            {/* MENU */}
            
            <div className={`hidden lg:block lg:py-2 lg:w-full lg:text-md lg:flex lg:flex-col lg:items-end lg:pr-[100px] ${bgMenu}`}>
                <NavigationMenu>
                    <NavigationMenuList>

                        {headersData.map(item => (
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="font-bold text-md bg-transparent">{item.trigger}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    {/* md:w-[500px] md:grid-cols-2 lg:w-[600px]  */}
                                    <ul className="grid w-[300px] gap-3 p-4 ">
                                        <NavigationMenuLink>
                                            <a href="https://docs.google.com/document/d/1-L9aI6h1UAKb5a494ocbFlLQsVnvTPgunvr82geSgYo/edit?usp=sharing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:cursor-pointer">
                                                <div className="text-sm font-medium leading-none">{item.submenu1_title}</div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    {item.submenu1_text}
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink>
                                            <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:cursor-pointer">
                                                <div className="text-sm font-medium leading-none">{item.submenu2_title}</div>
                                                <div className="flex justify-center space-x-6 pt-2 line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    <a href="https://discord.gg/zCRxDTTM"><FaDiscord className="text-xl cursor-pointer" /></a>
                                                    <a href="https://twitter.com/Whale_dApp"><FaTwitter className="text-xl cursor-pointer" /></a>
                                                    <a href="https://t.me/finance_whale"><FaTelegram className="text-xl cursor-pointer" /></a>
                                                    <a href="https://github.com/Whale-Finance-Blockchain"><FaGithub className="text-xl cursor-pointer" /></a>
                                                    <a href="https://www.linkedin.com/company/whale-finance/"><FaLinkedin className="text-xl cursor-pointer" /></a>
                                                </div>
                                            </div>
                                        </NavigationMenuLink>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        ))}

                        {/* LAUNCH APP BUTTON */}

                        <NavigationMenuItem>
                                <Button className="w-[180px] mx-[20px] font-bold"><a href="https://whale-finance-areon.vercel.app/">Launch App</a></Button>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
        </>
    )
}

export default Header