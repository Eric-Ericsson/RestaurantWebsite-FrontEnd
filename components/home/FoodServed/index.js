import Image from 'next/image'
import React from 'react'

const FoodServed = () => {
  const foodServed = [
    {
      title: 'Grilled Vegetables',
      imgUrl:
        'https://static.wixstatic.com/media/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg/v1/fill/w_466,h_520,fp_0.50_0.50,lg_1,q_80,enc_auto/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg',
      class: 'Served All Day',
      description:
        'This latest addition to our menu has already become our customers’ favorite. Day or night, our Grilled Vegetables is the dish you’ve been craving. Don’t forget to ask your server about our special extras!',
    },
    {
      title: 'Veggie Delight',
      imgUrl:
        'https://static.wixstatic.com/media/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg/v1/fill/w_466,h_520,fp_0.50_0.50,lg_1,q_80,enc_auto/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg',
      class: 'The Perfect Choice',
      description:
        'With our Veggie Delight we’ve managed to put a new spin on an old classic. Simplicity is the name of the game: we use fresh ingredients and offer a variety of extras on the side. Are you ready for this culinary sensation?',
    },
    {
      title: 'Chef’s Special',
      imgUrl:
        'https://static.wixstatic.com/media/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg/v1/fill/w_466,h_520,fp_0.50_0.50,lg_1,q_80,enc_auto/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg',
      class: 'Served All Day',
      description:
        'Many restaurants have their own take on this recipe, but we’re confident that ours is the best, always prepared to perfection. Share it with friends or have it all to yourself—you’ll enjoy it till the very last bite.',
    },
    {
      title: 'Veggie Delight',
      imgUrl:
        'https://static.wixstatic.com/media/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg/v1/fill/w_466,h_520,fp_0.50_0.50,lg_1,q_80,enc_auto/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg',
      class: 'The Perfect Choice',
      description:
        'This latest addition to our menu has already become our customers’ favorite. Day or night, our Grilled Vegetables is the dish you’ve been craving. Don’t forget to ask your server about our special extras!',
    },
  ]
  return (
    <div className=" my-12 py-8 text-light">
      <div className="mb-12 flex flex-col items-center justify-center gap-6 text-center ">
        <span className="text-[40px]">Food</span>
        <div className="w-[80%] text-[18px] md:text-[20px] opacity-90 md:w-[50%]">
          Food Taste your way through our delicious and handcrafted menu,
          carefully curated with your taste buds in mind. We know that
          you&apos;ll find yourself on an exciting culinary journey at DARMA
          RESTAURENT, and we invite you to come back for more.
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4 ">
        {foodServed.map((content, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 text-center md:text-left text-[15px]"
          >
            <span className="text-[20px]">{content.title}</span>
            <div className="relative h-52">
              <Image className='shadow-2xl' src={content.imgUrl} alt="" layout="fill" />
            </div>
            <span className="text-[18px] line-clamp-6">{content.class}</span>
            <span>{content.description}</span>
            <div className='flex items-center justify-center md:justify-start'>
            <button className="w-32 border-2 bg-light py-2 px-2 text-[#06273a] ">
              Get in Touch
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodServed
