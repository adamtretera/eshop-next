import Head from "next/head";
import React from "react";
import { useState } from "react";

import Item from "../components/Item";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";

export async function getStaticProps(context) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
	const products = await res.json();
	if (!products) {
		return {
			notFound: true,
		};
	}
	return {
		props: { products },
	};
}

function Home(props) {
	const [page, setPage] = useState(1);
	const [productsPerPage] = useState(10);
	const [products, setProducts] = useState(props.products);

	const onSearch = (e) => {
		setProducts(
			props.products.filter((product) =>
				product.title.toLowerCase().includes(e.target.value.toLowerCase())
			)
		);
	};
	const onFilter = (e) => {
		setProducts(
			e.target.value === "all"
				? props.products
				: props.products.filter(
						(product) => product.id % 2 === parseInt(e.target.value)
				  )
		);
	};
	const indexOfLastPost = page * productsPerPage;
	const indexOfFirstPost = indexOfLastPost - productsPerPage;
	const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
	const paginate = (pageNumber) => setPage(pageNumber);

	return (
		<>
			<Navbar>
				<form>
					<input onChange={onSearch} type="text" placeholder="Hledat produkt" />
					<select onChange={onFilter} name="pets" id="pet-select">
						<option value="all">Všechno</option>
						<option value={0}>Andriod</option>
						<option value={1}>iOS</option>
					</select>
				</form>
			</Navbar>
			<main>
				<section className={"wrapper"}>
					{currentPosts
						? currentPosts.map((product) => (
								<Item product={product} key={product.id} />
						  ))
						: props.products.map((product) => (
								<Item product={product} key={product.id} />
						  ))}
					{!currentPosts.length && <p>Nic jsem tu nenašel.</p>}
				</section>
				<Pagination
					page={page}
					postsPerPage={productsPerPage}
					totalPosts={products.length}
					paginate={paginate}
				/>
			</main>
		</>
	);
}
export default Home;
