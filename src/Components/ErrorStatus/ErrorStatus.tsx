import './ErrorStatus.css';

const ErrorStatus = ({code,msg}:{code:number,msg?:string}) => {
  return (
    <section id="err">
        <h1>{ code }</h1>
        <p>{ msg || "An Error Occurred"}</p>
    </section>
  )
}

export { ErrorStatus }