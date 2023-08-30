import Subtitle from "@/components/subtitle";
import Responsivity from "./responsivity";
import Purpose from "./purpose";
import CardTechs from "./cardTechs";
import Button from "./button";

interface ProjectCardProps{
  techs: string[],
  name: string,
  purpose: string,
  code: string,
  deploy: string, 
  mobileImg: string,
  tabletImg: string,
  desktopImg: string,
}

export default function ProjectCard({techs, name, purpose, code, deploy, mobileImg, desktopImg, tabletImg }: ProjectCardProps) {
    return (
      <section className="text-center mt-4 mb-14">
        <Subtitle text={name}/>
        <Purpose purpose={purpose}/>
        <p className="text-purple-500 mt-4">Technologias utilizadas</p>
        <ul className="flex gap-1 text-center items-center justify-center">
          {
            techs.map((elem) => {
              return(
                <CardTechs techs={elem}/>
              )
            })
          }
        </ul>
        <div className="mt-8 mb-8 gap-12 flex items-center justify-center">
          <Button buttonText="Ver código"/>
          <Button buttonText="Acessar site"/>
          <Button buttonText="Ver prévia"/>
        </div>
        <Responsivity/>
      </section>
    );
  }
  