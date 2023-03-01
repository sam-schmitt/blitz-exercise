export default function DatePicker({ content }: any) {
	return (
		<div className='flex flex-col'>
			<label className='text-sm font-medium'>{content.label}</label>
			<input
				type='date'
				className='px-3 py-2 rounded-md bg-slate-300 mt-2'
				required
			/>
		</div>
	);
}
