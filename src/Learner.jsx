import Scores from "./Scores";

function Learner({ learner }) {
	return (
		<div>
			<h2>{learner.name}</h2>
			<h3>{learner.bio}</h3>
			<div>
				<h4>Scores</h4>

				{learner.scores.map((score, index) => (
					<div>
						<h5>Score: {index + 1}</h5>
						<Scores key={index} score={score} />
					</div>
				))}
			</div>
		</div>
	);
}
export default Learner;
