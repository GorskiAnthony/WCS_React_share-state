function Button({ handleClick, increment }) {
	return <button onClick={handleClick}>{increment}</button>;
}

export { Button };
