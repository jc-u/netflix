const Section = ({ categories, images }) => {
	return (
		<div className="container">
			<h2>{categories}</h2>;
			<div className="movies-list">
				{images.map((image, index) => (
					<div className="movie-img" key={index}>
						<img src={image} alt="movie" />
					</div>
				))}
			</div>
		</div>
	);
};

export default Section;
