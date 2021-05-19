// Directly export anonymous function's return
// value while also passing props from 
// createComponent
export default props => (
  <div>
    <hr />
    <h2>Name: { props.userProfile.name } </h2>
    <h2>Headline: { props.userProfile.headline }</h2>
  </div>
);