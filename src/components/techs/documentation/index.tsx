import Subtitle from "@/components/subtitle";
import { SiSwagger } from "react-icons/si"
import { RxReader } from "react-icons/rx"
export default function Documentation(){
    return(
        <div className="flex flex-col  gap-4 items-center">
        <Subtitle text="Documentação"/>
        <ul className="flex flex-wrap items-center gap-4  mr-2 ml-2 
         md:w-[200px] w-[230px] justify-center">
            <li className="flex flex-col text-center items-center justify-center">
                <SiSwagger className="h-16 w-12"/>
                <p>Swagger</p>
            </li>
            <li className="flex flex-col text-center items-center justify-center">
                <RxReader className="h-16 w-12"/>
                <p>Readme</p>
            </li>
            </ul>
        </div>
    )
}