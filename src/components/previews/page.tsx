export default function Page({ content }: any) {
	return (
		<div className='flex flex-col '>
			<i>Page: </i>
			<p className='text-lg font-semibold underline'>{content.label}</p>
		</div>
	);
}
