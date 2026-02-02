import { useEffect, useState } from 'react';
import { Cards } from './cards';
import ScoreBoard from './scoreboard';

export default function Page() {
	const [characters, setCharacters] = useState();
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);

	useEffect(() => {
		fetch('https://api.attackontitanapi.com/titans')
			.then((response) => response.json())
			.then((data) => data.results)
			.then((results) =>
				setCharacters(
					results.map((result) => ({
						name: result.name,
						id: result.id,
						img: result.img.split('revision')[0],
						// split is used to correct the url of the image otherwise it comes out as 404 error.
						hit: false,
					})),
				),
			);
	}, []);

	return (
		<>
			<header>
				<h1>Memory Card Game</h1>
			</header>
			<main>
				<h1>
					Get points by clicking on an image but don't click on any more than once!
				</h1>
				<ScoreBoard score={score} bestScore={bestScore} />
				<Cards characters={characters} setCharacters={setCharacters} />
			</main>
			<footer>
				<h1>Tiago Sobral</h1>
			</footer>
		</>
	);
}
