import Titulo from "./Titulo"

interface LayoutProps{
    titulo: string
}

export default function Layout(props: LayoutProps){
    return(
        <div className={
            `flex flex-col w-2/3 
             bg-gray-500 text-black   `
        }>
            <Titulo></Titulo>
<div>

</div>
            </div>
    )
}