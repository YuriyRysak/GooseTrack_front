import { useState } from "react"

export const Notification = ({text, type}) => {

    return (
        <div type={type}>
            <p type={type}>{text}</p>
        </div>
    )
}