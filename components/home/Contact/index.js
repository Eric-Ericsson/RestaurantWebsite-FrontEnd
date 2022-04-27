const Contact = () => {
  return (
    <div className="grid md:grid-cols-2 grid-row-none text-center items-center">
      <div>
        <div className="mb-6">
          <span>Contact</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span>500 Terry Francois Street San Francisco, CA 94158</span>
          <span>munnyhussain5@gmail.com</span>
          <span>123-456-7890</span>
        </div>
        <div className="flex flex-row mt-2 justify-center gap-4">
          <button className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-light hover:border-2 hover:border-primary-500 md:h-[45px] md:w-[45px] lg:h-[50px] lg:w-[50px]">
            <svg
              className="h-[18px] w-[14px] md:h-[24px] md:w-[18px] lg:h-[28px] lg:w-[16px]"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="16px"
              height="28px"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 12 24"
            >
              <path
                fill="#323b67"
                d="M12.462.173v3.808h-2.265a2.11 2.11 0 0 0-1.675.521l.002-.002a2.368 2.368 0 0 0-.432 1.566v-.008v2.726h4.229l-.56 4.27H8.098V24H3.681V13.053H.001V8.784h3.68V5.639a5.56 5.56 0 0 1 1.502-4.162l-.003.003A5.418 5.418 0 0 1 9.185.002h-.013a24.124 24.124 0 0 1 3.406.185l-.117-.012z"
              />
            </svg>
          </button>
          <button className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-light hover:border-2 hover:border-primary-500 md:h-[45px] md:w-[45px] lg:h-[50px] lg:w-[50px]">
            <svg
              className="h-[23px] w-[19px] md:h-[25px] md:w-[24px] lg:h-[28px] lg:w-[30px]"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="30px"
              height="28px"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="#323b67"
                d="M19.633 7.997c.013.175.013.349.013.523c0 5.325-4.053 11.461-11.46 11.461c-2.282 0-4.402-.661-6.186-1.809c.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721a4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062c.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973a4.02 4.02 0 0 1-1.771 2.22a8.073 8.073 0 0 0 2.319-.624a8.645 8.645 0 0 1-2.019 2.083z"
              />
            </svg>
          </button>
          <button className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-light hover:border-2 hover:border-primary-500 md:h-[45px] md:w-[45px] lg:h-[50px] lg:w-[50px]">
            <svg
              className="h-[23px] w-[19px] md:h-[25px] md:w-[24px] lg:h-[28px] lg:w-[30px]"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <circle cx="4.983" cy="5.009" r="2.188" fill="#323b67" />
              <path
                fill="#323b67"
                d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>Img</div>
    </div>
  )
}

export default Contact
