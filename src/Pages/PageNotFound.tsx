import { FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <section id ='page-not-found' className='404'>
      <div className="error-center">
        <h1 className="error-code">404</h1>
      </div>

      <div className="error-info">
        <p>
          <b> Fu*k !!! </b> 
          <span> Looks like you 
          reached an empty page ...</span>
        </p>
        <Link className="_flex" to='/'>{' '}<FaArrowLeft /> Go Home</Link>
      </div>
    </section>
  )
}

export default PageNotFound