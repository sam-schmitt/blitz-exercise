export default function TextDisplay({ content }: any) {
	return (
		<div>
			<p className='font-semibold'>{content.label}</p>
		</div>
	);
}
