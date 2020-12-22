import React, {Component} from 'react';
import axios from 'axios';
import PostComponent from './Api-Project/PostComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

componentDidMount() {
  axios.get('http://localhost:3002/', {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })
    .then(res => {
      this.setState({posts: res.data})
    })
}

  render() {
    let lists = this.state.posts.map(post => {
    let li = (<PostComponent UserId={post.userId} Id={post.id} Title={post.title} Body={post.body} />);
      return li;
    })
    console.log('li', lists);
    console.log('state: ', this.state);
  return (
    <div className="App">
      <ul>
      {lists}
      </ul>
    </div>
  );
}
}

export default App;
