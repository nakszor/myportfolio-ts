interface ButtonProps{
    buttonText: string;
    webPage: string;
}
export default function Button({buttonText, webPage}: ButtonProps) {
    return (
      <a href={webPage} target="_blank" className="bg-purple-400
      hover:cursor-pointer  text-white 
      flex flex-row items-center 
      justify-center rounded-md w-36 h-8">
        {buttonText}
      </a>
    );
  }
  