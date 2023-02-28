import { TreeNodeProps } from "@/lib/types";
import {
	GrAdd,
	GrCaretUp,
	GrFormTrash,
	GrHome,
	GrTrash,
	GrUpgrade,
} from "react-icons/gr";
export default function TreeNode({
	node,
	index,
	addChild,
	deleteSelf,
	moveToGrandparent,
	moveAllChildrenToParent,
	deleteAllChildren,
	moveToRoot,
	isIB,
}: TreeNodeProps) {
	return (
		<div className='bg-white rounded-md shadow-md m-5 p-2'>
			<h3 className='text-lg font-bold flex flex-row items-center justify-between'>
				{node.name} <p className=' text-sm font-extralight'>ID: {node.id}</p>
			</h3>
			{!isIB && (
				<div className='flex flex-row'>
					<button
						className='p-1 rounded-lg m-1 border-2 flex flex-row items-center  text-sm'
						onClick={() => {
							addChild(node);
						}}
					>
						<GrAdd /> Add Child
					</button>
					<button
						className='p-1 rounded-lg m-1 border-2 flex flex-row items-center text-sm'
						onClick={() => {
							deleteSelf(node);
						}}
					>
						<GrTrash /> Delete
					</button>
					<button
						className='p-1 rounded-lg m-1 border-2 flex flex-row items-center text-sm'
						onClick={() => {
							moveToGrandparent(node);
						}}
					>
						<GrUpgrade /> Move Up Node
					</button>
					<button
						className='p-1 rounded-lg m-1 border-2 flex flex-row items-center text-sm'
						onClick={() => {
							moveAllChildrenToParent(node);
						}}
					>
						<GrCaretUp /> Move Children Up Node
					</button>
					<button
						className='p-1 rounded-lg m-1 border-2 flex flex-row items-center text-sm'
						onClick={() => {
							deleteAllChildren(node);
						}}
					>
						<GrFormTrash /> Delete All Children
					</button>
					<button
						className='p-1 rounded-lg m-1 border-2 flex flex-row items-center text-sm'
						onClick={() => {
							moveToRoot(node);
						}}
					>
						<GrHome /> Move To Root
					</button>
				</div>
			)}

			<div>
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
						/>
					);
				})}
			</div>
		</div>
	);
}
