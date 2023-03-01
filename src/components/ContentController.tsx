import { useState } from "react";
import DatePicker from "./inputs/datePicker";
import Select from "./inputs/select";
import TextDisplay from "./inputs/textDisplay";
import TextInput from "./inputs/textInput";

export default function ContentController({ editContent }: any) {
	const [editingContent, setEditingContent] = useState<boolean>(false);
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
	const [selected, setSelected] = useState("");

	return (
		<div>
			<button
				onClick={() => {
					setEditingContent(!editingContent);
				}}
				className='  text-white bg-slate-500 p-2 rounded-lg m-1'
			>
				{editingContent ? "Stop Editing" : "Edit Content"}
			</button>
			{editingContent && (
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
					{selected === "text-display" && (
						<TextDisplay editContent={editContent} />
					)}
					{selected === "date-picker" && (
						<DatePicker editContent={editContent} />
					)}
				</div>
			)}
		</div>
	);
}
