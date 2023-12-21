interface ButtonProps {
    children: React.ReactNode,
}

export default function Button({
    children
}: ButtonProps) {
    const buttonStyle = `rounded-md p-2 text-sm text-white hover:border-2 border-[#d90429] hover:text-[#d90429] hover:bg-white
     bg-[#d90429] cursor-pointer`; 

    return (
        <button className={buttonStyle}>
            {children}
        </button>
    );
}