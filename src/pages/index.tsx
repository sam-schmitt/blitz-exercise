import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { TreeProps } from "@/lib/types";
import Tree from "@/components/Tree";
import bormClient from "../typedb/client";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	async function test() {
		const res = await bormClient.mutate(
			{ $entity: "tree", name: "FIRST TEST" },
			{ noMetadata: true }
		);
		console.log({ res });
	}

	return (
		<>
			<Head>
				<title>Blitz Exercise</title>
				<meta name='description' content='For the job application @ Blitz' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<button onClick={test}>Test</button>
			</main>
		</>
	);
}
