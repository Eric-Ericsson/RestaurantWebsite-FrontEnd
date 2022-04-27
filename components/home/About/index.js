import AboutUs from './aboutUs'

const About = () => {
  return (
    <div>
      <div className="grid-row-2 my-12 grid py-8 md:grid-cols-2 ">
        <div className="order-last md:order-none">img</div>
        <div className="flex w-[80%] flex-col gap-8">
          <span>About</span>
          <span>Proud to Serve You</span>
          <span>
            Founded in 2000, DARMA RESTAURENT is known for revolutionizing the
            way people eat and enjoy food. We take pride in our ability to
            discover the most unique flavors from around the world and share
            them with the San Francisco area. Join us.
          </span>
          <button className="bg-[] w-36 border-2 py-4 px-6">Contact</button>
        </div>
      </div>
      <AboutUs />
    </div>
  )
}

export default About
