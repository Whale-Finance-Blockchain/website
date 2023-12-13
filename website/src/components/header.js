import * as React from "react"
import { Link } from "gatsby"
import { useScrollDirection } from "../hooks/use-scroll-direction"

const Header = ({ siteTitle }) => {

  const scrollDirection = useScrollDirection(50)
  const translateClass = (scrollDirection === 'down') ? '-translate-y-full' : 'translate-y-0';

  console.log(translateClass);

  return  (
    <>
      <header className={`transform ${translateClass} transition-transform duration-600 sticky top-0 bg-gradient-to-r from-primary-color to-secondary-color shadow-lg`}>
        <nav className="container mx-auto px-[var(--size-gutter)] py-3">
          <div className="flex justify-between items-center">
            {/* Logo and Branding */}
            <div className="text-lg font-semibold">
              <Link to="/" className="text-white outline-0 text-xl transition-colors duration-300">
                Whale Finance
              </Link>
            </div>
            
            {/* Navigation Links */}
            <div className="flex space-x-8">
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
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
