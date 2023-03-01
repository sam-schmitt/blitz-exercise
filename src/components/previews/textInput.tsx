import { useState } from "react";

export default function TextInput({ content }: any) {
	return (
		<div>
			<form>
				<label className='block mb-2 text-sm font-medium'>
					{content.label}
				</label>
				<input
					type='text'
					className='bg-slate-300 p-3 rounded-md'
					placeholder={content.placeholder}
					required
				/>
			</form>
		</div>
	);
}
