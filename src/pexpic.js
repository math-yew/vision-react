export default function Pexpic (props) {
  return(
    <div className="pexPic" onClick={props.action} style={{backgroundImage:`url(${props.url})`}}></div>
  )
}
