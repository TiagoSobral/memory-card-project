export default function ScoreBoard({ score, bestScore }) {
	return (
		<ul>
			<li>Best Score: {bestScore}</li>
			<li>Score: {score}</li>
		</ul>
	);
}
