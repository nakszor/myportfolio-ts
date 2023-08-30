import Title from "../title";
import ProjectCard from "./card";
import { projectsData } from "@/utils/projectsData";
export default function Projects() {
    return (
      <section className="flex flex-col w-full">
       <Title text="Meus Projetos"/>
        <div className="w-full">
            <ul className="w-full">
                {
                  projectsData.map((el, i) => {
                    return (
                      <ProjectCard techs={el.techs} code={el.code} 
                      deploy={el.deploy} desktopImg={el.desktopImg}
                      tabletImg={el.tabletImg} purpose={el.purpose}
                      mobileImg={el.mobileImg} name={el.name} key={i}/>
                    )
                  })
                }
            </ul>
        </div>
      </section>
    );
  }
  
  