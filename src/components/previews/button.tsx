export default function Button({ content }: any) {
	return (
		<div className='flex flex-col'>
			<button className='mt-4 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600'>
				{content.label}
			</button>
		</div>
	);
}
