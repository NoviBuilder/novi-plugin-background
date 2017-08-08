import Types from "./Types";

class ColorStore{
    constructor(){
        this.type = Types.COLOR;
        this.color = null;
        this.gradient = null;
        this.gradientString = null;
    }

    getColor(){
        return this.color;
    }

    setColor(color){
        this.color = color;
    }

    getType(){
        return this.type;
    }

    setType(type){
        this.type = type;
    }

    getGradientString(){
        return this.gradientString;
    }

    setGradientString(gradient){
        this.gradientString = gradient;
    }

    setGradient(gradient){
        this.gradient = gradient;
    }

    getGradient(){
        return this.gradient;
    }
}

const colorStore = new ColorStore();
export default colorStore;