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
			.then((results) => {
				let figures = results.map((result) => ({
					name: result.name,
					id: result.id,
					img: result.img.split('revision')[0],
					// split is used to correct the url of the image otherwise it comes out as 404 error.
					hit: false,
				}));
				// shuffle function is called to use the Fisher-Yates Algorithm, and randomize the characters.
				return setCharacters(shuffle(figures));
			});
	}, []);

	function handleClick(e) {
		let character = e.target.dataset.name;
		let hit = e.target.dataset.hit;

		if (hit) {
			if (bestScore < score) {
				setBestScore(score);
			}
			setScore(0);
			setCharacters(
				character.map((element) => {
					if (element === character) return { ...element, hit: false };
				}),
			);
		} else {
			setScore(score + 1);
			setCharacters(
				character.map((element) => {
					if (element === character) return { ...element, hit: true };
				}),
			);
		}
	}

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
				<Cards
					characters={characters}
					setCharacters={setCharacters}
					onClick={handleClick}
				/>
			</main>
			<footer>
				<h1>Tiago Sobral</h1>
			</footer>
		</>
	);
}

function shuffle(array) {
	let shuffledArray = array;
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const random = Math.floor(Math.random() * (i + 1));

		[shuffledArray[i], shuffledArray[random]] = [
			shuffledArray[random],
			shuffledArray[i],
		];
	}

	return shuffledArray;
}
