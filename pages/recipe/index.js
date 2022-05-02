import { useEffect, useRef } from "react";
import Swiper, { Autoplay } from "swiper";
import Slide from "./Slide";

Swiper.use([Autoplay]);

const Recipe = () => {
    const slides = [
        {
            heading: "Welcome to",
            text1: "Aysiha kitchen",
            imageUrl: " ",
        },
        {
            heading: "Relax While",
            text1: "We do the Cooking",
            imageUrl: " ",
        },
        {
            heading: "Great Taste",
            text1: "With Great Branding",
            imageUrl: " ",
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
            <div className="w-full flex flex-col h-[520px] items-center sm:h-[530px] md:h-[570px] lg:h-[609px] relative lg:w-[full] mx-auto ">
                <div className="showcase-swiper w-[100%] h-[100%] overflow-hidden md:px-4 py-2">
                    <div className="swiper-wrapper w-[100%] ">
                        {renderSlideshow(slides)}
                    </div>
                </div>
            </div>
         
    );
};

export default Recipe;