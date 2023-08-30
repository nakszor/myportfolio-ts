interface ButtonProps{
    buttonText: string;
}
export default function Button({buttonText}: ButtonProps) {
    return (
      <button className="bg-purple-400 text-white flex flex-row items-center 
      justify-center rounded-md w-36 h-8">
        {buttonText}
      </button>
    );
  }
  