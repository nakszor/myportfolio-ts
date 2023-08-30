interface TabletProps{
  imageTablet: string
}

export default function Tablet({ imageTablet }: TabletProps ) {
    return (
      <div className="border-2 flex flex-col 
      items-center border-black h-[370px] w-[250px] rounded-md">
        <div className="h-1 w-8 mt-1 mb-1 rounded-sm bg-black"></div>
        <div className="border border-black rounded-md">
          <img className="bg-purple-500 h-[340px] w-[230px] rounded-sm" src={imageTablet} alt="Imagem do site versão tablet" />
        </div>
      </div>
    );
  }