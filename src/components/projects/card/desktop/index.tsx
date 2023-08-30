interface DesktopProps{
  imageDesktop: string
}

export default function Desktop({ imageDesktop }: DesktopProps ) {
    return (
      <div className="border-2 flex flex-col 
      items-center border-black min-h-[45vh] h-[45vh] w-[40vw] min-w-[300px] rounded-md">
        <div className="h-1 w-8 mt-1 mb-1 rounded-sm bg-black"></div>
        <div className="border border-black rounded-md">
          <img className="bg-purple-500  min-h-[40vh] h-[40vh] min-w-[280px] w-[38vw] rounded-sm" src={imageDesktop} alt="Imagem do site versão desktop" />
        </div>
      </div>
    );
  }