import Trigger from "./editor/Trigger";
import Header from "./editor/Header";
import Body from "./editor/Body";
import Types from "./Types";
import ColorStore from "./ColorStore";

const React = novi.react.React;
const lodash = novi.utils.lodash;

const EditorItem = {
    trigger: <Trigger />,
    header: [<Header />],
    body: [<Body />],
    tooltip: "Change Background Color",
    closeIcon: "submit",
    title: "Change Background Color",
    width: 324,
    height: 169,
    onSubmit: onSubmit,
    submitOnBlur: false
};

export default EditorItem;

function onSubmit(headerStates, bodyStates){
    let state = bodyStates[0];
    let preventUpdate = true;
    if (state.type !== state.initData.type ) preventUpdate = false;

    switch (state.type){
        case Types.COLOR:
            if (preventUpdate && state.color !== state.initData.color) preventUpdate = false;

            if (!preventUpdate){
                novi.element.setInlineStyle(state.element, "background-color", state.color);
                state.element.style.backgroundColor = state.color;

                if (window.getComputedStyle(state.element).backgroundImage !== "none"){
                    novi.element.setInlineStyle(state.element, "background-image", "none");
                    state.element.style.backgroundImage = "none";
                }
            }

            break;
        case Types.GRADIENT:
            if (preventUpdate && !lodash.isEqual(state.gradient, state.initData.gradient)) preventUpdate = false;

            if (!preventUpdate) {
                novi.element.setInlineStyle(state.element, "background-image", state.gradient.original);
                state.element.style.backgroundImage = state.gradient.original;
            }
            break;
    }
}
