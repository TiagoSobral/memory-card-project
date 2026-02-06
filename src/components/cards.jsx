export function Cards({ characters, onClick }) {
	console.log(characters);
	return (
		<div className='cards'>
			{characters != undefined &&
				characters.map((character) => (
					<Card
						name={character.name}
						key={character.id}
						image={character.img}
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
		>
			<img src={image} alt='' />
			<h1>{name}</h1>
		</div>
	);
}
