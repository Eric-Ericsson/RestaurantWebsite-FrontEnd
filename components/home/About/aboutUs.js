import Image from 'next/image'

const AboutUs = () => {
  return (
    <div className="grid-row-2 my-12 grid py-8 md:grid-cols-2 h-[650px] gap-20">
      <div className="relative order-last md:order-none">
      <Image src="https://static.wixstatic.com/media/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg/v1/fill/w_466,h_520,fp_0.50_0.50,lg_1,q_80,enc_auto/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg" alt='' layout='fill'/>
      </div>
      <div className="flex w-[80%] flex-col gap-8 justify-center text-light tracking-wide leading-7">
        <span className='text-[40px]'>About Us</span>
        <span className='text-[20px]'>Honest Cooking</span>
        <span className='text-[18px] opacity-95'>
          DARMA RESTAURENT has been nestled in the San Francisco area ever since
          2000. This cozy establishment highlights our passion for market-fresh
          ingredients, honest cooking, and an enjoyable atmosphere. Our menu
          features a selection of dishes, all made in-house by our team of
          talented chefs.
        </span>
        <span className='text-[18px] opacity-95'>
          With some of the most delicious combinations of ingredients, there is
          something for everyone to enjoy. Loved by locals and traveling foodies
          alike, now is the perfect time for you to join us today at DARMA
          RESTAURENT.
        </span>
      </div>
    </div>
  )
}

export default AboutUs
