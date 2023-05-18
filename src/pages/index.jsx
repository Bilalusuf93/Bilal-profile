
import {Tech, Works, Experience, About, Feedbacks, Contact, StarsCanvas} from "@/components";
// import Works from "@/components/Works";
export default function Home() {
  return (
    <>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      {/*<Works /> */}
    </>
    // <div className="relative z-0 bg-primary">
    //   <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
    //     <h1 className="bg-blue-500 md:bg-green-500">Hello Bilal</h1>
    //     <Navbar/>
    //     {/* <Navbar /> */}
    //        {/*<Hero />
    //     </div>
    //     <About />
    //     <Experience />
    //     <Tech />
    //     <Works />
    //     <Feedbacks />
    //     <div className='relative z-0'>
    //       <Contact />
    //       <StarsCanvas />
    //     </div> */}
    //   </div>
    // </div>
  );
}
