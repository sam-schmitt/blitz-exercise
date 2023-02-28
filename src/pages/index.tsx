import Head from "next/head";
import Tree from "@/components/Tree";
import InterfaceBuilder from "@/components/InterfaceBuilder";
import { useState } from "react";
import { Node } from "@/lib/types";

export default function Home(props: any) {
	const [root, setRoot] = useState<Node>({
		id: "root",
		name: "Root Node",
		children: [],
		content: {},
	});
	return (
		<>
			<Head>
				<title>Blitz Exercise</title>
				<meta name='description' content='For the job application @ Blitz' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className=''>
				<Tree root={root} content={{}} />
				<InterfaceBuilder />
			</main>
		</>
	);
}
