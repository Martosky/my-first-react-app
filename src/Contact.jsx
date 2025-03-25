

 export default function Contact(props){


    return(
        
        <form className="">
          <section className="first-section">
          <label className="data-label" for={props.id}>{props.label}
          <input 
          className="info-data"
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          id={props.id}
          value={props.value}
          />
          </label>
          </section>
        </form>
        
    )
 }