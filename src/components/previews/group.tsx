export default function Group({ content }: any) {
	return (
		<div>
			<p className='text-lg font-semibold opacity-10'>{content.label}</p>
		</div>
	);
}
