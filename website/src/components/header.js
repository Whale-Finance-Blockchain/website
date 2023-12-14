import * as React from "react"
import { Link } from "gatsby"
import { useScrollDirection } from "../hooks/use-scroll-direction"
import Logo from "../images/whale_logo_white.png"

const Header = ({ siteTitle }) => {

  const scrollDirection = useScrollDirection(50)
  const translateClass = (scrollDirection === 'down') ? '-translate-y-full' : 'translate-y-0';

  return  (
    <>
      <header className={`transform ${translateClass} transition duration-1000 z-20 sticky top-0 bg-transparent shadow-lg hover:bg-primary-color`}>
        <nav className="container mx-auto px-[var(--size-gutter)] py-3">
          <div className="flex justify-between items-center">
            {/* Logo and Branding */}
            <div className="text-lg font-semibold flex flex-row items-center">
              <img src={Logo} alt="Whale Finance Logo" className="mx-2 w-[25px] h-[25px]"/>
              <Link to="/" className="text-white outline-0 text-xl transition-colors duration-300">
                Whale Finance
              </Link>
            </div>
            
            {/* Navigation Links */}
            <div className="flex-1 flex flex-row justify-end mx-8 space-x-8">
              <Link to="/" className="text-white px-4 text-xl transition-colors duration-300">
                About
              </Link>
              <Link to="/" className="text-white px-4 text-xl transition-colors duration-300">
                Docs
              </Link>
              <Link to="/" className="text-white px-4 text-xl transition-colors duration-300">
                Community
              </Link>
            </div>
            <div className="flex flex-col px-8 py-2 items-center text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-primary-color rounded shadow-lg outline-none active:bg-secondary-color focus:outline-none hover:bg-white hover:text-primary-color hover:cursor-pointer">
              Launch App
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
