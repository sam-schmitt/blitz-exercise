import ContentController from "@/components/ContentController";
import Tree from "@/components/Tree";
import Header from "@/core/header";

export default function InterfaceBuilderPage() {
	return (
		<div>
			<Header selected={"/interface-builder"} />
			<Tree ContentController={ContentController} />
		</div>
	);
}
