import Image from 'next/image'

const AboutUs = () => {
  return (
    <div className="relative">
      <div className="z-10 my-12 mt-60 grid h-[650px] rounded-br-[50px] rounded-bl-[50px] rounded-tl-[50px] rounded-tr-[50px] bg-white shadow-2xl md:mt-0 md:grid-cols-2 md:gap-4  lg:gap-16">
        <div className="relative hidden md:inline">
          <Image
            className="rounded-tl-[50px] rounded-bl-[50px]"
            src="https://static.wixstatic.com/media/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg/v1/fill/w_466,h_520,fp_0.50_0.50,lg_1,q_80,enc_auto/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg"
            alt=""
            layout="fill"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 px-8 text-center leading-7 tracking-wide text-dark md:items-start md:px-4 md:text-left lg:w-[80%] lg:gap-8 lg:px-0">
          <span className="font-mono text-[40px]">About Us</span>
          <span className="text-[20px] opacity-95">Honest Cooking</span>
          <span className="text-[15px] opacity-95">
            DARMA restaurant has been nestled in the San Francisco area ever
            since 2000. This cozy establishment highlights our passion for
            market-fresh ingredients, honest cooking, and an enjoyable
            atmosphere. Our menu features a selection of dishes, all made
            in-house by our team of talented chefs.
          </span>
          <span className="text-[15px] opacity-95">
            With some of the most delicious combinations of ingredients, there
            is something for everyone to enjoy. Loved by locals and traveling
            foodies alike, now is the perfect time for you to join us today at
            DARMA restaurant.
          </span>
        </div>
      </div>
      <div className="absolute inset-0  transition-opacity">
        <svg
          className="opacity-10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FF0066"
            d="M46.2,-59.5C60.8,-52.9,74.3,-40.7,81.1,-25.1C87.8,-9.5,87.8,9.5,82.9,27.7C78.1,45.9,68.3,63.2,53.6,74.4C39,85.7,19.5,90.8,1.4,88.8C-16.6,86.9,-33.3,77.8,-39.4,63.8C-45.6,49.8,-41.2,30.9,-44.7,15.6C-48.2,0.3,-59.6,-11.4,-61.6,-24.6C-63.6,-37.8,-56.2,-52.5,-44.4,-60C-32.5,-67.5,-16.3,-67.9,-0.2,-67.5C15.8,-67.2,31.5,-66.1,46.2,-59.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  )
}

export default AboutUs
