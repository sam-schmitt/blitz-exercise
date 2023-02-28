export type Node = {
	id: string;
	name: string;
	children: Array<Node>;
};

export type TreeNodeProps = {
	node: Node;
	index: number;
	addChild: any;
	deleteSelf: any;
	moveToGrandparent: any;
	moveAllChildrenToParent: any;
	deleteAllChildren: any;
	moveToRoot: any;
	moveNodeToParent: any;
	// moveNodeToParentId: any;
};
