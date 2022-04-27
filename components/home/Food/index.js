const Food = () => {
  return (
    <>
      <div className=" bg-bg-[] my-12 py-8">
        <div className="mb-12 flex flex-col gap-6 text-center">
          <span>Food</span>
          <span>Food for Every mood</span>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div>
              <div className="mb-12 text-center">img</div>
              <div className="flex flex-col gap-6 text-center ">
                <span>Soup of the day</span>
                <span>
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
              <div className="mb-12 text-center">img</div>
              <div className="flex flex-col gap-6 text-center ">
                <span>Lamb Shank</span>
                <span>
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
