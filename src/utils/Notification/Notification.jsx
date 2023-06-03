import { Container, Text } from "./Notification.styled"

export const Notification = ({text, type}) => {

    return (
        <Container type={type}>
            <Text type={type}>{text}</Text>
        </Container>
    )
}