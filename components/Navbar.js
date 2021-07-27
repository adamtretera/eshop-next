import React from "react";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
function Navbar({ children }) {
	return (
		<nav className={styles.navbar}>
			{children}
			<Link href="/">
				<h1 className={styles.logo}>ESHOP</h1>
			</Link>
		</nav>
	);
}

export default Navbar;
