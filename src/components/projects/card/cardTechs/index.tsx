interface CardTechsProps{
    techs: string;
}
export default function CardTechs({techs}: CardTechsProps){
    return(
        <p className="hover:text-gray-600">{techs}</p>
    )
}