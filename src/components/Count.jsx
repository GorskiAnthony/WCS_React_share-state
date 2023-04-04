import Display from "./Display";

function Counter({ count }) {
	return (
		<div>
			Tu as cliqué <Display count={count} /> fois.
		</div>
	);
}

export default Counter;
