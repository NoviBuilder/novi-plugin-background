import ColorStore from "../ColorStore";
import Types from "../Types";

const React = novi.react.React;
const Component = novi.react.Component;
const ToolColor = novi.ui.toolColor;
const RadioGroup = novi.ui.radioGroup;
const ToolGradient = novi.ui.toolGradient;
const Language = novi.language;


export default class Body extends Component {
    constructor(props) {
        super();

        let gradient = ColorStore.getGradient() || {angle: 45, colorStopList:[{color: "#0fa4f7"},{color: "#01edf7"}], original: "linear-gradient(45deg, #0fa4f7, #01edf7)"};
        let color = ColorStore.getColor() || "#109DF7";
        let type = ColorStore.getType();
        if (type === Types.GRADIENT) novi.editor.setBodyHeight(274);
        this.state = {
            type,
            gradient,
            color,
            initData: {
              type,
              gradient,
              color
            },
            element: props.element
        };
        this.messages = Language.getDataByKey("novi-plugin-background");

        this.renderColorFields = this.renderColorFields.bind(this);
        this.renderGradientFields = this.renderGradientFields.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);
        this.onGradientChange = this.onGradientChange.bind(this);
        this.onColorChange = this.onColorChange.bind(this);


        this.options = [
            {
                label: this.messages.editor.body.colorOption,
                value: "color"
            },
            {
                label: this.messages.editor.body.gradientOption,
                value: "gradient"
            }
        ];
        this.style = `
            .novi-background-wrap{
                padding: 16px 12px 0;
                display: flex;
                flex-direction: column;
                color: #6E778A;
                box-sizing: border-box;
            }
            .novi-gradient-tool-wrap{
                -webkit-animation: fadeIn 0.3s forwards;
                animation: fadeIn 0.3s forwards;
            }
            
            @-webkit-keyframes fadeIn {
                from {opacity: 0;}
                to {opacity: 1;}
            } 
            
            @keyframes fadeIn {
            from {opacity: 0;}
                to {opacity: 1;}
            }
            
            
        `;
        this.updateType = false;
    }

    componentDidUpdate(){
        if (!this.updateType) return;

        novi.editor.setBodyHeight(this.state.type === Types.GRADIENT ?  274 : 169);
        this.updateType = false;
    }

    renderColorFields() {
        if (this.state.type === Types.GRADIENT) return null;
        return (
            <div>
                <p className="novi-label" style={{"margin": "20px 0 0 5px"}}>
                    {this.messages.editor.body.colorPlaceholder}
                </p>
                <ToolColor
                    direction={`bottom-left`}
                    onChange={this.onColorChange}
                    value={this.state.color}
                />
            </div>
        )

    }

    renderGradientFields() {
        if (this.state.type !== Types.GRADIENT) return null;

        return (
            <div style={{marginTop: 20}} className="novi-gradient-tool-wrap">
                <ToolGradient value={this.state.gradient} onChange={this.onGradientChange} width={290} height={110}/>
            </div>
        );
    }

    onGradientChange(data){
        ColorStore.setColor(data.original);
        ColorStore.setGradient(data);
        ColorStore.setGradientString(data.original);
        this.setState({
            gradient: data
        })
    }

    render() {
        return (
            <div
                className="novi-background-wrap">
                <style>{this.style}</style>
                <p className="novi-label" style={{"marginTop": 0, marginLeft: 5}}>
                    {this.messages.editor.body.bgFillType}
                </p>
                <RadioGroup options={this.options} value={this.state.type} onChange={this.onTypeChange}/>

                {this.renderColorFields()}
                {this.renderGradientFields()}
            </div>
        )
    }

    onColorChange(value) {
        ColorStore.setColor(value);
        this.setState({
            color: value
        })
    }

    onTypeChange(value){
        this.updateType = true;
        this.setState({
            type: value
        })
    }
}