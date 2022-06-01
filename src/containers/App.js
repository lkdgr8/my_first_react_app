import react, { Component } from "react";
import RobotList from '../components/RobotList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll.js'

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
           .then(response => response.json())
           .then(users => {this.setState({ robots: users})})
    }
    on_search_change = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render() {
        const { robots, searchfield } = this.state;
        const filteredrobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return (
            <div className="tc">
                <h1 className="coolfont">ROBOFRIENDS</h1>
                <SearchBox searchChange={this.on_search_change}/>
                <Scroll>
                  <RobotList robots={filteredrobots} />
                </ Scroll>
            </div>
        );
    }
}

export default App;