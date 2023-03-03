export type Node = {
	id: string;
	name: string;
	children: Array<Node>;
	content: any;
	reference?: string;
	isRoot?: boolean;
	parent?: Node;
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
	editContent: any;
	moveUp: any;
	moveDown: any;
	isRoot?: boolean;
	addChildFromReference: any;

	ContentController?: boolean;
};
