import Subtitle from "@/components/subtitle"
import { AiFillGithub } from "react-icons/ai"
import { BsGit } from "react-icons/bs"
export default function VersionControl(){
    return(
        <div className="flex flex-col  gap-4 items-center">
        <Subtitle text="Controle de versão"/>
        <ul className="flex flex-wrap items-center gap-4 mr-2 ml-2
         md:w-[200px] w-[230px] justify-center">
            <li className="flex flex-col text-center items-center justify-center">
                    <BsGit className="h-16 w-12"/>
                    <p>Git</p>
                </li>
                <li className="flex flex-col text-center items-center justify-center">
                    <AiFillGithub className="h-16 w-12"/>
                    <p>Github</p>
                </li>
            </ul>
        </div>
        
    )
}