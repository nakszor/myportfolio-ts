import { LiaLaptopCodeSolid } from "react-icons/lia"
export default function Contact() {
    return (
        <section className="text-center mb-10 ">
            <h2 className="text-purple-900 mb-10 text-2xl font-bold">Contatos</h2>
            <div className="gap-10 mr-12 ml-12  flex flex-col items-center justify-around">
                <div className="max-w-[650px]  flex flex-col text-center items-center gap-4">
                    <LiaLaptopCodeSolid className="h-24 w-24"/>
                    <p>👋 Conecte-se comigo para falar sobre tecnologia,
                         desenvolvimento e oportunidades de trabalho!  
                        Mal posso esperar para trocar ideias com você! 
                        🚀 #TechConversations
                    </p>
                </div>
            <div className="max-w-[650px] flex flex-col text-center items-center">
            <p className="mb-4 text-purple-600 font-semibold">Minhas redes sociais:</p>
            <ul className="max-w-[650px] flex flex-row gap-8 md:gap-20">
                <li>
                    <p>email</p>
                </li>
                <li>
                    <p>email</p>
                </li>
                <li>
                    <p>email</p>
                </li>
            </ul>
            </div>
            </div>
          
           
        </section>
    )
  }