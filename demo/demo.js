/**
 * Created by FlyingAnt on 4/29/15.
 */
var React = require('react');
var Loading = require('../component.react');

var DemoApp = React.createClass({

    getInitialState() {
        return {status: "show"}
    },

    render: function(){

        var style32 = {
            position: "relative", //important
            width: 300,
            height: 200,
            border: "1px solid"
        };
        var style13 = {
            position: "relative",
            width: 100,
            height: 300,
            border: "1px solid"
        };
        var style22 = {
            position: "relative",
            width: 200,
            height: 200,
            border: "1px solid"
        };
        var loading = <Loading status={"show"} loadingText={"Waiting"} transparent={30}/>;
        var noloading = <Loading status={"hide"}/>;
        return (
            <div>
                <h1>React Loading and Overlay</h1>
                <br/>
                <i>Hint: the 'parent' component must have the 'position: relative' or 'position: absolute'.</i>
                <p>
                    <button onClick={this.toggleLoading}>Toggle Loading</button>
                    <button onClick={this.showLoading}>Show Loading</button>
                    <button onClick={this.hideLoading}>Hide Loading</button>
                </p>

                <hr/>

                <div className='container'>
                    <div className='component' style={style13}>
                        <label>100*300</label>
                        {loading}
                    </div>
                    <div className='component' style={style22}>
                        <label>200*200</label>
                        {loading}
                    </div>

                    <div className='component' style={style32}>
                        <label>300*200</label>
                        <Loading status={this.state.status} loadingText={"Waiting"} transparent={50}/>
                    </div>

                    <div className='component' style={style32}>
                        <label>300*200 - External spinner image</label>
                        <Loading status={this.state.status} spinnerImgPath={"http://enticevod.com/zh/images/loading_big.gif"}/>
                    </div>

                </div>

                <hr/>

                <div className='container'>
                    <div className='component' style={style22}>
                        <label>200*200 Transparent(10%)</label>
                        <Loading status={this.state.status} loadingText={"Loading"} transparent={10}/>;
                    </div>
                    <div className='component' style={style22}>
                        <label>200*200 Transparent(20%)</label>
                        <Loading status={this.state.status} loadingText={"Loading"} transparent={20}/>;
                    </div>
                    <div className='component' style={style22}>
                        <label>200*200 Transparent(30%)</label>
                        <Loading status={this.state.status} loadingText={"Loading"} transparent={30}/>;
                    </div>
                    <div className='component' style={style22}>
                        <label>200*200 Transparent(40%)</label>
                        <Loading status={this.state.status} loadingText={"Loading"} transparent={40}/>;
                    </div>
                    <div className='component' style={style22}>
                        <label>200*200 Transparent(50%)</label>
                        <Loading status={this.state.status} loadingText={"Loading"} transparent={50}/>;
                    </div>
                    <div className='component' style={style22}>
                        <label>200*200 Transparent(60%)</label>
                        <Loading status={this.state.status} loadingText={"Loading"} transparent={60}/>;
                    </div>
                    <div className='component' style={style22}>
                        <label>200*200 Transparent(70%)</label>
                        <Loading status={this.state.status} loadingText={"Loading"} transparent={70}/>;
                    </div>
                    <div className='component' style={style22}>
                        <label>200*200 Transparent(80%)</label>
                        <Loading status={this.state.status} loadingText={"Loading"} transparent={80}/>;
                    </div>
                    <div className='component' style={style22}>
                        <label>200*200Transparent(90%)</label>
                        <Loading status={this.state.status} loadingText={"Loading"} transparent={90}/>;
                    </div>
                    <div className='component' style={style22}>
                        <label>200*200 no loading overlay</label>
                        {noloading}
                    </div>
                </div>

                <div className='container'>

                </div>
            </div>
        )
    },

    toggleLoading: function(){
        var status;
        if(this.state.status === "show"){
            status = {status: "hide"};
        } else {
            status = {status: "show"};
        }
        this.setState(status);
    },

    showLoading: function(){
        this.setState({status: "show"});
    },

    hideLoading: function(){
        this.setState({status: "hide"});
    }
})

document.addEventListener("DOMContentLoaded", () => {
    React.render(<DemoApp/>, document.getElementById("demo"))
});
