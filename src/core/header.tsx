import { useRouter } from "next/router";

export default function Header() {
	const router = useRouter();
	const buttons = [
		{ title: "Home", page: "/" },
		{ title: "Trees", page: "/trees" },
		{ title: "Interface Builder", page: "/interface-builder" },
	];
	return (
		<div className='bg-white rounded-md shadow-md m-5 p-2'>
			<h1 className='text-lg font-bold'>Navigation</h1>
			<div className='flex flex-row'>
				{buttons.map(function (item, index) {
					return (
						<button
							className='p-1 rounded-lg m-1 border-2 flex flex-row items-center  text-sm'
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
