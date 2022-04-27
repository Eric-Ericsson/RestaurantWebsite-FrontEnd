import React from 'react'

const FoodServed = () => {
  const foodServed = [
    {
      title: 'Grilled Vegetables',
      imgUrl: 'img',
      class: 'Served All Day',
      description:
        'This latest addition to our menu has already become our customers’ favorite. Day or night, our Grilled Vegetables is the dish you’ve been craving. Don’t forget to ask your server about our special extras!',
    },
    {
      title: 'Veggie Delight',
      imgUrl: 'img',
      class: 'The Perfect Choice',
      description:
        'With our Veggie Delight we’ve managed to put a new spin on an old classic. Simplicity is the name of the game: we use fresh ingredients and offer a variety of extras on the side. Are you ready for this culinary sensation?',
    },
    {
      title: 'Chef’s Special',
      imgUrl: 'img',
      class: 'Served All Day',
      description:
        'Many restaurants have their own take on this recipe, but we’re confident that ours is the best, always prepared to perfection. Share it with friends or have it all to yourself—you’ll enjoy it till the very last bite.',
    },
    {
      title: 'Veggie Delight',
      imgUrl: 'img',
      class: 'The Perfect Choice',
      description:
        'This latest addition to our menu has already become our customers’ favorite. Day or night, our Grilled Vegetables is the dish you’ve been craving. Don’t forget to ask your server about our special extras!',
    },
  ]
  return (
    <div className="bg-[]-500 my-12 py-8">
      <div className="mb-12 flex flex-col items-center justify-center gap-6 text-center ">
        <span>Food</span>
        <div className="w-[80%] md:w-[50%]">
          Food Taste your way through our delicious and handcrafted menu,
          carefully curated with your taste buds in mind. We know that
          you&apos;ll find yourself on an exciting culinary journey at DARMA
          RESTAURENT, and we invite you to come back for more.
        </div>
      </div>
      <div className="grid-row-4 grid gap-8 md:grid-cols-4">
        {foodServed.map((content, index) => (
          <div key={index} className="flex flex-col gap-4 text-left">
            <span>{content.title}</span>
            <div>{content.imgUrl}</div>
            <span>{content.class}</span>
            <span>{content.description}</span>
            <button className="w-36 bg-blue-400 py-4 px-6">Get in Touch</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodServed
