import { useState } from "react";

import generateRandomId from "@/lib/helper/makeId";
import { Node, TreeNodeProps } from "@/lib/types";
import TreeNode from "./TreeNode";
import PreviewTree from "./PreviewTree";
import { DndContext } from "@dnd-kit/core";

export default function Tree({ ContentController }: any) {
	const [root, setRoot] = useState<Node>({
		id: "root",
		name: "Root Node",
		children: [],
		content: {
			type: "empty",
		},
		isRoot: true,
	});
	const [previewing, setPreviewing] = useState<boolean>(false);
	function assignNewIds(children: Node[]): Node[] {
		return children.map((child) => {
			const newChild = { ...child };
			newChild.id = generateRandomId(10);
			newChild.reference = child.id;
			if (newChild.children) {
				newChild.children = assignNewIds(newChild.children);
			}
			return newChild;
		});
	}
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
					parent: node,
				});
			} else {
				let parentOfAdded = root;
				// find the node to add the child to in the tree
				const findAndAddChild = (parentNode: Node): boolean => {
					if (parentNode.id === node.id) {
						// add child to parent node
						parentOfAdded = parentNode;
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
				const updateChildrenContent = (parentNode: Node) => {
					for (let i = 0; i < parentNode.children.length; i++) {
						const child = parentNode.children[i];
						if (child.reference === parentOfAdded.id) {
							child.children = assignNewIds(parentOfAdded.children);
						}
						updateChildrenContent(child);
					}
				};
				updateChildrenContent(root);
			}
			return updatedRoot;
		});
	}

	function editContent(node: Node, content: any) {
		setRoot((prevRoot) => {
			const updatedRoot = { ...prevRoot };

			const updateContent = (currentNode: Node) => {
				if (currentNode.id === node.id) {
					// update content of the node
					currentNode.content = content;

					// update content of children with matching reference
					const updateChildrenContent = (parentNode: Node) => {
						for (let i = 0; i < parentNode.children.length; i++) {
							const child = parentNode.children[i];
							if (child.reference === node.id) {
								child.content = content;
							}
							updateChildrenContent(child);
						}
					};
					updateChildrenContent(root);

					return true;
				}

				for (let i = 0; i < currentNode.children.length; i++) {
					const child = currentNode.children[i];
					if (updateContent(child)) {
						return true;
					}
				}

				return false;
			};

			updateContent(updatedRoot);
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
				let parentOfDeleted = root;
				// find the parent node and delete the current node from its children array
				const findAndDeleteSelf = (parentNode: Node): boolean => {
					for (let i = 0; i < parentNode.children.length; i++) {
						if (parentNode.children[i].id === node.id) {
							parentOfDeleted = parentNode;
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
				const updateChildrenContent = (parentNode: Node) => {
					for (let i = 0; i < parentNode.children.length; i++) {
						const child = parentNode.children[i];
						if (child.reference === parentOfDeleted.id) {
							child.children = assignNewIds(parentOfDeleted.children);
						}
						updateChildrenContent(child);
					}
				};
				updateChildrenContent(root);
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
			const nodeIndex = parent.children.indexOf(node);
			if (nodeIndex === -1) {
				return updatedRoot; // If node is not a child of parent, do nothing
			}
			// add all children of the selected node to the parent's children array
			parent.children.splice(
				nodeIndex,
				1,
				...children,
				...parent.children.slice(nodeIndex + 1)
			);

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
			deleteSelf(node);
			return updatedRoot;
		});
	}

	// move selected node up in its children array
	function moveUp(node: Node) {
		setRoot((prevRoot) => {
			const updatedRoot = { ...prevRoot };
			const parent = findParentNode(updatedRoot, node);
			if (!parent) {
				return updatedRoot; // If node is root or has no parent, do nothing
			}
			const index = nodeIndex(parent, node);
			if (index === 0) {
				return updatedRoot; // If node is first child, do nothing
			}
			// Swap node with node at previous position
			parent.children.splice(index - 1, 0, node);
			parent.children.splice(index + 1, 1);
			return updatedRoot;
		});
	}

	// move selected node down in its children array
	function moveDown(node: Node) {
		setRoot((prevRoot) => {
			const updatedRoot = { ...prevRoot };
			const parent = findParentNode(updatedRoot, node);
			if (!parent) {
				return updatedRoot; // If node is root or has no parent, do nothing
			}
			const index = nodeIndex(parent, node);
			if (index === parent.children.length - 1) {
				return updatedRoot; // If node is last child, do nothing
			}
			// Swap node with node at next position
			parent.children.splice(index + 2, 0, node);
			parent.children.splice(index, 1);
			return updatedRoot;
		});
	}

	function addChildFromReference(reference: Node) {
		setRoot((prevRoot) => {
			const updatedRoot = { ...prevRoot };
			const findAndAddChild = (parentNode: Node): boolean => {
				for (let child of parentNode.children) {
					if (child.id === reference.id) {
						// add child to parent node
						const newChild = {
							id: generateRandomId(10),
							name: `Child ${parentNode.children.length + 1}`,
							children: reference.children,
							content: reference.content,
							reference: reference.id, // add a reference to the parent node
						};
						parentNode.children.push(newChild);
						assignNewIds([newChild]);
						return true;
					} else if (findAndAddChild(child)) {
						return true;
					}
				}
				return false;
			};
			findAndAddChild(updatedRoot);
			return updatedRoot;
		});
	}

	function moveNode(myId: string, otherId: string, type: "up" | "down") {
		setRoot((prevRoot) => {
			const updatedRoot = { ...prevRoot };
			const myNode = findNode(updatedRoot, myId);
			const otherNode = findNode(updatedRoot, otherId);
			if (!myNode || !otherNode) {
				return updatedRoot;
			}
			const myParent = findParentNode2(updatedRoot, myId);
			const otherParent = findParentNode2(updatedRoot, otherId);
			if (!myParent || !otherParent) {
				return updatedRoot;
			}
			if (myParent.id !== otherParent.id) {
				// if nodes don't have the same parent, use the original logic
				const myIndex = myParent.children.indexOf(myNode);
				myParent.children.splice(myIndex, 1);
				const otherIndex = otherParent.children.indexOf(otherNode);
				otherParent.children.splice(
					type === "up" ? otherIndex : otherIndex + 1,
					0,
					myNode
				);
			} else {
				// if nodes have the same parent, move myNode above or below otherNode
				const myIndex = myParent.children.indexOf(myNode);
				myParent.children.splice(myIndex, 1);
				const otherIndex = myParent.children.indexOf(otherNode);
				const newIndex = type === "up" ? otherIndex : otherIndex + 1;
				myParent.children.splice(newIndex, 0, myNode);
			}
			return updatedRoot;
		});
	}

	function findNode(node: any, id: string): any {
		if (node.id === id) {
			return node;
		}
		for (const child of node.children || []) {
			const found = findNode(child, id);
			if (found) {
				return found;
			}
		}
		return null;
	}

	function findParentNode2(node: any, id: string, parent: any = null): any {
		if (node.id === id) {
			return parent;
		}
		for (const child of node.children || []) {
			const found = findParentNode2(child, id, node);
			if (found) {
				return found;
			}
		}
		return null;
	}
	const [dragging, setDragging] = useState(false);

	function onDragEndHandler(e: any) {
		if (e.collisions.length > 0) {
			const myId = e.active.id;
			const otherId = e.collisions[0].id;
			const type = e.collisions[0].data.droppableContainer.data.current.type;
			console.log({ myId, otherId, type });
			moveNode(myId, otherId, type);
		}

		setDragging(false);
	}

	return (
		<div className='bg-white rounded-md shadow-lg m-3 p-3 flex overflow-y-visible h-full'>
			<div className='w-2/3 overflow-y-scroll pr-2'>
				<DndContext
					onDragEnd={onDragEndHandler}
					onDragStart={(e: any) => {
						setDragging(true);
					}}
				>
					{/* <button
						className='text-white bg-slate-500 p-2 rounded-lg m-1'
						onClick={() => console.log({ root })}
					>
						Log Tree
					</button>
					<button
						className='text-white bg-slate-500 p-2 rounded-lg m-1'
						onClick={() => setPreviewing(!previewing)}
					>
						Toggle Preview
					</button> */}
					<TreeNode
						node={root}
						index={0}
						addChild={addChild}
						deleteSelf={deleteSelf}
						moveToGrandparent={moveToGrandparent}
						moveAllChildrenToParent={moveAllChildrenToParent}
						deleteAllChildren={deleteAllChildren}
						moveToRoot={moveToRoot}
						editContent={editContent}
						moveUp={moveUp}
						moveDown={moveDown}
						addChildFromReference={addChildFromReference}
						ContentController={ContentController}
						isRoot={true}
						dragging={dragging}
					/>
				</DndContext>
			</div>
			<div className='w-1/3 overflow-y-scroll pl-2'>
				<PreviewTree root={root} />
			</div>
		</div>
	);
}
