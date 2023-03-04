import { Node } from "@/lib/types";
import { useEffect, useState } from "react";
import {
	GrAppsRounded,
	GrCalendar,
	GrCheckbox,
	GrDocumentText,
	GrFormEdit,
	GrList,
} from "react-icons/gr";
import Button from "./inputs/button";
import DatePicker from "./inputs/datePicker";
import Group from "./inputs/group";
import Page from "./inputs/page";
import Select from "./inputs/select";
import TextDisplay from "./inputs/textDisplay";
import TextInput from "./inputs/textInput";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCalendar, faCheckSquare, faFont, faList } from '@fortawesome/free-solid-svg-icons'

export default function ContentController({
	editContent,
	node,
	editingContent,
	setEditingContent,
	canPage,
}: {
	editContent: any;
	node: Node;
	editingContent: boolean;
	setEditingContent: any;
	canPage: boolean;
}) {
	const sets = [
		{
			title: "Sections",
			items: [
				{
					title: "Page",
					description: "Add an page to the mockup",
					field: "page",
					icon: <GrDocumentText />,
					visible: canPage,
				},
				{
					title: "Group",
					description: "Add an group of components to the mockup",
					field: "group",
					icon: <GrDocumentText />,
					visible: true,
				},
			],
		},
		{
			title: "Text",
			items: [
				{
					title: "Text Display",
					description: "Add a text display to the mockup",
					field: "text-display",
					icon: <GrList />,
					visible: true,
				},
			],
		},
		{
			title: "Components",
			items: [
				{
					title: "Text Input",
					description: "Add an input field to the mockup",
					field: "text-input",
					icon: <GrFormEdit />,
					visible: true,
				},
				{
					title: "Date Picker",
					description: "Add a date picker to the mockup",
					field: "date-picker",
					icon: <GrCalendar />,
					visible: true,
				},
				{
					title: "Select",
					description: "Add a dropdown menu to the mockup",
					field: "select",
					icon: <GrCheckbox />,
					visible: true,
				},
				{
					title: "Button",
					description: "Add a button to the mockup",
					field: "button",
					icon: <GrAppsRounded />,
					visible: true,
				},
			],
		},
	];

	const [selected, setSelected] = useState(node.content.type);
	const [pickingType, setPickingType] = useState(node.content.type === "empty");

	return (
		<div>
			<div className='flex flex-row '>
				{node.content.type !== "empty" && (
					<button
						onClick={() => {
							setEditingContent(!editingContent);
						}}
						className='border-2 border-gray-200 bg-white text-gray-700 hover:border-slate-500 hover:bg-slate-500 hover:text-white px-4 py-2 rounded-md flex items-center justify-start space-x-2 text-xs'
					>
						{editingContent ? "Cancel" : "Edit Content"}
					</button>
				)}

				{!pickingType && (
					<button
						onClick={() => {
							setPickingType(true);
						}}
						className='border-2 border-gray-200 bg-white text-gray-700 hover:border-slate-500 hover:bg-slate-500 hover:text-white px-4 py-2 rounded-md flex items-center justify-start space-x-2 text-xs'
					>
						Other Type
					</button>
				)}
			</div>
			<div>
				{editingContent === true && (
					<div className=' mt-5 p-5'>
						{pickingType ? (
							<div>
								<p className='text-center text-lg'>Choose a Type</p>

								{sets.map(function (set, index) {
									return (
										<div className='mt-5'>
											<p className='mb-3'>{set.title}</p>
											<div className='grid grid-cols-2 gap-4'>
												{set.items.map(function (item, idx) {
													if (item.visible) {
														return (
															<button
																key={index}
																onClick={() => {
																	setSelected(item.field);
																	setPickingType(false);
																}}
																className='border-2 border-gray-200 bg-white text-gray-700 hover:border-slate-500 hover:bg-slate-500 hover:text-white px-4 py-2 rounded-md flex items-center justify-start space-x-2'
															>
																<div className='flex flex-row justify-between w-full'>
																	<>{item.icon}</>
																	<div>
																		<div className='font-medium text-right'>
																			{item.title}
																		</div>
																		<div className='text-sm'>
																			{item.description}
																		</div>
																	</div>
																</div>
															</button>
														);
													}
												})}
											</div>
										</div>
									);
								})}
							</div>
						) : (
							<>
								{selected === "text-input" && (
									<TextInput
										editContent={(content: any) => {
											editContent(content);
											setSelected("");
											setEditingContent(false);
										}}
									/>
								)}
								{selected === "select" && (
									<Select
										editContent={(content: any) => {
											editContent(content);
											setSelected("");
											setEditingContent(false);
										}}
									/>
								)}
								{selected === "text-display" && (
									<TextDisplay
										editContent={(content: any) => {
											editContent(content);
											setSelected("");
											setEditingContent(false);
										}}
									/>
								)}
								{selected === "date-picker" && (
									<DatePicker
										editContent={(content: any) => {
											editContent(content);
											setSelected("");
											setEditingContent(false);
										}}
									/>
								)}
								{selected === "button" && (
									<Button
										editContent={(content: any) => {
											editContent(content);
											setSelected("");
											setEditingContent(false);
										}}
									/>
								)}
								{selected === "page" && (
									<Page
										editContent={(content: any) => {
											editContent(content);
											setSelected("");
											setEditingContent(false);
										}}
									/>
								)}
								{selected === "group" && (
									<Group
										editContent={(content: any) => {
											editContent(content);
											setSelected("");
											setEditingContent(false);
										}}
									/>
								)}
							</>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
