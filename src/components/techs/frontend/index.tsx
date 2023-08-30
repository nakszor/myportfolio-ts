import { BiLogoReact, BiLogoCss3,
         BiLogoTailwindCss, BiLogoBootstrap,
        BiLogoJavascript, BiLogoTypescript } from "react-icons/bi"
import { TbBrandNextjs } from "react-icons/tb"
import { AiFillHtml5 } from "react-icons/ai"
import Subtitle from "@/components/subtitle"
export default function Frontend(){
    return(
        <div className="flex  gap-4 flex-col items-center">
            <Subtitle text="Frontend"/>
            <ul className="
             flex flex-wrap items-center gap-4 mr-2 ml-2 
             md:w-[600px] w-[230px] justify-center">
                <li className="flex flex-col text-center items-center justify-center">
                    <BiLogoJavascript className="h-16 w-12"/>
                    <p className="text-md">Javascript</p>
                </li>
               <li className="flex flex-col text-center items-center justify-center">
                    <BiLogoTypescript className="h-16 w-12"/>
                    <p className="text-md">Typescript</p>
                </li>
                <li className="flex flex-col text-center items-center justify-center">
                    <AiFillHtml5 className="h-16 w-12"/>
                    <p className="text-md">HTML</p>
               </li>
               <li className="flex flex-col text-center items-center justify-center">
                    <BiLogoCss3 className="h-16 w-12"/>
                    <p>CSS</p>
               </li>
              
               <li className="flex flex-col text-center  items-center justify-center">
                    <BiLogoTailwindCss className="h-16 w-12"/>
                    <p>Tailwind</p>
               </li>
                <li className="flex flex-col text-center  items-center justify-center">
                    <BiLogoReact className="h-16 w-12"/>
                    <p>React</p>
                </li>
                <li className="flex flex-col text-center  items-center justify-center">
                    <TbBrandNextjs className="h-16 w-12"/>
                    <p>Next</p>
                </li>
                <li className="flex flex-col items-center text-center justify-center">
                    <BiLogoBootstrap className="h-16 w-12"/>
                    <p>Bootstrap</p>
                </li>
            </ul>
        </div>
        
    )
}