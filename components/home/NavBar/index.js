import { useState } from 'react'
import ModalMenu from './modalMenu'
import NavList from './navList'

const NavigationBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <>
      <div className="bg-[#06273A] px-20 pt-8  text-light">
        <div className="flex justify-between pb-3 md:pb-0">
          <span className="text-xl">Aysha&apos;s kitchen</span>
          <button onClick={() => setToggleMenu(true)} className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="32px"
              height="32px"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <rect
                width="18"
                height="2"
                x="3"
                y="11"
                fill="currentColor"
                rx=".95"
                ry=".95"
              />
              <rect
                width="18"
                height="2"
                x="3"
                y="16"
                fill="currentColor"
                rx=".95"
                ry=".95"
              />
              <rect
                width="18"
                height="2"
                x="3"
                y="6"
                fill="currentColor"
                rx=".95"
                ry=".95"
              />
            </svg>
          </button>
        </div>
        <hr className="mt-5 hidden md:block" />
      </div>
      <div className="sticky top-0 hidden bg-[#06273A] px-20 md:block">
        <NavList />
      </div>
      {
        toggleMenu && <ModalMenu />
      }
    </>
  )
}

export default NavigationBar
