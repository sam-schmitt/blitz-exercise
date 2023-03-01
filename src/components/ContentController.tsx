import { useState } from "react";
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
import Page from "./inputs/page";
import Select from "./inputs/select";
import TextDisplay from "./inputs/textDisplay";
import TextInput from "./inputs/textInput";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCalendar, faCheckSquare, faFont, faList } from '@fortawesome/free-solid-svg-icons'

export default function ContentController({ editContent }: any) {
	const [editingContent, setEditingContent] = useState<boolean>(false);
	const b1types = [
		{
			title: "Text Display",
			description: "Add a text display to the mockup",
			field: "text-display",
			icon: <GrList />,
		},
		{
			title: "Text Input",
			description: "Add an input field to the mockup",
			field: "input",
			icon: <GrFormEdit />,
		},
		{
			title: "Date Picker",
			description: "Add a date picker to the mockup",
			field: "date-picker",
			icon: <GrCalendar />,
		},
		{
			title: "Select",
			description: "Add a dropdown menu to the mockup",
			field: "select",
			icon: <GrCheckbox />,
		},
		{
			title: "Button",
			description: "Add a button to the mockup",
			field: "button",
			icon: <GrAppsRounded />,
		},
		{
			title: "Page",
			description: "Add an page to the mockup",
			field: "page",
			icon: <GrDocumentText />,
		},
	];
	const [selected, setSelected] = useState("");

	return (
		<div>
			<div className='flex flex-row justify-end'>
				<button
					onClick={() => {
						if (selected.length > 0) {
							setSelected("");
						} else {
							setEditingContent(!editingContent);
						}
					}}
					className='border-2 border-gray-200 bg-white text-gray-700 hover:border-slate-500 hover:bg-slate-500 hover:text-white px-4 py-2 rounded-md flex items-center justify-start space-x-2 text-xs'
				>
					{selected.length === 0
						? editingContent
							? "Cancel"
							: "Edit Content"
						: "Go Back"}
				</button>
			</div>
			<div>
				{editingContent && (
					<div className='shadow-md rounded-md mt-5 p-5'>
						{selected.length === 0 && (
							<div className='grid grid-cols-2 gap-4'>
								{b1types.map(function (item, index) {
									return (
										<button
											key={index}
											onClick={() => {
												setSelected(item.field);
											}}
											className='border-2 border-gray-200 bg-white text-gray-700 hover:border-slate-500 hover:bg-slate-500 hover:text-white px-4 py-2 rounded-md flex items-center justify-start space-x-2'
										>
											<div className='flex flex-row justify-between w-full'>
												<>{item.icon}</>
												<div>
													<div className='font-medium text-right'>
														{item.title}
													</div>
													<div className='text-sm'>{item.description}</div>
												</div>
											</div>
										</button>
									);
								})}
							</div>
						)}
						{selected === "input" && (
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
					</div>
				)}
			</div>
		</div>
	);
}
