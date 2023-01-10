export default function Titulo(props: any){
    return(
        <div className="text-9x1">
            <h1 className="height: 700px; ">Native.js com React & Firebase</h1>
            <h1>{props.children}</h1>
            <hr/>
        </div>
    )
}