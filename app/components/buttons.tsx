interface ButtonProps {
    type: string,
    children: React.ReactNode,
}

export default function Button({
    type,
    children
}: ButtonProps) {
    const buttonStyle = "rounded-md p-2 bg-blue-300"

    return (
        <button className={buttonStyle}>
            {children}
        </button>
    );
}