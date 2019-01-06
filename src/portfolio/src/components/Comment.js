import React, { Component } from 'react';
import firebaseApp from '../plugins/firebase';
import CustomeButton from './ui/Buttom'; //material-ui
import CustomeTextField from './ui/TextField';

// firebase
const firebaseDb = firebaseApp.database();
const commentsRef = firebaseDb.ref('data')

// const functions = firebase.functions();  //cloud functions

class Comment extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      newComment: '',
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
    console.log(`new comment:${this.state.newComment}`);

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
    <section>
      <h2 className="section_header">Comments from everyone !</h2>
      <div className="comment_wrapper">
        {this.state.comments.map((comment, index) => {
          return (
          <div className="comment_item" key={index}>
            <div>{comment}</div>
          </div>);
        })}
      </div>
      <div className="comment_ui_wrapper">
        <CustomeTextField
              id="standard-name"
              label="Leave Your Comment Here..."
              value={this.state.newComment}
              margin="normal"
            />
        <CustomeButton onClick={this.commentSubmitHandler} >Comment</CustomeButton>
      </div>
    </section>
    )
  }
}

export default Comment;