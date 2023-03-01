export default function Select({ content }: any) {
	return (
		<div>
			<form className='flex flex-row justify-between'>
				<label className='block mb-2 text-sm font-medium'>
					{content.label}
				</label>
				<input
					type='checkbox'
					className='bg-slate-300 p-3 rounded-md'
					required
				/>
			</form>
		</div>
	);
}
