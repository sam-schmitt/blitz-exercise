import { useState } from "react";

import generateRandomId from "@/lib/helper/makeId";
import { Node, TreeNodeProps } from "@/lib/types";
import TreeNode from "./TreeNode";

export default function Tree(content: any, isIB: boolean) {
	const [root, setRoot] = useState<Node>({
		id: "root",
		name: "Root Node",
		children: [],
		content,
	});

	// add child to the selected node
	function addChild(node: Node, content: any) {
		setRoot((prevRoot) => {
			const updatedRoot = { ...prevRoot };
			if (node.id === updatedRoot.id) {
				// if the node is the root, add the child directly to the root
				updatedRoot.children.push({
					id: generateRandomId(10),
					name: `Child ${updatedRoot.children.length + 1}`,
					children: [],
					content,
				});
			} else {
				// find the node to add the child to in the tree
				const findAndAddChild = (parentNode: Node): boolean => {
					if (parentNode.id === node.id) {
						// add child to parent node
						parentNode.children.push({
							id: generateRandomId(10),
							name: `Child ${parentNode.children.length + 1}`,
							children: [],
							content,
						});
						return true;
					} else {
						// recursively search through children to find the node to add the child to
						for (let child of parentNode.children) {
							if (findAndAddChild(child)) {
								return true;
							}
						}
						return false;
					}
				};
				findAndAddChild(updatedRoot);
			}
			return updatedRoot;
		});
	}

	// delete the selected node
	function deleteSelf(node: Node) {
		setRoot((prevRoot) => {
			const updatedRoot = { ...prevRoot };
			if (node.id === updatedRoot.id) {
				// can't delete root node
				return updatedRoot;
			} else {
				// find the parent node and delete the current node from its children array
				const findAndDeleteSelf = (parentNode: Node): boolean => {
					for (let i = 0; i < parentNode.children.length; i++) {
						if (parentNode.children[i].id === node.id) {
							parentNode.children.splice(i, 1);
							return true;
						} else {
							// recursively search through children to find the node to delete
							if (findAndDeleteSelf(parentNode.children[i])) {
								return true;
							}
						}
					}
					return false;
				};
				findAndDeleteSelf(updatedRoot);
			}
			return updatedRoot;
		});
	}

	// Helper function to find the parent node of a given node
	function findParentNode(root: Node, node: Node): Node | undefined {
		if (root.children.includes(node)) {
			return root;
		}
		for (const child of root.children) {
			const parentNode = findParentNode(child, node);
			if (parentNode) {
				return parentNode;
			}
		}
	}

	// Helper function to find the index of a node within its parent's children array
	function nodeIndex(parent: Node, node: Node): number {
		return parent.children.findIndex((child) => child.id === node.id);
	}

	// move node up to grandparent
	function moveToGrandparent(node: Node) {
		setRoot((prevRoot) => {
			const updatedRoot = { ...prevRoot };
			const parentNode = findParentNode(updatedRoot, node);
			if (!parentNode) {
				return updatedRoot; // If node is root or has no parent, do nothing
			}
			const grandparentNode = findParentNode(updatedRoot, parentNode);
			if (!grandparentNode) {
				return updatedRoot; // If parent is root or has no parent, do nothing
			}
			// Remove node from parent's children array and add it to grandparent's children array
			parentNode.children.splice(nodeIndex(parentNode, node), 1);
			grandparentNode.children.push(node);
			return updatedRoot;
		});
	}

	// move all children of selected node up to grandparent
	function moveAllChildrenToParent(node: Node) {
		setRoot((prevRoot) => {
			const updatedRoot = { ...prevRoot };
			const { children } = node;
			const parent = findParentNode(updatedRoot, node);
			if (!parent) {
				return updatedRoot; // If node is root or has no parent, do nothing
			}
			// add all children of the selected node to the parent's children array
			parent.children.splice(parent.children.indexOf(node), 1, ...children);

			// remove the selected node from the parent's children array
			parent.children.splice(parent.children.indexOf(node), 1);

			return updatedRoot;
		});
	}

	function deleteNode(node: Node, target: Node): boolean {
		const { children } = node;

		// find the index of the target node
		const index = children.findIndex((child) => child.id === target.id);

		// if the target node is found, delete it and return true
		if (index !== -1) {
			children.splice(index, 1);
			return true;
		}

		// if the target node is not found, search for it in the node's children
		for (let i = 0; i < children.length; i++) {
			const child = children[i];

			if (deleteNode(child, target)) {
				return true;
			}
		}

		return false;
	}

	function deleteAllChildren(node: Node) {
		setRoot((prevRoot) => {
			const updatedRoot = { ...prevRoot };
			const { children } = node;

			// delete all of the children of the selected node
			children.forEach((child) => deleteNode(updatedRoot, child));

			// empty the children array of the selected node
			node.children = [];

			return updatedRoot;
		});
	}

	function moveToRoot(node: Node) {
		setRoot((prevRoot) => {
			const updatedRoot = { ...prevRoot };
			let parentNode: Node | undefined;

			// Find the node's parent
			const findParent = (node: Node, parent: Node | undefined) => {
				if (node.id === updatedRoot.id) {
					parentNode = parent;
					return;
				}
				for (let i = 0; i < node.children.length; i++) {
					findParent(node.children[i], node);
				}
			};
			findParent(updatedRoot, undefined);

			if (parentNode) {
				// Remove the node from its parent's children array
				parentNode.children = parentNode.children.filter(
					(child) => child.id !== node.id
				);
			}

			// Add the node as a child of the root node
			updatedRoot.children.push(node);

			return updatedRoot;
		});
	}

	return (
		<div className='bg-white rounded-md shadow-lg m-5 p-5'>
			<h1 className='text-3xl font-bold'>Tree Example</h1>
			<button
				className='text-white bg-slate-500 p-2 rounded-lg m-1'
				onClick={() => console.log({ root })}
			>
				Log Tree
			</button>
			{!isIB && (
				<button
					className='text-white bg-slate-500 p-2 rounded-lg m-1'
					onClick={() => addChild(root, {})}
				>
					Add Child to Root
				</button>
			)}

			<TreeNode
				node={root}
				index={0}
				addChild={addChild}
				deleteSelf={deleteSelf}
				moveToGrandparent={moveToGrandparent}
				moveAllChildrenToParent={moveAllChildrenToParent}
				deleteAllChildren={deleteAllChildren}
				moveToRoot={moveToRoot}
				isIB={isIB}
			/>
		</div>
	);
}
