import PreviewTreeNode from "./PreviewTreeNode";

export default function PreviewTree({ root }: any) {
	return (
		<div className='bg-white rounded-md shadow-lg m-5 p-5'>
			<h1 className='text-3xl font-bold'>Previewing Tree</h1>
			<PreviewTreeNode node={root} index={0} />
		</div>
	);
}
