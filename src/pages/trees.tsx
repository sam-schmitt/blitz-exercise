import Tree from "@/components/Tree";
import Header from "@/core/header";
import { useState } from "react";

export type Tree = {
	name: string;
};

export default function TreePage() {
	const [trees, setTrees] = useState<Array<Tree>>([]);

	async function newTree() {
		await setTrees((prevTrees) => {
			let updatedTrees = prevTrees;
			updatedTrees.push({ name: `Tree ${trees.length}` });
			return updatedTrees;
		});
	}

	return (
		<div>
			<Header selected={"/trees"} />
			{/* <button onClick={newTree}>New Tree</button>
			{trees.map(function (tree, index) {
				return ;
			})} */}
			<Tree content={{}} />
		</div>
	);
}
