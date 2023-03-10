import { TreeNodeProps } from "@/lib/types";
import { useState } from "react";
import {
	GrAction,
	GrAdd,
	GrCaretDown,
	GrCaretUp,
	GrChannel,
	GrClose,
	GrEdit,
	GrFormTrash,
	GrHome,
	GrMoreVertical,
	GrTrash,
	GrUpgrade,
} from "react-icons/gr";

import PreviewController from "./PreviewController";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
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
	isRoot,
	dragging,
	ContentController,
}: TreeNodeProps) {
	const [options, setOptions] = useState(false);

	const buttons = [
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
			title: "Create Copy from Reference",
			onClick: () =>
				addChildFromReference(node, {
					type: "empty",
				}),
			icon: <GrAction className='mr-2' />,
			visible: !node.reference,
		},
	];
	const [editingContent, setEditingContent] = useState<boolean>(
		node.content.type === "empty"
	);

	function Draggable({ children }: any) {
		const { attributes, listeners, setNodeRef, transform } = useDraggable({
			id: node.id,
			data: node,
		});
		const style = {
			transform: CSS.Translate.toString(transform),
		};

		return (
			<button ref={setNodeRef} style={style} {...listeners} {...attributes}>
				{children}
			</button>
		);
	}

	function Droppable() {
		const { setNodeRef: setFirstDroppableRef } = useDroppable({
			id: node.id,
			data: { type: "down" },
		});

		return (
			<div
				style={{
					padding: 90,
					width: "100%",
					backgroundColor: "transparent",
					paddingTop: "100",
					opacity: 0,
				}}
				ref={setFirstDroppableRef}
			>
				.
			</div>
		);
	}

	return (
		<div>
			{dragging && !node.isRoot && (
				<div className='absolute mt-10 flex w-full '>
					<Droppable />
				</div>
			)}

			<div className='bg-white rounded-md shadow-md m-5 p-2 flex flex-row '>
				<div className='flex flex-col justify-center py-20 ml-2'>
					<Draggable>
						<GrAction />
					</Draggable>
				</div>
				<div className='w-full'>
					{/* header */}
					<div className='flex flex-row justify-between '>
						<div>
							<p className='mr-2 text-sm font-extralight'>ID: {node.id}</p>
							{node.reference && (
								<p className='mr-2 text-sm font-extralight'>
									Ref: {node.reference}
								</p>
							)}
						</div>
						{node.isRoot && (
							<button
								onClick={() => {
									addChild(node, { type: "empty" });
								}}
								className='border-2 border-gray-200 bg-white text-gray-700 hover:border-slate-500 hover:bg-slate-500 hover:text-white px-4 py-2 rounded-md flex items-center justify-start space-x-2 text-xs'
							>
								Add Block
							</button>
						)}
					</div>
					<div className='flex flex-row items-center justify-between'></div>
					{!node.isRoot && editingContent && ContentController && (
						// @ts-expect-error
						<ContentController
							editContent={(content: any) => editContent(node, content)}
							node={node}
							editingContent={editingContent}
							setEditingContent={setEditingContent}
							canPage={index >= 1}
						/>
					)}
					{!editingContent && (
						<>
							<div className='flex flex-row justify-end'>
								<button
									onClick={() => {
										setEditingContent(true);
									}}
									className=' bg-white text-gray-700 hover:border-slate-500 hover:bg-slate-500 hover:text-white px-4 py-2 rounded-md flex items-center justify-start space-x-2 text-xs'
								>
									<GrEdit />
								</button>
							</div>
							<PreviewController content={node.content} />
						</>
					)}

					<div>
						{node.children.map(function (node, index) {
							return (
								<TreeNode
									node={node}
									index={index + 1}
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
									dragging={dragging}
								/>
							);
						})}
					</div>
					{options && (
						<div className='flex flex-row justify-end'>
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
					<div className='flex flex-row justify-between'>
						<div className='opacity-0'>.</div>

						{(node.content.type === "page" ||
							node.content.type === "group" ||
							node.isRoot ||
							!ContentController) && (
							<button
								onClick={() => {
									addChild(node, { type: "empty" });
								}}
								className='border-2 border-gray-200 bg-white text-gray-700 hover:border-slate-500 hover:bg-slate-500 hover:text-white px-4 py-2 rounded-md flex flex-row'
							>
								+
							</button>
						)}

						{!node.isRoot && (
							<div className='flex flex-row justify-end'>
								<button
									className='  text-gray-700 hover:text-gray px-4 py-2 rounded-md flex items-center justify-start space-x-2 text-xs'
									onClick={() => setOptions(!options)}
								>
									{!options ? <GrMoreVertical /> : <GrClose />}
								</button>
							</div>
						)}
					</div>
				</div>
				{!node.isRoot && (
					<div className='flex flex-col justify-center'>
						<button onClick={() => moveUp(node)}>
							<GrCaretUp />
						</button>
						<button onClick={() => moveDown(node)}>
							<GrCaretDown />
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
