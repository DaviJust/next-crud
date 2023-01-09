
interface LayoutProps{
    titulo: string
    children: any
}

export default function Titulo(props){
    return(
        <div>
            <h1>{props.children}</h1>
                <hr></hr>
        </div>
    )
}