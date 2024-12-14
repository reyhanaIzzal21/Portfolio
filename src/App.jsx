import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div>
          {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'> */}
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <div className="flex flex-col items-center justify-center w-full h-full py-6">
            <p className="text-white text-center text-xs">
              Copyright &copy; 2023 - Reyhana izzal muttaqim
            </p>
          </div>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
