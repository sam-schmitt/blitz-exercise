import { useRouter } from "next/router";

export default function Header({ selected }: any) {
	const router = useRouter();
	const buttons = [
		{ title: "Home", page: "/" },
		{ title: "Trees", page: "/trees" },
		{ title: "Interface Builder", page: "/interface-builder" },
		{ title: "READ ME", page: "/read-me" },
	];
	return (
		<div className='bg-white rounded-md shadow-md m-3 p-3'>
			<h1 className='text-lg font-bold'>Navigation</h1>
			<div className='flex flex-row'>
				{buttons.map(function (item, index) {
					return (
						<button
							className={`p-1 rounded-lg m-1 border-2 flex flex-row items-center  text-sm ${
								selected !== item.page ? "text-white bg-slate-500" : ""
							}`}
							onClick={() => {
								router.push(item.page);
							}}
						>
							{item.title}
						</button>
					);
				})}
			</div>
		</div>
	);
}
