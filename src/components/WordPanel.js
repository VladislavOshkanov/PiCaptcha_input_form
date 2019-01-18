import React from "react"

export default function Drawer(props) {
    return <h3>
        Чтобы мы убедились, что вы не робот, нарисуйте: <br/>{props.word}
    </h3>
}