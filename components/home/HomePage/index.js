import { useEffect, useRef } from "react";
import Swiper, { Autoplay } from "swiper";
import Slide from "./sliderSection";

Swiper.use([Autoplay]);

const Homepage = () => {
    const slides = [
        {
            heading: "Welcome to",
            text1: "Aysiha kitchen",
            imageUrl: "https://i.pinimg.com/564x/f1/13/66/f11366925ead8740dac733b2a0b1912c.jpg",
        },
        {
            heading: "Relax While",
            text1: "We do the Cooking",
            imageUrl: "https://i.pinimg.com/564x/5b/ce/90/5bce9017cc10547022b479d9ea1808c8.jpg",
        },
        {
            heading: "Great Taste",
            text1: "With Great Branding",
            imageUrl: "https://i.pinimg.com/564x/a7/0b/85/a70b85cacda476709b48990640fd56a5.jpg",
        },
    ];

    const swiperRef = useRef(null);

    useEffect(() => {
        if (!swiperRef.current) {
            swiperRef.current = new Swiper(".showcase-swiper", {
                speed: 1200,
                spaceBetween: 50,
                autoplay: {
                    delay: 2500,
                    reverseDirection: true,
                    loop: true,
                },
            });
        }
    }, []);

    function renderSlideshow(slides) {
        return slides.map((slide,index) => <Slide key={index} slide={slide} />);
    }

    return (
            <div className="w-full flex flex-col h-[520px] items-center sm:h-[530px] md:h-[570px]  relative lg:w-[full] mx-auto ">
                <div className="showcase-swiper w-[100%] h-[100%] overflow-hidden md:px-4 py-2">
                    <div className="swiper-wrapper w-[100%] ">
                        {renderSlideshow(slides)}
                    </div>
                </div>
            </div>
         
    );
};

export default Homepage;