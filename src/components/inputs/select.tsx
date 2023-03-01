import { useState } from "react";

export default function Select({ editContent }: any) {
	const [label, setLabel] = useState("Agree to the terms");

	return (
		<div>
			<form>
				<label className='block mb-2 text-sm font-medium'>Edit Label</label>
				<input
					type='text'
					className='bg-slate-300 p-3 rounded-md'
					placeholder='What are they selecting?'
					onChange={(e) => {
						setLabel(e.target.value);
					}}
					required
				/>
			</form>

			<button
				onClick={() => {
					editContent({ type: "select", label });
				}}
				className='  text-white bg-slate-500 p-2 rounded-lg m-1'
			>
				Save Content
			</button>
		</div>
	);
}
