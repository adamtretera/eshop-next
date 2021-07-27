import { useRouter } from "next/router";
import { useState } from "react";
import { client } from "../../lib/shopify";

const Product = () => {
	const router = useRouter();
	const [productInfo, setProductInfo] = useState("");

	const { id } = router.query;
	client.product.fetch(id).then((product) => {
		setProductInfo(product);
	});
	return <p>Post: {productInfo.title} </p>;
};

export default Product;
