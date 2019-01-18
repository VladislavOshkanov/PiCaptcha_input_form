import React from "react"
import {Button, ButtonToolbar} from "react-bootstrap"

export default function OptionsPanel(props) {
    return <ButtonToolbar>
        <Button bsStyle="warning" onClick={props.onRefreshClick}>
            Другое слово
        </Button>
        <Button bsStyle="success" onClick={props.onSubmitClick}>
            Проверить
        </Button>
    </ButtonToolbar>
}