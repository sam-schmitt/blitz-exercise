import PreviewController from "./PreviewController";
export default function PreviewTreeNode({ node, index }: any) {
	return (
		<div>
			{node.content && <PreviewController content={node.content} />}
			<div>
				{node.children.map(function (node: any, index: number) {
					return <PreviewTreeNode node={node} index={index} />;
				})}
			</div>
		</div>
	);
}
