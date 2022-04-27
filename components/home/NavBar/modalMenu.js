import NavList from "./navList"

const ModalMenu = () => {
  return (
    <div
        className="fixed inset-0 z-10 overflow-hidden"
      >
        <div className="flex min-h-screen text-center  items-center justify-center">
          <div
            className="fixed inset-0 bg-[#06273A] bg-opacity-95"
          ></div>
          <div className="relative transform transition-all">
          <NavList />
          </div>
        </div>
      </div>
  )
}

export default ModalMenu
