import PreviewTreeNode from "./PreviewTreeNode";

export default function PreviewTree({ root }: any) {
	return (
		<div className='bg-white rounded-md shadow-lg m-3 p-3'>
			<h1 className='text-3xl font-bold'>Previewing Tree</h1>
			<div className='mt-5'>
				<PreviewTreeNode node={root} index={0} />
			</div>
		</div>
	);
}
