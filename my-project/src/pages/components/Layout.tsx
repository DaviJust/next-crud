import Titulo from "./Titulo"

interface LayoutProps{
    titulo:string
    children:any
}

export default function Layout(props: LayoutProps){
    return(
        <div className=" height: 24rem width: 24rem  flex flex-col w-2/3 bg-black text-white  text-9xl">
            <Titulo titulo={props}></Titulo>
            {props.children}
        </div>
    )
}