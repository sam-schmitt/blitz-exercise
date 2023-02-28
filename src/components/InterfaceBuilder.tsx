import { useState } from "react";
import ContentController from "./ContentController";
import Tree from "./Tree";

export default function InterfaceBuilder() {
	const [content, setContent] = useState(null);
	const [addingContent, setAddingContent] = useState(false);
	const [selectedType, setSelectedType] = useState<string>("");

	const contentTypes = [
		{
			title: "Temporal",
			description: "Editable components linked to the current page",
			types: [
				{
					title: "B1",
					description: "A basic component or element",
					types: ["input", "select", "text-display", "date-picker"],
				},
				{
					title: "B2",
					description: "A composed component of basic elements",
				},
			],
		},
		{
			title: "References",
			description:
				"These ones are not editable in the current page/component and can be reused in multiple place. When edited (in their own editor) the modifications impact the pages/components where they are used.",
			types: [
				{
					title: "R1",
					description: "A reference to a predefined basic component",
				},
				{
					title: "R2",
					description: "A reference to an existing composed component",
				},
				{
					title: "R3",
					description: "A reference to another page or frame",
				},
			],
		},
	];

	return (
		<div className='bg-white rounded-md shadow-lg m-5 p-5'>
			<h1 className='text-3xl font-bold'>Interface Builder</h1>
			<Tree content={content} isIB />
			<button
				onClick={() => {
					setAddingContent(!addingContent);
					setSelectedType("");
				}}
				className='  text-white bg-slate-500 p-2 rounded-lg m-1'
			>
				{!addingContent ? "Add Content" : "Cancel"}
			</button>
			{addingContent && selectedType.length === 0 && (
				<div className='m-5 p-5 shadow-md'>
					{contentTypes.map(function (item, index) {
						return (
							<div className='m-5 p-5 shadow-md rounded-md'>
								<p className='text-lg font-bold'>{item.title}</p>
								<p>{item.description}</p>
								{item.types.map(function (i, idx) {
									return (
										<div className='m-5 p-5 shadow-md rounded-md'>
											<p className='text-lg font-bold'>{i.title}</p>
											<p>{i.description}</p>
											<div className='flex justify-end'>
												<button
													onClick={() => {
														setSelectedType(i.title);
													}}
													className='  text-white bg-slate-500 p-2 rounded-lg m-1'
												>
													Select
												</button>
											</div>
											<div className='flex flex-col'>
												{i.types &&
													i.types.map(function (type) {
														return <i>{type}</i>;
													})}
											</div>
										</div>
									);
								})}
							</div>
						);
					})}
				</div>
			)}
			{selectedType.length > 0 && (
				<ContentController
					contentType={selectedType}
					contentTypes={contentTypes}
					content={content}
					setContent={setContent}
				/>
			)}
		</div>
	);
}
