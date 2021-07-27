import Head from "next/head";

import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Eshop</title>
				<meta name="description" content="Eshop by Adam Tretera" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}></main>
		</div>
	);
}
