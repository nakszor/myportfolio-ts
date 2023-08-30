export default function Header() {
    return (
        <header className="flex flex-col border-b border-gray-500 md:flex-row h-12 justify-center items-center md:justify-between">
        <h1 className="md:ml-12 text-purple-900 font-bold">{"< Naks />"} </h1>
        <div className="flex flex-row mr-12 bg-white gap-10 hidden md:flex">
          <button className="text-purple-700  hover:text-purple-400 ">Sobre mim</button>
          <button className="text-purple-700  hover:text-purple-400 ">Tecnologias</button>
          <button className="text-purple-700  hover:text-purple-400 ">Projetos</button>
          <button className="text-purple-700  hover:text-purple-400 ">Contatos</button>
        </div>
      </header>
    )
  }