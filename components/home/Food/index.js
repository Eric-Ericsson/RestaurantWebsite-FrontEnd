import Image from 'next/image'

const Food = () => {
  const subFood = [
    {
      title: 'Soup of the day',
      imgUrl:
        'https://i.pinimg.com/564x/f1/13/66/f11366925ead8740dac733b2a0b1912c.jpg',
      description:
        'This latest addition to our menu has already become our customers favorite. Day or night, our Soup of the Day is the dish youve been craving. Dont forget to ask your server about our special extras!',
    },
    {
      title: 'Lamb Shank',
      imgUrl:
        'https://i.pinimg.com/564x/1b/d7/c3/1bd7c375605140fab9c81eadb48e1316.jpg',
      description:
        'This latest addition to our menu has already become our customers favorite. Day or night, our Soup of the Day is the dish youve been craving. Dont forget to ask your server about our special extras!',
    },
  ]
  return (
    <>
      <div className="md:px-20 bg-bg-[] my-12 py-8 text-light">
        <div className="mb-12 flex flex-col gap-6 text-center">
          <span className="text-[40px] font-mono">Food</span>
          <span className="text-[18px] md:text-[20px] opacity-95">Food for Every mood</span>
        </div>
        <div className="grid grid-cols-2 gap-8">
            {subFood.map((content, index) => (
              <div key={index}>
                <div className="relative mb-6 md:mb-12 h-60 md:h-96 text-center shadow-2xl">
                  <Image src={content.imgUrl} alt="" layout="fill" />
                </div>
                <div className="flex flex-col items-center gap-6 text-center">
                  <span className="text-[18px]">{content.title}</span>
                  <span className="md:w-[80%] text-[15px] opacity-95">
                    {content.description}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Food
