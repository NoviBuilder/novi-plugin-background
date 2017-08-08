import ColorStore from "../ColorStore";
import Types from "../Types";
const React = novi.react.React;
const Component = novi.react.Component;
const ColorSwatch = novi.ui.colorSwatch;


export default class Header extends Component {
    constructor(props) {
        super();

        let type = ColorStore.getType();
        this.state = {
            value: type === Types.COLOR ? ColorStore.getColor() : ColorStore.getGradientString()
        }
    }

    render() {
        return (
            <div style={{display: "flex"}}>
                <ColorSwatch color={this.state.value}/>
                <span>Change Background Color</span>
            </div>
        )
    }
}