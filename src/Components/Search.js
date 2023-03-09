import { React, useState } from 'react'
import data from "./questions.json"

function search(props) {
    return (
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default search

