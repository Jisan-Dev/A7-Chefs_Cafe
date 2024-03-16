import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <main className="font-lexend container mx-auto">
        <section aria-label="hero section">
          <div className="rounded-3xl bg-[url('./assets/images/bannerImage.jpg')] bg-cover bg-center overflow-hidden ">
            <div className="bg-gradient-to-t from-[#150B2BE5] to-[#150B2B00]">
              <div className="hero-content text-center text-white py-32">
                <div className="max-w-[70%]">
                  <h1 className="mb-6 text-[52px] font-bold">Discover an exceptional cooking class tailored for you!</h1>
                  <p className="mb-10 text-lg font-normal text-white ">
                    Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class
                    Programmer.
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
      </main>
    </>
  );
}

export default App;
