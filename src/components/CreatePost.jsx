import React from 'react';
import v4 from 'uuid';

function CreatePost(props) {
  let _title = null;
  let _link = null;
  let _body = null;

  function handleNewPostSubmission(e) {
    e.preventDefault();
    props.onAddPostToList({title: _title.value, link: _link.value, body: _body.value, upvotes: 0, downvotes: 0, id: v4()})
    _title.value = '';
    _link.value = '';
    _body.value = '';
  }

  return (
    <div>
      <div>
        <style>{`
          .form {
            margin-top: 75px;
            text-align: center;
          }
          input {
            margin-top: 8px;
            width: 300px;
          }
          textarea {
            margin-top: 8px;
            width: 500px;
            height: 200px;
          }
        `}</style>
      </div>
      <div>
        <div className="form">
          <form onSubmit={handleNewPostSubmission}>
            <label htmlFor="title">Title: </label>
            <input type="text"
            ref={(input) => {_title = input;}}/>
            <br/>
            <label htmlFor="link">Link: </label>
            <input type="text"
            ref={(input) => {_link = input;}}/>            
            <br/>
            <label htmlFor="body">Body: </label>
            <textarea name="body"
            ref={(textarea) => {_body = textarea;}}/>
            <br/>
            <button type='submit'>Post</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
