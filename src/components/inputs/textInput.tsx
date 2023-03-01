import { useState } from "react";

export default function TextInput({ editContent }: any) {
	const [placeholder, setPlaceholder] = useState("John");
	const [label, setLabel] = useState("Name");

	return (
		<div>
			<form>
				<label className='block mb-2 text-sm font-medium'>Edit Label</label>
				<input
					type='text'
					className='bg-slate-300 p-3 rounded-md'
					placeholder='Something formal...'
					onChange={(e) => {
						setLabel(e.target.value);
					}}
					required
				/>
				<label className='block mb-2 text-sm font-medium'>
					Edit Placeholder
				</label>
				<input
					type='text'
					className='bg-slate-300 p-3 rounded-md'
					placeholder='Something familiar...'
					required
					onChange={(e) => {
						setPlaceholder(e.target.value);
					}}
				/>
			</form>

			<button
				onClick={() => {
					editContent({ type: "text-input", placeholder, label });
				}}
				className='  text-white bg-slate-500 p-2 rounded-lg m-1'
			>
				Save Content
			</button>
		</div>
	);
}
