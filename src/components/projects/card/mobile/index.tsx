interface MobileProps{
  imageMobile: string
}

export default function Mobile({ imageMobile }: MobileProps ) {
    return (
      <div className="border-2 flex flex-col items-center border-black h-64 w-36 rounded-md">
        <div className="h-1 w-8 mt-1 mb-1 rounded-sm bg-black"></div>
        <div className="border border-black h-56 w-32 rounded-md">
          <img className="bg-purple-500 h-full rounded-sm" src={imageMobile} alt="Imagem do site versão mobile" />
        </div>
      </div>
    );
  }