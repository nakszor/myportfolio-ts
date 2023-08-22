import { userData } from "@/utils/userData";

export default function About() {
    return (
      <section className=" flex flex-col md:items-center md:justify-between gap-4 items-center" >
        <h2 className="text-2xl font-bold mt-10 mb-10">Sobre Mim</h2>
        <img  className="h-40 w-40 rounded-full mb-8 border-2 border border-gray-700" src={`https://github.com/${userData.githubUser}.png`} alt="User Image" />
        <div className=" max-w-[600px] text-center mr-10 ml-10 mb-10">
            <p>Olá! Sou Ana Carla e minha paixão pela programação nasceu na infância. Em 2022, decidi seguir meu sonho de ser desenvolvedora e entrei no bootcamp da Kenzie Academy Brasil, onde desenvolvi projeos semanais por 1 ano indo do básico de HTML/CSS a projetos completos com deploy, minha jornada me transformou em uma desenvolvedora dedicada e pronta para novos desafios.</p>
        </div>
      </section>
    );
  }
  
  
  