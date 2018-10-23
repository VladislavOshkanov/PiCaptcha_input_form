import React from "react"
import {Button, ButtonToolbar} from "react-bootstrap"

export default function OptionsPanel(props) {
    return <ButtonToolbar>
        <Button bsStyle="warning" onClick={props.onRefreshClick}>
            Refresh word
        </Button>
        <Button bsStyle="success" onClick={props.onSubmitClick}>
            Submit
        </Button>
    </ButtonToolbar>
}