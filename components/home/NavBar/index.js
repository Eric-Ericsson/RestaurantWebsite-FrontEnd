import { useState } from 'react'
import ModalMenu from './modalMenu'
import NavList from './navList'

const NavigationBar = () => {
  const [toggleMenu, setToggleMenu] = useState('false')
  const [toggleStyle, setToggleStyle] = useState('translate-x-full')

  const handleOpenButton = () => {
    setToggleMenu('true')
    setToggleStyle('translate-x-0')
  }

  return (
    <>
      <div className="bg-[#06273A] px-8 pt-8 text-light  md:px-20">
        <div className="fixed top-0 right-0 left-0 z-10 flex justify-between bg-[#06273A] p-1 px-4 pb-3 md:relative md:p-0 md:px-0 md:pb-0">
          <span className="styleHead text-2xl md:text-4xl">
            Aysha&apos;s kitchen
          </span>
          <button onClick={handleOpenButton} className="md:hidden ">
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
      <div className="sticky top-0 z-[70] hidden bg-[#06273A] px-20 md:block">
        <NavList />
      </div>

      {toggleMenu == 'true' && (
        <ModalMenu
          setToggleMenu={setToggleMenu}
          toggleStyle={toggleStyle}
          setToggleStyle={setToggleStyle}
        />
      )}
    </>
  )
}

export default NavigationBar
