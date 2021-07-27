import React from "react";
import Image from "next/image";
import Link from "next/link";
function Item({ product }) {
	return (
		<Link href={"products/" + product.id}>
			<div className="product-box" key={product.id}>
				<div className="product-image">
					<Image
						width={300}
						height={300}
						src={"/product.jpg"}
						alt={product.title}
					/>
				</div>
				<div className="text-box">
					<h5>{product.title}</h5>
				</div>
			</div>
		</Link>
	);
}

export default Item;
