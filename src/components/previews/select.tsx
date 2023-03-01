export default function Select({ content }: any) {
	return (
		<div className='flex justify-end items-center'>
			<label className='text-sm font-medium mr-5'>{content.label}</label>
			<input
				type='checkbox'
				className='px-3 py-2 rounded-md bg-slate-300 mt-2'
				required
			/>
		</div>
	);
}
