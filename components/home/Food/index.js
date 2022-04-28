import Image from 'next/image'

const Food = () => {
  return (
    <>
      <div className=" bg-bg-[] my-12 py-8 text-light">
        <div className="mb-12 flex flex-col gap-6 text-center">
          <span className="text-[40px]">Food</span>
          <span className="text-[20px] opacity-95">Food for Every mood</span>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div>
              <div className="relative mb-12 text-center h-96">
                <Image
                  src="https://static.wixstatic.com/media/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg/v1/fill/w_466,h_520,fp_0.50_0.50,lg_1,q_80,enc_auto/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg"
                  alt=""
                  layout="fill"
                />
              </div>
              <div className="flex flex-col gap-6 text-center items-center">
                <span className="text-[18px]">Soup of the day</span>
                <span className="text-[15px] w-[80%] ">
                  This latest addition to our menu has already become our
                  customers&apos; favorite. Day or night, our Soup of the Day is
                  the dish you&apos;ve been craving. Don&apos;t forget to ask
                  your server about our special extras!
                </span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="relative mb-12 text-center h-96">
                <Image
                  src="https://static.wixstatic.com/media/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg/v1/fill/w_466,h_520,fp_0.50_0.50,lg_1,q_80,enc_auto/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg"
                  alt=""
                  layout="fill"
                />
              </div>{' '}
              <div className="flex flex-col gap-6 text-center items-center">
                <span className='text-[18px]'>Lamb Shank</span>
                <span className='text-[15px] w-[80%]'>
                  With our Lamb Shank we&apos;ve managed to put a new spin on an
                  old classic. Simplicity is the name of the game: we use fresh
                  ingredients and offer a variety of extras on the side. Are you
                  ready for this culinary sensation?
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Food
