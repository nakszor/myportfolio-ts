import Subtitle from "@/components/subtitle"
import { FaNpm, FaYarn } from "react-icons/fa"
export default function Packages(){
    return(
        <div className="flex gap-4 flex-col
        items-center">
        <Subtitle text="Packages"/>
        <ul className="flex flex-wrap items-center gap-4 mr-2 ml-2 
         md:w-[200px] w-[230px] justify-center">
            <li className="flex flex-col text-center items-center justify-center">
                <FaNpm className="h-16 w-12"/>
                <p>Npm</p>
            </li>
            <li className="flex flex-col text-center items-center justify-center">
                <FaYarn className="h-16 w-12"/>
                <p>Yarn</p>
            </li>
            </ul>
        </div>
    )
}