const { createContext, useContext, useState } = require("react");

export const NotificationContext = createContext();

export const NotificationProvider = ({children}) => {

    const [isVisible, setIsVisible] = useState(false);
    const [text, setText] = useState('Notification');
    const [type, setType] = useState('success');

    const changeContext = {
        text: setText,
        type: setType,
        visibility: setIsVisible
    }

    return(
        <NotificationContext.Provider value={{isVisible, text, type, changeContext}}>
            {children}
        </NotificationContext.Provider>
    )
};

export const useNotification = () => useContext(NotificationContext).changeContext;

export const notification = (changeContext, type='success', text) => {
    const notificationTypes = ['success', 'fail', 'info'];
    const correctType = notificationTypes.some(item => item === type);
    if(!correctType) {
        console.log("Use one of type arguments for your notification: ['success', 'fail', 'info']");
        return;
    };

    changeContext.type(type)
    changeContext.text(text);
    changeContext.visibility(true);

    // console.log(a);
   /* return (`
    notificationText = useContext(NotificationContext).text;
    console.log(notificationText);
`); */
}