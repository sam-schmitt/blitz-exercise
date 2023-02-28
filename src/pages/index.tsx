import Head from "next/head";
import Tree from "@/components/Tree";

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
				<h1 className='text-3xl font-bold underline'>Hello world!</h1>
				<Tree />
			</main>
		</>
	);
}
