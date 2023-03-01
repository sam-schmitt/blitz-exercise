import { useState } from "react";

export default function TextInput({ editContent }: any) {
	const [placeholder, setPlaceholder] = useState("John");
	const [label, setLabel] = useState("Name");

	return (
		<div>
			<form>
				<label className='block mb-2 text-gray-600 text-sm font-medium'>
					Label
				</label>
				<input
					type='text'
					className='w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:border-gray-400'
					placeholder='Something formal...'
					onChange={(e) => {
						setLabel(e.target.value);
					}}
					required
				/>
				<label className='block mt-4 mb-2 text-gray-600 text-sm font-medium'>
					Placeholder
				</label>
				<input
					type='text'
					className='w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:border-gray-400'
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
				className='mt-4 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600'
			>
				Save Content
			</button>
		</div>
	);
}
