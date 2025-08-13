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
export const AppContext = createContext<AppContextType | undefined>(undefined);

/**
 * Provider component for AppContext
 *
 * Supplies all the database states to its children.
 *
 * @param {object} props
 * @param {ReactNode} props.children - Components that should have context.
 * @returns {JSX.Element} The context wrapper
 */
export const AppProvider = ({ children }: { children: ReactNode }) => {
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
