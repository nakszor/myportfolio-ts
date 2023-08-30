export default function Header() {
    return (
        <header className="flex flex-col border-b border-gray-500 md:flex-row h-12 justify-center items-center md:justify-between">
        <h1 className="md:ml-12 text-purple-900 font-bold">{"< Naks />"} </h1>
        <div className="flex flex-row mr-12 bg-white gap-10 hidden md:flex">
          <a className="text-purple-700 ">Sobre mim</a>
          <a className="text-purple-700 ">Tecnologias</a>
          <a className="text-purple-700 ">Projetos</a>
          <a className="text-purple-700 ">Contatos</a>
        </div>
      </header>
    )
  }