const Section = ({ categories, images }) => {
	return (
		<div className="container">
			<h2>{categories}</h2>;
			<div className="movies-list">
				{images.map((image, index) => (
					<li key={index}>
						<img src={image} alt="movie" />
					</li>
				))}
			</div>
		</div>
	);
};

export default Section;
