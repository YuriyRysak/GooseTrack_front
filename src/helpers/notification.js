const { createContext, useContext, useState } = require("react");

export const NotificationContext = createContext();

export const NotificationProvider = ({children}) => {

    // const [isVisible, setIsVisible] = useState(true);

    const [isVisible] = useState(true);
    const [text, setText] = useState('Notification');
    const [type] = useState('success');

    const changeContext = {
        text: setText
    }

    return(
        <NotificationContext.Provider value={{isVisible, text, type, changeContext}}>
            {children}
        </NotificationContext.Provider>
    )
};

export const useNotification = () => useContext(NotificationContext).changeContext;

const success = (a) => {
    a.text('New notification')
    // console.log(a);
   /* return (`
    notificationText = useContext(NotificationContext).text;
    console.log(notificationText);
`); */
}

export const notification = {
    success
};