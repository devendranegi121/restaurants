import React from 'react';
//import logo from './logo.svg';
import Header from './components/header';
import Footer from './components/footer';
import Posts from './components/posts'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [{ categorys: "" }],
      searchInput: "",
      filterData: [],
    }
    this.searchItems = this.searchItems.bind(this);


  }
  componentDidMount() {

    fetch('https://api.myjson.com/bins/e8sdg')
      .then(response => response.json())
      .then(json => {
        this.setState({ post: json[0], filterData: json[0].categorys }, function () {
        })
      })
  }

  searchItems(evt) {

    this.setState({
      searchInput: evt.target.value.toLowerCase()
    }, function () {
       
    });

  }

  render() {

    return (
      <div className="App">
        <a className="sr-only sr-only-focusable" href="#content">Skip to main content</a>
        <Header className="navs" categorys={this.state.post.categorys} brandName="MacD">
        </Header>
        <main className="container" id="content">
          <div className="input-group mt-3">
            <input value={this.state.searchInput} onChange={this.searchItems} className="form-control" placeholder="Search" aria-label="type itme name here" aria-describedby="basic-addon2" />

            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">Search</span>
            </div>
          </div>

          <Posts categorys={this.state.filterData} searchDataItem={this.state.searchInput}></Posts>
        </main>
        <Footer className="navs" categorys={this.state.post.categorys} brandName="MacD" />
      </div>
    );
  }
}
export default App;
