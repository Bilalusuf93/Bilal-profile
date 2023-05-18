
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Image from "next/image";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <Image src={technology.icon} alt={technology.name} />
         {/* {typeof window === undefined ? <Image src={technology.icon} alt={technology.name} /> : <BallCanvas icon={technology.icon} />}  */}
          
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
