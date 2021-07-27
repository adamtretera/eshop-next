import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/Item.module.scss";
export async function getStaticProps({ params: { id } }) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const product = await res.json();

	return {
		props: {
			product,
		},
	};
}
export async function getStaticPaths() {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
	const products = await res.json();
	return {
		paths: products.map((row) => `/products/${row.id}`),
		fallback: true,
	};
}
const Product = ({ product }) => {
	const router = useRouter();
	const [productInfo, setProductInfo] = useState(product);
	const { id } = router.query;
	console.log(productInfo);

	return (
		<>
			<Navbar>
				<button>
					<Link href={"/"}>Zpět</Link>
				</button>
			</Navbar>
			<div className="item-container">
				<div className={styles.product}>
					<div className={styles.box}>
						<div>
							<h1>{productInfo.title} </h1>
							<p>{productInfo.title}</p>
						</div>
					</div>
					<div className={styles.image}>
						<Image
							height={1000}
							width={1000}
							src={"/product.jpg"}
							alt={product.title}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Product;
