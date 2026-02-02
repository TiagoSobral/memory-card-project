export default function ScoreBoard({ score, bestScore }) {
	return (
		<ul>
			<li>Score: {score}</li>
			<li>Best Score: {bestScore}</li>
		</ul>
	);
}
