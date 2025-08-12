/**
 * App.tsx
 *
 * The top level component that is used
 * to structure the app components.
 *
 * Created 12-8-25
 */

import HelloWorld from "./pages/HelloWorld";

// App component that structures the top-level components.
function App() {
	return (
		<div className="h-[100vh]">
			<HelloWorld />
		</div>
	);
}

export default App;
