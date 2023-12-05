import { useEffect, useState } from "react";

export const useProducts = () => {
	const [products, setProducts] = useState([]);
	const [originalProducts, setOriginalProducts] = useState([]);

	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				setProducts(data);
				setOriginalProducts(data);
			})
			.catch((error) => {
				console.error('There was a problem fetching the data:', error);
			});
	}, []);

	return {products,setProducts,originalProducts}
}