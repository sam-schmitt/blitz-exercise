import { useState } from "react";

export default function TextDisplay({ editContent }: any) {
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
			</form>
			<i>Preview</i>
			<p className='font-semibold'>{label}</p>
			<button
				onClick={() => {
					editContent({ type: "text-display", label });
				}}
				className='  text-white bg-slate-500 p-2 rounded-lg m-1'
			>
				Save Content
			</button>
		</div>
	);
}
