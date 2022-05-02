const Slide = ({ slide }) => {
  return (
      <>
          <div className="w-[100%] bg-light overflow-hidden rounded-b-[50px] sm:rounded-b-[50px] md:rounded-[70px] swiper-slide h-full shadow-md">
              <img src={slide.imageUrl} alt="" className="z-10 absolute" />

              <div className=" absolute bg-primary-gradient opacity-[0.9] h-full w-full sm:rounded-b-[50px]  rounded-b-[50px] md:w-[420px] md:left-[0px] lg:w-[557px] lg:flex md:rounded-[64px] z-10">
                  <div className="absolute bg-dark opacity-[0.9] sm:h-[520px] h-[490px] w-full rounded-b-[50px] md:w-[410px] md:h-full lg:w-[547px] md:rounded-[64px] flex items-center justify-center">
                      <div className="items-center flex-col top:52 sm:top-30 h-[280px] lg:left-[67px] flex top-[119px] absolute w-[300px] font-[Mulish] not-italic sm:w-[500px] sm:h-[350px] md:w-[300px] md:top-25 md:h-[400px] md:left-[50px] md:items-start">
                          <button className="showcase-button btn absolute top-48 bg-primary-gradient p-3 bg-light  md:left-0 md:top-48 lg:top-52">
                              <span className="text-5 top-0 leading-0 md:text-[14px] md:tracking-[0.14em] md:leading-[20px] font-bold text-dark">
                                  LEARN MORE
                              </span>
                          </button>
                          <span className="title w-64 h-[54px] text-[30px] lg:text-[50px] leading-[46px] capitalize text-light text-center md:text-left">
                              {slide.heading}
                          </span>
                          <div className="text1 font-bold text-[30px] top-[50px] w-64 lg:text-[50px] lg:w-96 lg:leading-[60px] text-center md:text-left">
                              <span className="text-blue-500">
                                  {slide.text1}
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
};

export default Slide;