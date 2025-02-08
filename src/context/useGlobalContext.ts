import { useContext } from "react";
import GlobalContext, { GlobalContextType } from "./GlobalContext";

export const useGlobalContext = (): GlobalContextType => {
	const context = useContext(GlobalContext);
	if (!context) {
		throw new Error(
			"useGlobalContext must be used within a GlobalContextProvider"
		);
	}
	return context;
};
