import Image from 'next/image'
import AboutUs from './aboutUs'

const About = () => {
  return (
    <div>
      <div className="grid-row-2 my-12 grid py-8 md:grid-cols-2 h-[650px] gap-20 ">
        <div className="relative order-last md:order-none">
      <Image src="https://static.wixstatic.com/media/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg/v1/fill/w_466,h_520,fp_0.50_0.50,lg_1,q_80,enc_auto/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg" alt='' layout='fill'/>
        </div>
        <div className="flex w-[80%] flex-col gap-8 justify-center text-light tracking-wide leading-7">
          <span className='text-[40px]'>About</span>
          <span className='text-[20px]'>Proud to Serve You</span>
          <span className='text-[15px] opacity-95'>
            Founded in 2000, DARMA RESTAURENT is known for revolutionizing the
            way people eat and enjoy food. We take pride in our ability to
            discover the most unique flavors from around the world and share
            them with the San Francisco area. Join us.
          </span>
          <button className="bg-light text-[#06273a] w-36 border-2 py-4 px-6">Contact</button>
        </div>
      </div>
      <AboutUs />
    </div>
  )
}

export default About
