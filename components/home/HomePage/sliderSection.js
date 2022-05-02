const Slide = ({ slide }) => {
  return (
    <>
      <div className="swiper-slide h-full w-[100%] overflow-hidden rounded-b-[50px] bg-light shadow-md md:rounded-[70px]">
        <img src={slide.imageUrl} alt="" className="absolute z-10" />

        <div className="bg-primary-gradient absolute z-10 h-full w-full rounded-b-[50px] opacity-[0.9] md:left-[0px] md:w-[420px] md:rounded-[64px] lg:flex lg:w-[557px]">
          <div className="absolute flex h-[520px] w-full items-center justify-center rounded-b-[50px] bg-dark opacity-[0.9] md:h-full md:w-[410px] md:rounded-[64px] lg:w-[547px]">
            <div className="top:52 sm:top-30 md:top-25 absolute top-[119px] flex h-[280px] w-[300px] flex-col items-center font-[Mulish] not-italic sm:h-[350px] sm:w-[500px] md:left-[50px] md:h-[400px] md:w-[300px] md:items-start lg:left-[67px]">
              <button className="showcase-button btn bg-primary-gradient absolute top-48 bg-light p-2 sm:p-3 md:left-0 md:top-48 lg:top-52">
                <span className="text-5 leading-0 top-0 text-[12px] font-bold text-dark md:text-[14px] md:leading-[20px] md:tracking-[0.14em]">
                  LEARN MORE
                </span>
              </button>
              <span className="title h-[54px] w-64 text-center text-[30px] capitalize leading-[46px] text-light md:text-left lg:text-[50px]">
                {slide.heading}
              </span>
              <div className="text1 top-[50px] w-64 text-center text-[30px] font-bold md:text-left lg:w-96 lg:text-[50px] lg:leading-[60px]">
                <span className="text-blue-500">{slide.text1}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slide
