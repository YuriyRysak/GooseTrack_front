const { createContext, useState } = require("react");

export const NotificationContext = createContext();

export const NotificationProvider = ({children}) => {

    // const [isVisible, setIsVisible] = useState(true);

    const isVisible = true;
    const text = 'Notification';
    const type = '';

    return(
        <NotificationContext.Provider value={{isVisible, text, type}}>
            {children}
        </NotificationContext.Provider>
    )
};

export const notification = {
    

};