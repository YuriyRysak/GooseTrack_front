const { createContext } = require("react");

export const NotificationContext = createContext();

export const NotificationProvider = ({children}) => {

    // const [isVisible, setIsVisible] = useState(true);

    const isVisible = true;
    const text = 'Notification';
    const type = 'success';

    return(
        <NotificationContext.Provider value={{isVisible, text, type}}>
            {children}
        </NotificationContext.Provider>
    )
};

const success = () => {
    console.log('Notification works');
}

export const notification = {
    success
};