import React, { Component } from 'react';
// import { functions } from '../plugins/firebase'
import firebaseApp from '../plugins/firebase';

//firebase database
const firebaseDb = firebaseApp.database();
const commentsRef = firebaseDb.ref('data')

// functions
// const functions = firebase.functions();

class Comment extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }
  
  componentWillUnmount() {
    // firebase read off
    if (this.commentsRef) {
      this.commentsRef.off();
    }
  }

  componentDidMount(){
    // firebase read
    commentsRef.on("value", snapshot => {
      this.setState({
        comments: snapshot.val().comments
    });
    }).bind(this);
  }

  commentSubmitHandler = (event) => {
    event.preventDefault();
    console.log('the button has been clicked');

    // firebase
    commentsRef.once('value').then((snapshot) => {
      let comments = snapshot.val().comments || [];
      console.log(snapshot.val().comments);
      comments.push("test")

      let currentComments = {
        comments: comments
      }

      commentsRef.set(currentComments);      
    })

  }

  render() {
    return (
    <div>
      <h1>Comments from everyone !</h1>
      <button onClick={this.commentSubmitHandler}>コメント投稿</button>
      {this.state.comments.map((comment, index) => {
        return (
        <div key={index}>
          <p>{comment}</p>
        </div>);
      })}
    </div>
    )
  }
}

export default Comment;