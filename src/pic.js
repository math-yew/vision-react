export default function Pic (props) {
  return(
    <div className="pic" style={{backgroundImage:`url(${props.url})`,height:`${props.height}`,width:`${props.height}`}}><p onClick={props.action}>E</p></div>
  )
}
