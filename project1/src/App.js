import "./App.css";
import react from "react";
import { Cardlist } from "./components/cardlist";
import { Searchbox } from "./components/search-box";
class App extends react.Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchfieldvalue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchfieldvalue: e.target.value });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monster: users }));
  }

  render() {
    const { monster, searchfieldvalue } = this.state;
    const filteredMonsters = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchfieldvalue.toLowerCase())
    );
    return (
      <div className="App">
        <h1>MONSTER WORLD</h1>
        <Searchbox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />

        <Cardlist monster={filteredMonsters}></Cardlist>
      </div>
    );
  }
}

export default App;
