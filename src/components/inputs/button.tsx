import { useState } from "react";

export default function Button({ editContent }: any) {
	const [label, setLabel] = useState("Click Me");

	return (
		<div>
			<form>
				<label className='block mb-2 text-gray-600 text-sm font-medium'>
					Edit Button Label
				</label>
				<input
					type='text'
					className='w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:border-gray-400'
					placeholder='An action...'
					onChange={(e) => {
						setLabel(e.target.value);
					}}
					required
				/>
			</form>
			<button
				onClick={() => {
					editContent({ type: "button", label });
				}}
				className='mt-4 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600'
			>
				Save Content
			</button>
		</div>
	);
}
