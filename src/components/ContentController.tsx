import { useState } from "react";
import DatePicker from "./inputs/datePicker";
import Select from "./inputs/select";
import TextDisplay from "./inputs/textDisplay";
import TextInput from "./inputs/textInput";

function B1({ editContent }: any) {
	const [selected, setSelected] = useState("");

	const b1types = [
		{
			title: "Input",
			field: "input",
		},
		{
			title: "Select",
			field: "select",
		},
		{
			title: "Text Display",
			field: "text-display",
		},
		{
			title: "Date Picker",
			field: "date-picker",
		},
	];
	return (
		<div className='m-5 p-5 shadow-md rounded-md'>
			{b1types.map(function (item, index) {
				return (
					<button
						onClick={() => {
							console.log("clicked");
							setSelected(item.field);
						}}
						className='  text-white bg-slate-500 p-2 rounded-lg m-1'
					>
						{item.title}
					</button>
				);
			})}
			{selected === "input" && <TextInput editContent={editContent} />}
			{selected === "select" && <Select editContent={editContent} />}
			{selected === "text-display" && <TextDisplay editContent={editContent} />}
			{selected === "date-picker" && <DatePicker editContent={editContent} />}
		</div>
	);
}

export default function ContentController({ editContent }: any) {
	const [contentType, setContentType] = useState<string>("");
	const [editingContent, setEditingContent] = useState<boolean>(false);
	const contentTypes = [
		{
			title: "Temporal",
			description: "Editable components linked to the current page",
			types: [
				{
					title: "B1",
					description: "A basic component or element",
					types: ["input", "select", "text-display", "date-picker"],
				},
				{
					title: "B2",
					description: "A composed component of basic elements",
				},
			],
		},
		{
			title: "References",
			description:
				"These ones are not editable in the current page/component and can be reused in multiple place. When edited (in their own editor) the modifications impact the pages/components where they are used.",
			types: [
				{
					title: "R1",
					description: "A reference to a predefined basic component",
				},
				{
					title: "R2",
					description: "A reference to an existing composed component",
				},
				{
					title: "R3",
					description: "A reference to another page or frame",
				},
			],
		},
	];
	return (
		<div className='m-5 p-5 shadow-md rounded-md'>
			<h1 className='text-3xl font-bold'>Content Controller</h1>
			<button
				onClick={() => {
					setEditingContent(!editingContent);
				}}
				className='  text-white bg-slate-500 p-2 rounded-lg m-1'
			>
				{editingContent ? "Stop Editing" : "Edit Content"}
			</button>
			{editingContent && (
				<>
					{contentType.length === 0 ? (
						<div className='m-5 p-5 shadow-md'>
							{contentTypes.map(function (item, index) {
								return (
									<div className='m-5 p-5 shadow-md rounded-md'>
										<p className='text-lg font-bold'>{item.title}</p>
										<p>{item.description}</p>
										{item.types.map(function (i, idx) {
											return (
												<div className='m-5 p-5 shadow-md rounded-md'>
													<p className='text-lg font-bold'>{i.title}</p>
													<p>{i.description}</p>
													<div className='flex justify-end'>
														<button
															onClick={() => {
																setContentType(i.title);
															}}
															className='  text-white bg-slate-500 p-2 rounded-lg m-1'
														>
															Select
														</button>
													</div>
													<div className='flex flex-col'>
														{i.types &&
															i.types.map(function (type) {
																return <i>{type}</i>;
															})}
													</div>
												</div>
											);
										})}
									</div>
								);
							})}
						</div>
					) : (
						<div>
							<button
								onClick={() => {
									setContentType("");
								}}
								className='  text-white bg-slate-500 p-2 rounded-lg m-1'
							>
								Go Back
							</button>
							<p>Selected: {contentType}</p>
							{contentType === "B1" && <B1 editContent={editContent} />}
						</div>
					)}
				</>
			)}
		</div>
	);
}
