/**
 * AppContext.tsx
 *
 * Exports a react context that
 * provides database related states.
 *
 * Created 12-8-25
 */

import {
	createContext,
	useState,
	type Dispatch,
	type SetStateAction,
	type ReactNode,
} from "react";

// Defines the app context "value", which is a bunch of states.
type AppContextType = {
	// Boards
	boards: any;
	setBoards: Dispatch<SetStateAction<any>>;
};

// The context that will be used in the provider component, using the app context type.
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	// Create states to be provided to the app.
	// Boards
	const [boards, setBoards] = useState<any>();

	// Return the context component.
	return (
		<AppContext.Provider value={{ boards, setBoards }}>
			{children}
		</AppContext.Provider>
	);
};
