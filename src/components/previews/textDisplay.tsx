export default function TextDisplay({ content }: any) {
	return (
		<div className='flex flex-col items-center'>
			<p className='text-lg font-semibold'>{content.label}</p>
		</div>
	);
}
