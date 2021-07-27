import React from "react";
import { client } from "../utills/shopify";
import Item from "../components/Item";
export const getServerSideProps = async () => {
	const products = await client.product.fetchAll(); // Fetch product
	return {
		props: {
			products: JSON.parse(JSON.stringify(products)),
		},
	};
};
function data(props) {
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
				{props.products.map((product) => (
					<Item product={product} key={product.id} />
				))}
			</section>
		</main>
	);
}

export default data;
