import Header from './components/header';
import RecipeCards from './components/recipe-cards';

function App() {
  return (
    <>
      <Header />
      <main className="font-lexend container mx-auto">
        {/* HERO SECTION */}
        <section className="mb-24">
          <div className="rounded-3xl bg-[url('./assets/images/bannerImage.jpg')] bg-cover bg-center overflow-hidden ">
            <div className="bg-gradient-to-t from-[#150B2BE5] to-[#150B2B00]">
              <div className="hero-content text-center text-white py-32">
                <div className="max-w-[70%]">
                  <h1 className="mb-6 text-[52px] font-bold">Discover an exceptional cooking class tailored for you!</h1>
                  <p className="mb-10 text-lg font-normal text-white ">
                    Welcome to Flavorful Recipes, where every dish narrates a story and every recipe awakens the senses. Explore a myriad of tastes as we journey through diverse
                    culinary traditions.
                  </p>
                  <div className="flex gap-6 justify-center">
                    <button className="px-[30px] py-5 bg-emerald-500 rounded-[50px] text-slate-900 text-lg font-semibold">Explore Now</button>
                    <button className="px-[30px] rounded-[50px] border border-white text-white text-lg font-semibold">Our Feedback</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR RECIPES SECTION */}
        <section className="mb-24">
          <header className="max-w-[823px] mx-auto space-y-5 text-center">
            <h2 className="text-slate-900 text-[40px] font-semibold">Our Recipes</h2>
            <p className="text-slate-900 text-opacity-60 text-base font-normal">
              Embark on a culinary adventure with us and discover the magic that happens when passion meets plate. Let's create unforgettable memories, one recipe at a time.
            </p>
          </header>
          <main className="flex">
            <RecipeCards />
          </main>
        </section>
      </main>
    </>
  );
}

export default App;
