import NavList from "./navList"

const ModalMenu = ({setToggleMenu,setToggleStyle,toggleStyle}) => {
  return (
    <div
        className={`fixed inset-0 z-10 md:hidden ${toggleStyle}`}
      >
        <div className="flex min-h-screen text-center  items-center justify-center">
          <div
            className="fixed inset-0 bg-[#06273A] bg-opacity-[0.98]"
          ></div>
          <div className="relative transform transition-all">
          <NavList setToggleMenu={setToggleMenu} setToggleStyle={setToggleStyle}/>
          </div>
        </div>
      </div>
  )
}

export default ModalMenu
