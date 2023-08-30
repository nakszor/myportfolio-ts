import { userData } from "@/utils/userData";

export default function About() {
    return (
      <section className=" flex h-full flex-col mb-20 mt-20 md:items-center md:justify-between gap-4 items-center" >
        <h2 className="text-2xl text-purple-900 font-bold mb-4 ">Sobre Mim</h2>
        <div className="gap-8 mr-10 ml-10 sm:flex-row flex-col flex text-center justify-center items-center">
          <img  className="h-40 w-40 rounded-full border-1 border border-purple-900" src={`https://github.com/${userData.githubUser}.png`} alt="User Image" />
          <div className=" max-w-[650px] text-center">
            <p>Olá, eu sou a Ana Carla, meu apelido é Naks,
               sou mineira, tenho 25 anos, 
               desenvolvedora Web Full Stack há um ano.
            </p>
            <p> Se você procura uma desenvolvedora dedicada, apaixonada por desafios 
                e comprometida em contribuir para o progresso da equipe, 
                estou pronta para trilhar esse caminho rumo a 
                novas conquistas e aprendizados.
            </p>
          </div>
        </div>
       
      </section>
    );
  }
  
  
  