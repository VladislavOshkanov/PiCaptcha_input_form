import React from "react"

import Drawer from "../components/Drawer.js"
import OptionsPanel from "../components/OptionsPanel.js"
import WordPanel from "../components/WordPanel.js"

import "./InputFormLayout.css"

export default function InputFormLayout(props) {
    return <div id="input-form-layout-container">
        <div className="left-container">
            <WordPanel word={props.word}/>
        </div>
        <div className="central-container">
            <Drawer reference = {props.reference}/>
        </div>
        <div className="right-container">
            <OptionsPanel
                onSubmitClick={() => {
                    props.onSubmitClick()
                }}
                onRefreshClick={() => {
                    props.onRefresh()
                }}
            />
        </div>
    </div>
}