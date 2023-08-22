export default function Header() {
    return (
        <header className="flex flex-col border-b border-gray-500 md:flex-row h-12 justify-center items-center md:justify-between">
        <h1 className="md:ml-12">Naks</h1>
        <div className="flex flex-row mr-12 bg-white gap-14 hidden md:flex">
          <a>About</a>
          <a>Projects</a>
          <a>Contact</a>
        </div>
      </header>
    )
  }