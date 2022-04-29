import Image from 'next/image'
import Layout from '../../components/Layout'

const Menu = () => {
  const menuList = [
    {
      type: 'Starters',
      imgUrl:
        'https://static.wixstatic.com/media/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg/v1/fill/w_466,h_520,fp_0.50_0.50,lg_1,q_80,enc_auto/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg',
      dishName: 'Dish Name',
      description:
        'This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info',
      amount: 'amount',
    },
    {
      type: 'Starters',
      imgUrl:
        'https://static.wixstatic.com/media/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg/v1/fill/w_466,h_520,fp_0.50_0.50,lg_1,q_80,enc_auto/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg',
      dishName: 'Dish Name',
      description:
        'This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info',
      amount: 'amount',
    },
    {
      type: 'Starters',
      imgUrl:
        'https://static.wixstatic.com/media/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg/v1/fill/w_466,h_520,fp_0.50_0.50,lg_1,q_80,enc_auto/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg',
      dishName: 'Dish Name',
      description:
        'This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info',
      amount: 'amount',
    },
    {
      type: 'Mains',
      imgUrl:
        'https://static.wixstatic.com/media/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg/v1/fill/w_466,h_520,fp_0.50_0.50,lg_1,q_80,enc_auto/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg',
      dishName: 'Dish Name',
      description:
        'This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info',
      amount: 'amount',
    },
    {
      type: 'Mains',
      imgUrl:
        'https://static.wixstatic.com/media/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg/v1/fill/w_466,h_520,fp_0.50_0.50,lg_1,q_80,enc_auto/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg',
      dishName: 'Dish Name',
      description:
        'This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info',
      amount: 'amount',
    },
    {
      type: 'Mains',
      imgUrl:
        'https://static.wixstatic.com/media/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg/v1/fill/w_466,h_520,fp_0.50_0.50,lg_1,q_80,enc_auto/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg',
      dishName: 'Dish Name',
      description:
        'This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info',
      amount: 'amount',
    },
    {
      type: 'Desserts',
      imgUrl:
        'https://static.wixstatic.com/media/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg/v1/fill/w_466,h_520,fp_0.50_0.50,lg_1,q_80,enc_auto/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg',
      dishName: 'Dish Name',
      description:
        'This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info',
      amount: 'amount',
    },
    {
      type: 'Desserts',
      imgUrl:
        'https://static.wixstatic.com/media/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg/v1/fill/w_466,h_520,fp_0.50_0.50,lg_1,q_80,enc_auto/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg',
      dishName: 'Dish Name',
      description:
        'This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info',
      amount: 'amount',
    },
    {
      type: 'Desserts',
      imgUrl:
        'https://static.wixstatic.com/media/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg/v1/fill/w_466,h_520,fp_0.50_0.50,lg_1,q_80,enc_auto/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg',
      dishName: 'Dish Name',
      description:
        'This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info',
      amount: 'amount',
    },
  ]
  const menuTypes = [
    {
      title: 'Starters',
      description:
        'This is a section of your menu, customize it any way you want',
    },
    {
      title: 'Desserts',
      description:
        'This is a section of your menu, customize it any way you want',
    },
    {
      title: 'Mains',
      description:
        'This is a section of your menu, customize it any way you want',
    },
  ]
  return (
    <Layout title="Menu | DRAMA RESTAURANT">
      <div className="relative h-[300px] bg-gray-600 md:h-[400px]">
        <Image
          className="opacity-80 blur-sm"
          src="https://static.wixstatic.com/media/11062b_ce333d3fd0a941deb7a0ddf8f1ed837b~mv2_d_3046_3782_s_4_2.jpg/v1/fill/w_1280,h_320,al_c,q_85/11062b_ce333d3fd0a941deb7a0ddf8f1ed837b~mv2_d_3046_3782_s_4_2.jpg"
          alt=""
          layout="fill"
        />
        <div className="absolute flex h-full w-full flex-col items-center justify-center font-mono text-[50px] font-bold uppercase text-light">
          <span>our menu</span>
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-14 bg-white"></div>
            <span className="text-[15px]">
              Discover the True Meaning of Taste
            </span>
            <div className="h-[1px] w-14 bg-white"></div>
          </div>
        </div>
      </div>
      <div className="relative bg-[#ece9df] px-14 text-center text-[18px] text-dark sm:px-20 md:px-32">
        <div className="flex items-center justify-center gap-1 py-20 font-mono text-[50px]">
          <span>Menu</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 64 64"
            >
              <path
                fill="#ffd93b"
                d="M56.5 31.3c0-.5.1-.9.3-1.3c-1.9-1.1-3-2.7-3-4.5c.1-2.8 3.3-5.1 7.4-5.5c1-9.4.8-17 .8-17S24.9 1.7 11.4 14.7l-.7.7c2 1.2 3.3 3.2 3.3 5.5c0 3.7-3.5 6.8-7.8 6.8c-1.3 0-2.5-.3-3.6-.8c-3.9 11.7 12 15.1 15.5 18.5c4.5 4.3 9 28.4 31.7 6.5c4.1-4 6.9-10.2 8.7-16.8c-1.2-1-2-2.3-2-3.8"
              />
              <path
                fill="#db9523"
                d="m24.5 40.9l4.6-4.6l19 11.7l-18.3-12.5l7.6-7.6l17 7.5l-16.3-8.3l7.1-7.2l12.9-.6l-11.9-.4L62 3L45.5 18.2l-.4-11.5l-.6 12.5l-7.4 6.9l-8.6-15.8l7.8 16.5l-8 7.3l-12.9-17.6l12.2 18.3l-4.8 4.4l-12.9-7.6l12.2 8.3L9.6 51.4l2.3 2.2l11.9-12l8.6 11.7z"
              />
            </svg>
          </span>
        </div>
        <div className="absolute inset-0">
          <svg
            className="opacity-10"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#06273a"
              d="M52.3,-53.5C61.2,-43.3,57.5,-21.7,55.3,-2.1C53.2,17.4,52.7,34.7,43.7,49.6C34.7,64.4,17.4,76.7,2.2,74.5C-13,72.3,-26,55.6,-42,40.8C-58.1,26,-77.3,13,-82.5,-5.2C-87.7,-23.3,-78.8,-46.7,-62.8,-56.8C-46.7,-66.9,-23.3,-63.9,-0.8,-63C21.7,-62.2,43.3,-63.6,52.3,-53.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        {menuTypes.map((data, key) => (
          <div key={key} className="mb-32">
            <div className="mb-6 flex flex-col gap-6">
              <span className="mb-6 font-mono text-[28px] uppercase underline decoration-black underline-offset-[24px]">
                {data.title}
              </span>
              <span>{data.description}</span>
            </div>
            <div className="grid gap-16 pb-12 md:grid-cols-2 lg:grid-cols-3">
              {menuList.map(
                (content, index) =>
                  content.type == data.title && (
                    <div key={index} className="flex flex-col gap-6">
                      <div className="relative h-72 shadow-lg">
                        <Image src={content.imgUrl} alt="" layout="fill" />
                      </div>
                      <div className="underline decoration-black underline-offset-8">
                        {content.dishName}
                      </div>
                      <span className="text-[15px]">{content.description}</span>
                      <span>{content.amount}</span>
                    </div>
                  )
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="relative -mt-32 h-96 bg-gray-700 py-20">
        <span>
          <Image
            className="opacity-80 blur-sm"
            src="https://static.wixstatic.com/media/11062b_ce333d3fd0a941deb7a0ddf8f1ed837b~mv2_d_3046_3782_s_4_2.jpg/v1/fill/w_1280,h_320,al_c,q_85/11062b_ce333d3fd0a941deb7a0ddf8f1ed837b~mv2_d_3046_3782_s_4_2.jpg"
            alt=""
            layout="fill"
          />
        </span>
        <div className="absolute flex w-full flex-col items-center justify-center gap-2 p-2 text-[15px] text-light  md:text-[20px]">
          <div className="flex items-center gap-1">
            <span className="font-mono text-[25px] font-bold md:text-[40px]">
              Looking for something specific?
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="2em"
                height="2em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#F44336"
                  d="M34 9c-4.2 0-7.9 2.1-10 5.4C21.9 11.1 18.2 9 14 9C7.4 9 2 14.4 2 21c0 11.9 22 24 22 24s22-12 22-24c0-6.6-5.4-12-12-12z"
                />
              </svg>
            </span>
          </div>
          <span className="text-[18px] font-semibold">Requst custom order</span>
          <div className="flex items-center justify-center gap-8 text-center">
            <div className="flex flex-col items-center">
              <span>500 Terry Francois Street</span>
              <span>munnyhussain5@gmail.com</span>
              <span>123-456-7890</span>
            </div>
            <div className="h-20 w-[2px] bg-white"></div>
            <div className="flex flex-col items-center text-center ">
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
    </Layout>
  )
}

export default Menu
