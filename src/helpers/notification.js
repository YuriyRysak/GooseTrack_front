const { createContext, useState } = require("react");

export const NotificationContext = createContext();

export const NotificationProvider = ({children}) => {

    const [isVisible, setIsVisible] = useState(true);

    return(
        <NotificationContext.Provider value={{isVisible, setIsVisible}}>
            {children}
        </NotificationContext.Provider>
    )
};

export const notification = {
    

};