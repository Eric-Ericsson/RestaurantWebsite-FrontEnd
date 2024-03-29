import Image from 'next/image'

const OpeningHours = () => {
  return (
    <div className="md:px-20">
      <div className="relative mt-32 h-60 bg-gray-700 py-20 sm:h-80 md:h-96">
        <span>
          <Image
            className="opacity-80 blur-sm"
            src="https://static.wixstatic.com/media/11062b_ce333d3fd0a941deb7a0ddf8f1ed837b~mv2_d_3046_3782_s_4_2.jpg/v1/fill/w_1280,h_320,al_c,q_85/11062b_ce333d3fd0a941deb7a0ddf8f1ed837b~mv2_d_3046_3782_s_4_2.jpg"
            alt=""
            layout="fill"
          />
        </span>
        <div className="absolute flex w-full flex-col items-center justify-center gap-2 p-2 text-[12px] text-light  md:text-[20px]">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="font-mono text-[12px] font-bold capitalize sm:text-[25px] md:text-[30px]">
              Relax whiles we do the cooking
            </span>
            <svg
              className="h-[24px] w-[24px] sm:h-[24px] sm:w-[24px]"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="3em"
              height="3em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 64 64"
            >
              <path
                fill="currentColor"
                d="M32.749 46.92c8.648 0 15.674-6.633 15.973-14.92c-.299-8.287-7.325-14.92-15.973-14.92c-8.647 0-15.675 6.633-15.97 14.92c.294 8.287 7.322 14.92 15.97 14.92"
              />
              <path
                fill="currentColor"
                d="M32.75 10c-12.15 0-22.001 9.85-22.001 22c0 12.149 9.852 22 22.001 22c12.149 0 22-9.851 22-22c0-12.15-9.851-22-22-22m-.001 38c-8.837 0-16.001-6.921-16.001-15.461c0-.182.025-.359.031-.539c-.006-.18-.031-.358-.031-.539c0-8.54 7.165-15.461 16.001-15.461c8.837 0 16 6.921 16 15.461c0 .181-.021.359-.026.539c.006.18.026.357.026.539c-.001 8.54-7.163 15.461-16 15.461"
              />
              <path
                fill="currentColor"
                d="M3.481 7.421c.24-.941.715-.011.715-.011s.166 9.74 1.246 9.846c1.08.106.248-10.022 1.526-10.216c1.188-.189.51 10.377 1.592 10.27c1.078-.114 1.26-9.85 1.26-9.85s.48-.929.717.005c2.928 11.51.559 16.215.559 16.215s-.4.989-1.35.994c-.089-.005-.022 27.336-.028 31.012c.002 1.787-5.5 1.732-5.497-.047c.004-3.676.111-31.014.025-31.012c-.953 0-1.352-.988-1.352-.988s-2.36-4.702.587-16.218M55.62 7c1.238-.003 6.374 3.7 6.38 17.462c.006 4.401-2.395 4.4-2.391 7.153c.004 2.748.019 24.606.019 24.606s-2.634 1.807-4.592-.084L55 7.391c.002.001-.005-.392.62-.391"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center text-center">
            <span>Opening Hours</span>
            <span>Dine in or take away</span>
            <div>
              <span>Monday - Saturday 11am - 11pm</span>
              <br />
              <span>Sunday 11am - 7pm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpeningHours
