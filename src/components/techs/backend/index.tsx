import Subtitle from "@/components/subtitle"
import { BiLogoJavascript, BiLogoTypescript,
         BiLogoPython, BiLogoJava, BiLogoNodejs,
         BiLogoDjango, BiLogoSpringBoot } from "react-icons/bi"
import { SiExpress } from "react-icons/si"
export default function Backend(){
    return(
        <div className="flex flex-col  gap-4 items-center">
        <Subtitle text="Backend"/>
        <ul className="flex flex-wrap items-center gap-4 mr-2 ml-2 
         md:w-[620px] w-[230px] justify-center">
               <li className="flex flex-col text-center items-center justify-center">
                <BiLogoJavascript className="h-16 w-12"/>
                    <p className="text-md">Javascript</p>
                </li>
               <li className="flex flex-col text-center items-center justify-center">
                    <BiLogoTypescript className="h-16 w-12"/>
                    <p className="text-md">Typescript</p>
                </li>
               <li className="flex flex-col text-center items-center justify-center">
                    <BiLogoNodejs className="h-16 w-12"/>
                    <p className="text-md">Node</p>
                </li>
               <li className="flex flex-col text-center items-center justify-center">
                    <SiExpress className="h-16 w-12"/>
                    <p className="text-md">Express</p>
                </li>
               <li className="flex flex-col text-center items-center justify-center">
                    <BiLogoPython className="h-16 w-12"/>
                    <p className="text-md">Python</p>
                </li>
               <li className="flex flex-col text-center items-center justify-center">
                    <BiLogoDjango className="h-16 w-12"/>
                    <p className="text-md">Django</p>
                </li>
               <li className="flex flex-col text-center items-center justify-center">
                    <BiLogoJava className="h-16 w-12"/>
                    <p className="text-md">Java</p>
                </li>
               <li className="flex flex-col text-center items-center justify-center">
                    <BiLogoSpringBoot className="h-16 w-12"/>
                    <p className="text-md">SpringBoot</p>
                </li>
            </ul>
        </div>
    
    )
}