interface SubtitleProps {
    text: string;
  }
  
export default function Subtitle({text}: SubtitleProps){
    return(
    <div className="flex items-center justify-center w-full">
        <h2 className="text-lg font-bold text-purple-900">{text}</h2>
    </div>
    )
}