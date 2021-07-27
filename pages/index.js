import Head from "next/head";
import React from "react";
import { useState } from "react";

import { client } from "../lib/shopify";
import Item from "../components/Item";
import styles from "../styles/Home.module.scss";

export const getServerSideProps = async () => {
	const products = await client.product.fetchAll();
	console.log(products);
	return {
		props: {
			products: JSON.parse(JSON.stringify(products)),
		},
	};
};
function Home(props) {
	const [products, setProducts] = useState(props.products);
	const nextPage = async () => {
		await client.fetchNextPage(props.products).then((res) => {
			console.log(res); // ooh lala the next page
		});
	};
	client.product
		.fetchQuery({
			first: 10,
			reverse: true,
			query: "title:*iPhone*",
		})
		.then((products) => {});

	return (
		<main>
			<section className={"wrapper"}>
				{products.map((product) => (
					<Item product={product} key={product.id} />
				))}
			</section>
			<button onClick={nextPage}>Load More</button>
		</main>
	);
}
export default Home;
