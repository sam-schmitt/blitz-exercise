import Head from "next/head";
import { useRouter } from "next/router";
import Header from "@/core/header";

export default function Home(props: any) {
	return (
		<>
			<Head>
				<title>Blitz Exercise</title>
				<meta name='description' content='For the job application @ Blitz' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className=''>
				<Header />
			</main>
		</>
	);
}
