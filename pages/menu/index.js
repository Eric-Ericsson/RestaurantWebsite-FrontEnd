import React from 'react'
import Layout from '../../components/Layout'

const Menu = () => {
  const menuList = [
    {
      type: 'Starters',
      imgUrl: 'img',
      dishName: 'Dish Name',
      description:
        'This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info',
      amount: 'amount',
    },
    {
      type: 'Starters',
      imgUrl: 'img',
      dishName: 'Dish Name',
      description:
        'This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info',
      amount: 'amount',
    },
    {
      type: 'Starters',
      imgUrl: 'img',
      dishName: 'Dish Name',
      description:
        'This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info',
      amount: 'amount',
    },
    {
      type: 'Mains',
      imgUrl: 'img',
      dishName: 'Dish Name',
      description:
        'This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info',
      amount: 'amount',
    },
    {
      type: 'Mains',
      imgUrl: 'img',
      description:
        'This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info',
      amount: 'amount',
    },
    {
      type: 'Mains',
      imgUrl: 'img',
      dishName: 'Dish Name',
      description:
        'This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info',
      amount: 'amount',
    },
    {
      type: 'Desserts',
      imgUrl: 'img',
      dishName: 'Dish Name',
      description:
        'This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info',
      amount: 'amount',
    },
    {
      type: 'Desserts',
      imgUrl: 'img',
      dishName: 'Dish Name',
      description:
        'This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info',
      amount: 'amount',
    },
    {
      type: 'Desserts',
      imgUrl: 'img',
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
      <div className="text-center">
        <div className="py-8">Menu</div>
        {menuTypes.map((data, key) => (
          <div key={key} className='mb-32'>
            <div className="mb-6 flex flex-col gap-6">
              <span className="uppercase">{data.title}</span>
              <span>{data.description}</span>
            </div>
            <div className="grid md:grid-cols-3  gap-12">
              {menuList.map((content, index) => (
                content.type == data.title &&
                <div key={index} className="flex flex-col gap-6">
                  <div>{content.imgUrl}</div>
                  <div className="underline decoration-black underline-offset-8">
                    {content.dishName}
                  </div>
                  <span>{content.description}</span>
                  <span>{content.amount}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Menu
