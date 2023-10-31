import "./App.css";
import movies from "./assets/movies.json";
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";

function App() {
	// Créer un tableau de toutes les catégories
	const allCategories = movies.map((movie) => movie.category);

	return (
		<>
			<div className="app">
				<Header />
				<div>
					{allCategories.map((category, index) => (
						<Section
							key={index}
							categories={category}
							images={movies[index].images}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
