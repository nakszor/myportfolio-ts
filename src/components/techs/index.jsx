import Title from "../title"
import Backend from "./backend"
import Database from "./database"
import Documentation from "./documentation"
import Frontend from "./frontend"
import Packages from "./packages"
import VersionControl from "./versionControl"
export default function Techs(){
    return(
        <section className="mb-12">
            <Title text="Tecnologias"/>
           <div className="flex flex-col  gap-12">
            <Frontend/>
            <Backend/>
            <div className="flex flex-wrap lg:flex-row 
            gap-12 md:gap-12 lg:gap-4 justify-center">
                <Database/>
                <Packages/>
                <VersionControl/>
                <Documentation/>
            </div>
           
                
            
           </div>
        </section>
    )
}