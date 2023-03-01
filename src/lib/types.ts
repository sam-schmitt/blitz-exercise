export type Node = {
	id: string;
	name: string;
	children: Array<Node>;
	content: any;
	reference?: string;
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
	addChildFromReference: any;

	ContentController?: boolean;
};
