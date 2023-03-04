import Head from "next/head";
import Header from "@/core/header";

export default function Home(props: any) {
	return (
		<>
			<Head>
				<title>Blitz Exercise</title>
				<meta
					name='description'
					content='My experience writing a weeklong job application for Blitz NoCode'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className=''>
				<Header selected={"/"} />
				<div className='w-3/6 mx-auto mb-10'>
					<p className='text-center font-bold'>
						<i>
							Welcome! Please use the top tab to navigate and be sure to have
							read the README in the repository.
						</i>
					</p>
					<p className='mt-5'>
						Also feel free to check out my{" "}
						<a
							style={{ color: "blue" }}
							href='https://samschmitt.net'
							target={"_blank"}
						>
							portfolio
						</a>
						.
					</p>
				</div>
			</main>
		</>
	);
}
