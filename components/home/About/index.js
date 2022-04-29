import Image from 'next/image'

const About = () => {
  return (
    <div className="grid-row-2 my-12 grid h-[650px] gap-12 py-8 md:grid-cols-2 lg:gap-20">
      <div className="relative order-last text-white md:order-none">
        <div className="grid-row-2 grid grid-cols-2 gap-4 md:mt-20 lg:gap-8">
          <div className="md:52 relative h-44 shadow-2xl">
            <Image
              className="rounded-lg shadow-2xl"
              src="https://static.wixstatic.com/media/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg/v1/fill/w_466,h_520,fp_0.50_0.50,lg_1,q_80,enc_auto/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg"
              alt=""
              layout="fill"
            />
          </div>
          <div className="md:52 relative mt-12 h-44 shadow-2xl">
            <Image
              className="rounded-lg shadow-2xl"
              src="https://static.wixstatic.com/media/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg/v1/fill/w_466,h_520,fp_0.50_0.50,lg_1,q_80,enc_auto/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg"
              alt=""
              layout="fill"
            />
          </div>
          <div className="md:52 relative -mt-12 h-44 shadow-2xl">
            <Image
              className="rounded-lg shadow-2xl"
              src="https://static.wixstatic.com/media/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg/v1/fill/w_466,h_520,fp_0.50_0.50,lg_1,q_80,enc_auto/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg"
              alt=""
              layout="fill"
            />
          </div>
          <div className="md:52 relative h-44 shadow-2xl">
            <Image
              className="rounded-lg shadow-2xl"
              src="https://static.wixstatic.com/media/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg/v1/fill/w_466,h_520,fp_0.50_0.50,lg_1,q_80,enc_auto/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg"
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
