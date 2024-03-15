import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <main className="font-lexend container mx-auto">
        <section aria-label="hero section">
          <div className="rounded-3xl bg-[url('./assets/images/bannerImage.jpg')] overflow-hidden">
            <div className="bg-gradient-to-t from-[#150B2BE5] to-[#150B2B00] w-full h-full bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
