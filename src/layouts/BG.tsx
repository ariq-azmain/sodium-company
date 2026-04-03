import { StarsCanvas } from '@/canvas'

const BG = () => {
   return (
      <>
         <div className="blob blob1"></div>
         <div className="blob blob2 sm"></div>
         {
            // <div className="dot dot-1"></div>
            // <div className="dot dot-2"></div>
            // <div className="dot dot-3"></div>
            // <div className="dot-r dot-r-1"></div>
            // <div className="dot-r dot-r-2"></div>
            // <div className="dot-r dot-r-3"></div>
         }
         <StarsCanvas color="#3D3EE3" rotX={10} rotY={15} />
         <StarsCanvas color="#DA1791" rotX={15} rotY={10} />
         <StarsCanvas color="#00ffff" rotX={19} rotY={9} />
      </>
   );
};

export default BG;
