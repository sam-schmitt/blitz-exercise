import { TreeProps } from "./types";

export function addChild(parent: TreeProps) {
	const newChild = {
		name: "",
		level: parent.level + 1,
		children: [],
	};
	parent.children.push(newChild);
}

export function removeChild(parent: TreeProps, index: number) {
	if (index < 0 || index >= parent.children.length) {
		return;
	}

	parent.children.splice(index, 1);
}

export function editChild(parent: TreeProps, index: number, name: string) {
	if (index < 0 || index >= parent.children.length) {
		return;
	}

	parent.children[index].name = name;
}

export function moveChildUp(parent: TreeProps, index: number) {
	if (index <= 0 || index >= parent.children.length) {
		return;
	}

	const child = parent.children[index];
	parent.children.splice(index, 1);
	parent.children.splice(index - 1, 0, child);
}

export function moveChildDown(parent: TreeProps, index: number) {
	if (index < 0 || index >= parent.children.length - 1) {
		return;
	}

	const child = parent.children[index];
	parent.children.splice(index, 1);
	parent.children.splice(index + 1, 0, child);
}
