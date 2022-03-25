import search from "../imgs/search.svg"
 
 export default function SearchWindow(props){
     return (<>
    <div>
      <input name="searchEmail" value={props.emailParticipant} onChange={props.inputSearchHandler} placeholder='Type in your email' data-error={props.invalid} />
      <button name="searchEmail" onClick={() => { props.handleSearchParticipant(); }}><img srcSet={search}/> </button>
    </div>
      {props.name && <h3>{props.name} Welcome to your English Stats DashBoard</h3>}
     </>) 
}