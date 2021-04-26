'use strict';

//const e = React.createElement;

class ClickCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

	increment() {
        this.setState({
        count: this.state.count+1});
    }

    render() {
    return <button onClick={this.increment}> I've been clicked {this.state.count} times! </button>
    }
}

	
//const domContainer = document.querySelector('#container');
ReactDOM.render(e(ClickCounter), domContainer);