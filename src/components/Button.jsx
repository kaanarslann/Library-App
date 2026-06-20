export default function Button({children, color, func}) {
    
    const colors = {
        save: "bg-blue-500 hover:bg-blue-600",
        delete: "bg-red-500 hover:bg-red-600"
    };

    const base = "border text-white px-4 py-2 rounded-lg hover:cursor-pointer";

    const className = `${base} ${colors[color]}`;
    
    
    return (
        <>
            <button className={className} onClick={func}>{children}</button>
        </>
    )
}