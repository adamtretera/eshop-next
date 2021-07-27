import React from "react";
import styles from "../styles/Navbar.module.scss";
function Navbar() {
	return (
		<nav className={styles.navbar}>
			<h1 className={styles.logo}>ESHOP</h1>
			<form>
				<input placeholder={"Search product"} type="text"></input>
			</form>
		</nav>
	);
}

export default Navbar;
