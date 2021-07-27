import React from "react";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Link href="/">
				<h1 className={styles.logo}>ESHOP</h1>
			</Link>
			<form>
				<input placeholder={"Search product"} type="text"></input>
			</form>
		</nav>
	);
}

export default Navbar;
