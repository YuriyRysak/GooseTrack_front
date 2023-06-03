import { useContext } from "react"
import { Container, Text } from "./Notification.styled"
import { NotificationContext } from "helpers/notification"

export const Notification = ({text, type}) => {

    const isVisible = useContext(NotificationContext).isVisible;

    if(isVisible) {
        return (
            <Container type={type}>
                <Text type={type}>{text}</Text>
            </Container>
        )
    };
    
}