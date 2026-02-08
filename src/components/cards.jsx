export function Cards({ characters, onClick }) {
	console.log(characters);
	return (
		<div className='cards' aria-label='game cards'>
			{characters != undefined &&
				characters.map((character) => (
					<Card
						name={character.name}
						key={character.id}
						image={character.img}
						hit={character.hit}
						onClick={onClick}
					/>
				))}
		</div>
	);
}

function Card({ name, charId, image, hit, onClick }) {
	return (
		<div
			className='card'
			key={charId}
			data-name={name}
			data-hit={hit}
			onClick={onClick}
			aria-label='game card'
		>
			<img src={image} alt='' />
			<h1>{name}</h1>
		</div>
	);
}
