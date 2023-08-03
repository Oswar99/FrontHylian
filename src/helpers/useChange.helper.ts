class UseChange {
    private states: any;

    constructor(values: any) {
        this.states = values;
    };

    handleChange(event:any){
        this.states = {
            ...this.states,
            [event.target.name]: event.target.value
        }
    };

    updateValues(values:any){
        this.states = values
    };

    getValues(){
        return this.states
    }
};

export default UseChange;