const React = novi.react.React;
const Component = novi.react.Component;
const ColorSwatch = novi.ui.colorSwatch;

import Types from "../Types";
import ColorStore from "../ColorStore";
import * as GradientUtils from "../GradientUtils";



export default class Trigger extends Component {
    constructor(props) {
        super();
        let element = props.element;
        let styles = window.getComputedStyle(element, null);
        let type, value, gradient = null;
        type = Types.COLOR;
        value = styles.backgroundColor;

        if (styles.backgroundImage !== "none"){
            gradient = GradientUtils.parseGradient(styles.backgroundImage);
            if (gradient){
                type = Types.GRADIENT;
                for (let i = 0; i < gradient.colorStopList.length;i++){
                    if (gradient.colorStopList[i].position && gradient.colorStopList[i].position.indexOf('px') > -1){
                        gradient.colorStopList[i].position = Math.round(parseInt(gradient.colorStopList[i].position.replace('px', '')) / element.offsetWidth * 100) + "%";
                    }
                }
                value = styles.backgroundImage;
                ColorStore.setGradient(gradient);
                ColorStore.setGradientString(styles.backgroundImage);
                ColorStore.setColor(null);
            }else{
                ColorStore.setGradient(null);
                ColorStore.setGradientString(null);
            }
        }else if (value === "rgba(0, 0, 0, 0)"){
            let loopElement = element, loopStyles;
            while(loopElement && novi.utils.dom.isElementNode(loopElement)){
                if (novi.element.hasStaticReference(loopElement)){
                    loopStyles = window.getComputedStyle(loopElement, null);
                    if (loopStyles.backgroundColor !== "rgba(0, 0, 0, 0)"){
                        value = loopStyles.backgroundColor;
                        break;
                    }
                }
                loopElement = loopElement.parentNode;
            }
        }


        ColorStore.setType(type);

        if (type === Types.COLOR) {
            ColorStore.setColor(value);
            ColorStore.setGradient(null);
            ColorStore.setGradientString(null);
        }


        this.state = {
            color: value
        };
    }

    render() {
        return (
            <div>
                <ColorSwatch color={this.state.color}/>
            </div>
        )
    }
}