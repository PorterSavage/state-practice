import React from 'react';
import Post from './Post';

function Home(props) {
  return(
    <div>
      <div>
        <style>{`

        `}</style>
      </div>
      <div>
        <hr/>
        {props.postList.map((post, index) =>
          <Post 
          status = {post}
          updateAppStatus = {props.updateAppStatus}
          // title={post.title}
          // link={post.link}
          // body={post.body}
          key={index}
          // id={index}
          />
          )}
      </div>
    </div>
  );
}

export default Home;