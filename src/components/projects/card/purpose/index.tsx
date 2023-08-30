interface PurposeProps{
    purpose: string;
}
export default function Purpose({purpose}: PurposeProps){
    return(
        <div>
            <p>{purpose}</p>
        </div>
    )
}