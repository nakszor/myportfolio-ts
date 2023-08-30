import Desktop from "../desktop";
import Mobile from "../mobile";
import Tablet from "../tablet";

interface ResponsivityProps{
  mobileImg: string;
  tabletImg: string;
  desktopImg: string;
}

export default function Responsivity({mobileImg, tabletImg, desktopImg}:ResponsivityProps) {
    return (
      <li className="flex flex-col  gap-8 lg:flex-row  
      justify-center items-center ">
        <div className=" flex 
        flex-col w-full lg:w-[500px] md:flex-row md:w-full items-center gap-12 justify-center">
          <div className="text-center">
            <p className="font-bold text-purple-900 mb-2">Mobile</p>
            <Mobile imageMobile={mobileImg}/>
          </div>
          <div className="text-center">
            <p className="font-bold text-purple-900 mb-2">Tablet</p>
            <Tablet imageTablet={tabletImg}/>
          </div>
        </div>
       <div className="flex lg:mr-12 flex-col items-center justify-center text-center">
        <p className="font-bold text-purple-900 mb-2">Desktop</p>
        <Desktop imageDesktop={desktopImg}/>
       </div>
      </li>
    );
  }
  