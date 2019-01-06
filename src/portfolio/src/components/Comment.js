import React, { Component } from 'react';
import { functions } from '..//plugins/firebase'

class Comment extends Component {  

  componentDidMount() {
    const mailer = functions.httpsCallable('sendMail');
    let contactForm = {
      name: 'test-san',
      contents: 'コメント',
      email: 'test@aaa.com',
    };

    mailer(contactForm).then(() => {
              console.log('send mail')
    })
      .catch(err => { console.log(err) })
      .finally(() => {})
  }

  render() {
    return (
    <div>
      <h1>Comments from everyone !</h1>
    </div>
    )
  }
}

export default Comment;