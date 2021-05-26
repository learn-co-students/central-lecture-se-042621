export default props => (
    <div className="Second">
        <hr />
        <p>Here are the Props we passed for Second Component:</p>
        <p>Name: { props.block.name }</p>
        <p>Component: { props.block.component }</p>
        <p>Headline: { props.block.headline }</p>
    </div>
)