import { useState } from "react";
import "./App.css";
import Learner from "./Learner";
import learnerArray from "./LearnerArray";

function App() {
	return (
		<div className="learnerData">
			<h1>Learners</h1>
			{learnerArray.map((learner, index) => (
				<Learner key={index} learner={learner} />
			))}
		</div>
	);
}

export default App;
