'use cleint'
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
    </>
  );
}
