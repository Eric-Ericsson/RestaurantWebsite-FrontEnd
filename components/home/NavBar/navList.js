import Link from 'next/link'
import { useRouter } from 'next/router'

const NavList = ({ setToggleMenu, setToggleStyle }) => {
  const router = useRouter()

  const handleClose = () => {
    // setToggleStyle('ease-in-out duration-700 translate-x-0');
    setToggleMenu('false')
  }
  return (
    <div className="relative flex flex-col gap-8 py-5 text-[24px] font-bold uppercase text-light md:flex-row md:text-[16px]">
      <div
        onClick={handleClose}
        className="absolute -top-32 -right-32 md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
        >
          <path
            fill="none"
            stroke="currentcolor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2 30L30 2m0 28L2 2"
          />
        </svg>
      </div>
      <Link href="/">
        <span
          className={`cursor-pointer ${
            router.pathname == '/' &&
            'underline decoration-green-600 decoration-2 underline-offset-[12px]'
          }`}
        >
          home
        </span>
      </Link>
      <Link href="/menu">
        <span
          className={`cursor-pointer ${
            router.pathname == '/menu' &&
            'underline decoration-green-600 decoration-2 underline-offset-[12px]'
          }`}
        >
          Menu
        </span>
      </Link>
      <Link href="/recipe">
        <span
          className={`cursor-pointer ${
            router.pathname == '/recipe' &&
            'underline decoration-green-600 decoration-2 underline-offset-[12px]'
          }`}
        >
          Recipe
        </span>
      </Link>
      <button className="font-bold uppercase">
        <span>Contact</span>
      </button>
    </div>
  )
}

export default NavList
