import React,{Component} from 'react';
import axios from 'axios';

export default class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    componentDidMount() {
        axios.get('/getHello')
        .then(res => this.setState({
            text: res.data.sayHi
        }))
        .catch(err => console.log(err));
    }
    render() {
        return <h2>{this.state.text}</h2>;
    }
}