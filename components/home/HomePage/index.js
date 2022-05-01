import SliderSection from "./sliderSection"


const Homepage = () => {
  return (
    <div className="grid md:grid-cols-2 bg-white shadow-2xl md:h-[550px] h-[350px]">
        <div className="hidden md:flex items-center flex-col gap-6 justify-center text-center text-[#06273a] px-5">
          <div className="  md:text-[50px] lg:text-[72px]">Welcome to Aysha's kitchen</div>
          <span className="text-[20px]">Bold Flavor</span>
          <button className="shadow-2xl bg-[#06273A] text-light w-36 border-2 py-4 px-6 text-[15px]">Learn More</button>
        </div>
        <SliderSection />
      </div>
  )
  
}
export default Homepage
