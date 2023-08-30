interface CardTechsProps{
    techs: string;
}
export default function CardTechs({techs}: CardTechsProps){
    return(
        <p className="text-gray-600">{techs}</p>
    )
}