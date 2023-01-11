interface BotaoProps {
    className?: string
    children: any
}

export default function Botao(props: BotaoProps) {
    return (
        <button className={`
        bg-gradient-to-r from-pink-400 to-purple-700
        text-white px-4 py-2 rounded-md
        ${props.className}`}>
        
        {props.children}

        </button>
    )
}