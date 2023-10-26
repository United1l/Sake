interface ButtonProps {
    type: string,
    children: React.ReactNode,
}

export default function Button({
    type,
    children
}: ButtonProps) {
    const buttonStyle = `rounded-md p-2 text-sm ${type == "primary"? "bg-green-300": "bg-yellow-400"}`; 

    return (
        <button className={buttonStyle}>
            {children}
        </button>
    );
}