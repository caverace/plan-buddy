import Board from "@/components/Board";

/**
 * BoardSelect.tsx
 *
 * The board selection page
 *
 * @returns {JSX.Element}
 */

export default function BoardSelect() {
	return (
		<div className="flex h-full">
			<h1>Board Selection</h1>
			<Board />
		</div>
	);
}
