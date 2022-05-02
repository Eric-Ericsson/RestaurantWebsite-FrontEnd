import Image from 'next/image'

const About = () => {
  return (
    <div className="md:px-20 grid-row-2 my-12 grid h-[650px] gap-12 py-8 md:grid-cols-2 lg:gap-20">
      <div className="relative order-last text-white md:order-none">
        <div className="grid-row-2 grid grid-cols-2 gap-4 md:mt-20 lg:gap-8">
          <div className="md:52 relative h-44 shadow-2xl">
            <Image
              className="rounded-lg shadow-2xl"
              src="https://i.pinimg.com/564x/28/54/12/28541210601101900dd3197c8c93b30a.jpg"
              alt=""
              layout="fill"
            />
          </div>
          <div className="md:52 relative mt-12 h-44 shadow-2xl">
            <Image
              className="rounded-lg shadow-2xl"
              src="https://i.pinimg.com/564x/f1/13/66/f11366925ead8740dac733b2a0b1912c.jpg"
              alt=""
              layout="fill"
            />
          </div>
          <div className="md:52 relative -mt-12 h-44 shadow-2xl">
            <Image
              className="rounded-lg shadow-2xl"
              src="https://i.pinimg.com/564x/5b/ce/90/5bce9017cc10547022b479d9ea1808c8.jpg"
              alt=""
              layout="fill"
            />
          </div>
          <div className="md:52 relative h-44 shadow-2xl">
            <Image
              className="rounded-lg shadow-2xl"
              src="https://i.pinimg.com/564x/a7/0b/85/a70b85cacda476709b48990640fd56a5.jpg"
              alt=""
              layout="fill"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 text-center leading-7 tracking-wide text-light md:items-start md:text-left lg:w-[80%]">
        <span className="font-mono text-[40px]">About</span>
        <span className="text-[20px]">Proud to Serve You</span>
        <span className="text-[15px] opacity-95">
          Founded in 2000, DARMA RESTAURENT is known for revolutionizing the way
          people eat and enjoy food. We take pride in our ability to discover
          the most unique flavors from around the world and share them with the
          San Francisco area. Join us.
        </span>
        <button className="w-32 border-2 bg-light py-2 px-6 text-[#06273a]">
          Contact
        </button>
      </div>
    </div>
  )
}

export default About
