import NavList from './navList'

const ModalMenu = ({ setToggleMenu, toggleStyle }) => {
  return (
    <div className={`fixed inset-0 z-10 md:hidden ${toggleStyle}`}>
      <div className="flex min-h-screen items-center  justify-center text-center">
        <div className="fixed inset-0 bg-[#06273A] bg-opacity-[0.98]"></div>
        <div className="relative transform transition-all">
          <NavList
            setToggleMenu={setToggleMenu}
          />
        </div>
      </div>
    </div>
  )
}

export default ModalMenu
