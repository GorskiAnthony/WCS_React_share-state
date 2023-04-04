function Input({ handleChange }) {
	return (
		<>
			<label htmlFor="number">Increment</label>
			<input
				type="number"
				name="number"
				id="number"
				onChange={handleChange}
			/>
		</>
	);
}

export default Input;
