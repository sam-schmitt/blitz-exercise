import { TreeNodeProps } from "@/lib/types";

export default function TreeNode({
	node,
	index,
	addChild,
	deleteSelf,
	moveToGrandparent,
	moveAllChildrenToParent,
	deleteAllChildren,
	moveToRoot,
	moveNodeToParent,
}: TreeNodeProps) {
	return (
		<div>
			<>
				<button
					onClick={() => {
						addChild(node);
					}}
				>
					+
				</button>
				<button
					onClick={() => {
						deleteSelf(node);
					}}
				>
					X
				</button>
				<button
					onClick={() => {
						moveToGrandparent(node);
					}}
				>
					^
				</button>
				<button
					onClick={() => {
						moveAllChildrenToParent(node);
					}}
				>
					^^
				</button>
				<button
					onClick={() => {
						deleteAllChildren(node);
					}}
				>
					X_
				</button>
				<button
					onClick={() => {
						moveToRoot(node);
					}}
				>
					^^^
				</button>
			</>
			<div>
				<p>{node.name}</p>
				<p>{node.id}</p>

				{node.children.map(function (node, index) {
					return (
						<TreeNode
							node={node}
							index={index}
							addChild={addChild}
							deleteSelf={deleteSelf}
							moveToGrandparent={moveToGrandparent}
							moveAllChildrenToParent={moveAllChildrenToParent}
							deleteAllChildren={deleteAllChildren}
							moveToRoot={moveToRoot}
							moveNodeToParent={moveNodeToParent}
						/>
					);
				})}
			</div>
		</div>
	);
}
