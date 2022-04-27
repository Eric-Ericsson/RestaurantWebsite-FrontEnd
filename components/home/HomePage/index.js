import SliderSection from "./sliderSection"

const Homepage = () => {
  return (
    <div className="grid md:grid-cols-2 my-12 py-8">
        <div className="flex items-center flex-col gap-6">
          <span>Welcome to Aysha's kitchen</span>
          <span>Bold Flavor</span>
          <button className="bg-[] w-36 border-2 py-4 px-6">Learn More</button>
        </div>
        <SliderSection />
      </div>
  )
  
}
export default Homepage
