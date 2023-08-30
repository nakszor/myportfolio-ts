import Subtitle from "@/components/subtitle"
import { BiLogoPostgresql } from "react-icons/bi"
import { TbSql } from "react-icons/tb"
import { BsFillDiagram2Fill } from "react-icons/bs"
export default function Database(){
    return(
        <div className="flex flex-col  gap-4 items-center">
        <Subtitle text="Banco de dados"/>
        <ul className="flex flex-wrap items-center gap-4  
         md:w-[250px] w-[230px] justify-center">
                <li className="flex flex-col text-center items-center justify-center">
                    <TbSql className="h-16 w-12"/>
                    <p>SQL</p>
                </li>
                <li className="flex flex-col text-center items-center justify-center">
                    <BiLogoPostgresql className="h-16 w-12"/>
                    <p>Postgre</p>
                </li>
                <li className="flex flex-col text-center items-center justify-center">
                    <BsFillDiagram2Fill className="h-16 w-12"/>
                    <p>Diagramas</p>
                </li>
            </ul>
        </div>
    )
}