export function Cards({ characters }) {
	console.log(characters);
	return (
		<>
			{characters != undefined &&
				characters.map((character) => (
					<Card name={character.name} key={character.id} image={character.img} />
				))}
		</>
	);
}

function Card({ name, charId, image }) {
	return (
		<div className='card' key={charId}>
			<img src={image} alt='' />
			<h1>{name}</h1>
		</div>
	);
}
