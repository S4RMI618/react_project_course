import PropTypes from "prop-types";
const FirstApp = ( {title, subtitle, name} ) => {

  return (
    <>
      <h1 >{ title }</h1>
      <p>{ subtitle }</p>
      <p>{ name }</p>
    </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  name: PropTypes.string
}

FirstApp.defaultProps = {
  title: "Creator Unknown",
  subtitle: "There isn't description assigned",
  name: "There isn't a name assigned"
}

export default FirstApp