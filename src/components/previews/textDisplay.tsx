export default function TextDisplay({ content }: any) {
	return (
		<div>
			<p className='text-lg font-semibold'>{content.label}</p>
		</div>
	);
}
