import Link from 'next/link'

const NavList = ({setToggleMenu, setToggleStyle}) => {
  const handleClose = () => {
    // setToggleStyle('ease-in-out duration-700 translate-x-0');
    setToggleMenu('false')

  }
  return (
    <div className="relative flex flex-col gap-8 py-5 text-[24px] text-light md:flex-row md:text-[16px]">
      <div onClick={handleClose} className='md:hidden absolute -top-32 -right-32'>
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 30L30 2m0 28L2 2"/></svg>
      </div>
      <Link href="/">Home</Link>
      <Link href="/menu">Menu</Link>
      <Link href="/recipe">Recipe</Link>
      <button>Contact</button>
    </div>
  )
}

export default NavList
