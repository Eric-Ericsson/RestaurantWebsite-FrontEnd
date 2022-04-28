import SliderSection from "./sliderSection"


const Homepage = () => {
  return (
    <div className="grid md:grid-cols-2  bg-white shadow-md h-[650px]">
        <div className="flex items-center flex-col gap-6 justify-center text-center text-[#06273a] px-5">
          <div className="text-[72px]">Welcome to Aysha's kitchen</div>
          <span className="text-[20px]">Bold Flavor</span>
          <button className="bg-[#06273A] text-light w-36 border-2 py-4 px-6 text-[15px]">Learn More</button>
        </div>
        <SliderSection />
      </div>
  )
  
}
export default Homepage
