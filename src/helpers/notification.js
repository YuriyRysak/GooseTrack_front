const { createContext, useState } = require("react");

const NotificationContext = createContext();

export const NotificationProvider = ({children}) => {

    const [isNotificationVisible, setIsNotificationVisible] = useState(false);

    return(
        <NotificationContext.Provider value={{isNotificationVisible, setIsNotificationVisible}}>
            {children}
        </NotificationContext.Provider>
    )
};

export const notification = {
    

};