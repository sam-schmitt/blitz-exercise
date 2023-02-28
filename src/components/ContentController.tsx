import { useState } from "react";
import DatePicker from "./inputs/datePicker";
import Select from "./inputs/select";
import TextDisplay from "./inputs/textDisplay";
import TextInput from "./inputs/textInput";

function B1() {
	const [selected, setSelected] = useState("");
	const types = [
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
			{types.map(function (item, index) {
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
			{selected === "input" && <TextInput />}
			{selected === "select" && <Select />}
			{selected === "text-display" && <TextDisplay />}
			{selected === "date-picker" && <DatePicker />}
		</div>
	);
}

export default function ContentController({ contentType }: any) {
	return (
		<div className='m-5 p-5 shadow-md rounded-md'>
			<h1 className='text-3xl font-bold'>Content Controller</h1>
			<p>Selected: {contentType}</p>
			{contentType === "B1" && <B1 />}
		</div>
	);
}
