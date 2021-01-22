export default function Image(props){
    return <img src={props.src} width={props.width} height={props.height} alt={props.alt} className={props.className}/>
}