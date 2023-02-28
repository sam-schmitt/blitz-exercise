import { useState } from "react";

export default function DatePicker() {
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
			<form className='flex flex-row justify-between'>
				<label className='block mb-2 text-sm font-medium'>{label}</label>
				<input type='date' className='bg-slate-300 p-3 rounded-md' required />
			</form>
		</div>
	);
}
