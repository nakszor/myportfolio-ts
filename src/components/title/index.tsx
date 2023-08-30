interface TitleProps {
    text: string;
  }
  
export default function Title({text}: TitleProps){
    return(
    <div className="flex items-center mt-8 mb-4 justify-center w-full">
        <h2 className="text-2xl font-bold text-purple-900">{text}</h2>
    </div>
    )
}