interface PurposeProps{
    purpose: string;
}
export default function Purpose({purpose}: PurposeProps){
    return(
        <div className="max-w-[600px] mt-2 mr-2 ml-2 text-purple-500 text-center">
            <p className="w-full">{purpose}</p>
        </div>
    )
}