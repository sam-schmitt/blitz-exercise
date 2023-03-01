export default function Page({ content }: any) {
	return (
		<div>
			<p className='text-lg font-semibold text-center underline'>
				{content.label}
			</p>
		</div>
	);
}
