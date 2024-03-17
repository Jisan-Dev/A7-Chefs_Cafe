import { useEffect, useState } from 'react';
import Cart from './components/cart';
import Header from './components/header';
import RecipeCards from './components/recipe-cards';

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [displayToast, setDisplayToast] = useState(false);
  const [cookingItems, setCookingItems] = useState([]);

  const wishlistHandler = (item) => {
    const isExist = wishlist.some((wishedItem) => wishedItem.recipe_id === item.recipe_id);
    const isExistInCooking = cookingItems.some((cookingItem) => cookingItem.recipe_id === item.recipe_id);

    if (!isExist && !isExistInCooking) {
      setWishlist([...wishlist, item]);
    } else {
      setDisplayToast(true);
    }
  };

  const cookingTableHandler = (item) => {
    setCookingItems([...cookingItems, item]);
    const newWishlist = wishlist.filter((wishedItem) => wishedItem.recipe_id !== item.recipe_id);

    setWishlist(newWishlist);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayToast(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [displayToast]);

  return (
    <>
      <Header />

      <main className="font-lexend container mx-auto">
        {/* HERO SECTION */}
        <section className="mb-24 max-sm:px-1">
          <div className="rounded-3xl bg-[url('./assets/images/bannerImage.jpg')] bg-cover bg-center overflow-hidden ">
            <div className="bg-gradient-to-t from-[#150B2BE5] to-[#150B2B00]">
              <div className="hero-content text-center text-white py-32">
                <div className="md:max-w-[70%]">
                  <h1 className="mb-6 text-4xl md:text-[52px] font-bold md:leading-[76px]">Discover an exceptional cooking class tailored for you!</h1>
                  <p className="mb-10 text-lg font-normal text-white ">
                    Welcome to Flavorful Recipes, where every dish narrates a story and every recipe awakens the senses. Explore a myriad of tastes as we journey through diverse
                    culinary traditions.
                  </p>
                  <div className="flex  gap-6 justify-center">
                    <button className="px-[20px] md:px-[30px] py-5 bg-emerald-500 rounded-[50px] text-slate-900 text-base md:text-lg font-semibold">Explore Now</button>
                    <button className="px-[20px] md:px-[30px] rounded-[50px] border border-white text-white text-base md:text-lg font-semibold">Our Feedback</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TOAST */}
        <div
          className={`alert ${displayToast ? 'opacity-100' : 'opacity-0 pointer-events-none'} bg-indigo-500 fixed top-0 right-10 z-20 w-96 text-white transition-all duration-300`}>
          <p className="text-center">Recipe already added!</p>
        </div>

        {/* OUR RECIPES SECTION */}
        <section className="mb-24 max-sm:px-2">
          <header className="max-w-[823px] mx-auto space-y-5 text-center mb-11">
            <h2 className="text-slate-900 text-4xl md:text-[40px] font-semibold">Our Recipes</h2>
            <p className="text-slate-900 text-opacity-60 text-sm md:text-base font-normal">
              Embark on a culinary adventure with us and discover the magic that happens when passion meets plate. Let's create unforgettable memories, one recipe at a time.
            </p>
          </header>
          <main className="flex gap-6 flex-col lg:flex-row">
            <RecipeCards wishlistHandler={wishlistHandler} />
            <Cart wishlist={wishlist} cookingTableHandler={cookingTableHandler} cookingItems={cookingItems} />
          </main>
        </section>
      </main>
    </>
  );
}

export default App;
