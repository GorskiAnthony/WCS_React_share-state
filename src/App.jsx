import { useState } from "react";
import Counter from "./components/Count";
import Input from "./components/Input";
import { Button } from "./components/Button";
import "./App.css";

function App() {
	const [state, setState] = useState(0);
	const [increment, setIncrement] = useState(1);

	const handleClick = () => {
		setState(state + increment);
	};

	const handleChange = (event) => {
		setIncrement(Number(event.target.value));
	};

	return (
		<div>
			<Input handleChange={handleChange} />
			<Button handleClick={handleClick} increment={increment} />
			<Counter count={state} />
		</div>
	);
}

export default App;
