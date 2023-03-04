export default function TextInput({ content }: any) {
	return (
		<div className='flex flex-col items-center'>
			<div className='flex flex-col'>
				<label className='text-sm font-medium'>{content.label}</label>
				<input
					type='text'
					className='px-3 py-2 rounded-md bg-slate-300 mt-2'
					placeholder={content.placeholder}
					required
				/>
			</div>
		</div>
	);
}
