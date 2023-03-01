import ContentController from "@/components/ContentController";
import Tree from "@/components/Tree";
import Header from "@/core/header";

export default function InterfaceBuilderPage() {
	return (
		<div>
			<Header />
			<Tree ContentController={ContentController} />
		</div>
	);
}
