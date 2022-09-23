import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClickMenu = () => setIsClicked(!isClicked);
    
    return (
        <AppContext.Provider value={{
            isClicked,
            handleClickMenu,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider }
export default AppContext;