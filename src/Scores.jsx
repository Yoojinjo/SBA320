function Scores({ score }) {
	return (
		<div>
			<p>Date: {score.date}</p>
			<p>Score: {score.score}</p>
		</div>
	);
}

export default Scores;
