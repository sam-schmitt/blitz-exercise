import { TreeNodeProps } from "@/lib/types";
import { useState } from "react";
import {
	GrAction,
	GrAdd,
	GrCaretDown,
	GrCaretUp,
	GrFormTrash,
	GrHome,
	GrTrash,
	GrUpgrade,
} from "react-icons/gr";

import PreviewController from "./PreviewController";
export default function TreeNode({
	node,
	index,
	addChild,
	deleteSelf,
	moveToGrandparent,
	moveAllChildrenToParent,
	deleteAllChildren,
	moveToRoot,
	editContent,
	moveUp,
	moveDown,
	addChildFromReference,

	ContentController,
}: TreeNodeProps) {
	const [options, setOptions] = useState(false);

	const buttons = [
		{
			title: "Add Child",
			onClick: () => addChild(node),
			icon: <GrAdd className='mr-2' />,
			visible: !node.reference,
		},
		{
			title: "Delete",
			onClick: () => deleteSelf(node),
			icon: <GrTrash className='mr-2' />,
			visible: true,
		},
		{
			title: "Move Up Node",
			onClick: () => moveToGrandparent(node),
			icon: <GrUpgrade className='mr-2' />,
			visible: true,
		},
		{
			title: "Move All Children Up Node",
			onClick: () => moveAllChildrenToParent(node),
			icon: <GrCaretUp className='mr-2' />,
			visible: !node.reference,
		},
		{
			title: "Delete All Children",
			onClick: () => deleteAllChildren(node),
			icon: <GrFormTrash className='mr-2' />,
			visible: !node.reference,
		},
		{
			title: "Move To Root",
			onClick: () => moveToRoot(node),
			icon: <GrHome className='mr-2' />,
			visible: true,
		},
		{
			title: "Move Up",
			onClick: () => moveUp(node),
			icon: <GrCaretUp className='mr-2' />,
			visible: true,
		},
		{
			title: "Move Down",
			onClick: () => moveDown(node),
			icon: <GrCaretDown className='mr-2' />,
			visible: true,
		},
		{
			title: "Add Child From Reference",
			onClick: () => addChildFromReference(node, {}),
			icon: <GrAction className='mr-2' />,
			visible: !node.reference,
		},
	];

	return (
		<div className='bg-white rounded-md shadow-md m-5 p-2'>
			<p className='mr-2 text-sm font-extralight'>ID: {node.id}</p>
			{node.reference && (
				<p className='mr-2 text-sm font-extralight'>Ref: {node.reference}</p>
			)}

			<div className='flex flex-row items-center justify-between'>
				{node.content ? (
					<PreviewController content={node.content} />
				) : (
					<i>No content yet..</i>
				)}
				<div className='flex flex-row items-center'>
					<button
						className='border-2 border-gray-200 bg-white text-gray-700 hover:border-slate-500 hover:bg-slate-500 hover:text-white px-4 py-2 rounded-md flex items-center justify-start space-x-2 text-xs'
						onClick={() => setOptions(!options)}
					>
						{options ? "Hide" : "Show"} Options
					</button>
				</div>
			</div>
			{options && (
				<div>
					<div className='absolute mt-10 bg-white rounded-md shadow-md p-2 grid grid-cols-2 md:grid-cols-3 gap-4'>
						{buttons.map(function (item, index) {
							if (item.visible) {
								return (
									<button
										key={index}
										className='border-2 border-gray-200 bg-white text-gray-700 hover:border-slate-500 hover:bg-slate-500 hover:text-white px-4 py-2 rounded-md flex items-center justify-start space-x-2 text-xs'
										onClick={() => {
											item.onClick();
											setOptions(false);
										}}
									>
										{item.icon} {item.title}
									</button>
								);
							} else {
								return <></>;
							}
						})}
					</div>
				</div>
			)}
			{ContentController && (
				// @ts-expect-error
				<ContentController
					editContent={(content: any) => editContent(node, content)}
				/>
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
							editContent={editContent}
							moveUp={moveUp}
							moveDown={moveDown}
							addChildFromReference={addChildFromReference}
							ContentController={ContentController}
							moveToRoot={moveToRoot}
						/>
					);
				})}
			</div>
		</div>
	);
}
