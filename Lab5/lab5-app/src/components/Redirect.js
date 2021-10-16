
const Redirect = (props) => {

    const {history} = props
    const handleRedirectClick = () => {
      if (history) {
        history.push('/')
      }else{
        console.log(`history not found in props`)
      }
    }

  return (
    <div>
      <button onClick={handleRedirectClick}>Redirect</button>
    </div>
  )
}




export default Redirect