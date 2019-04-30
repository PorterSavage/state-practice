import React, {Component} from 'react';


class Post extends Component {
  constructor(props){
    super(props);
    this.state = this.props.status;
    this.onVote = this.onVote.bind(this);
  };
  
  onVote(input){
    if(input==="down"){                                                                   
      this.setState({
          downvotes: this.state.downvotes +1
      });
      }
      else if(input==="up"){
        this.setState({
          upvotes: this.state.upvotes + 1
        });
        
      }
      setTimeout(()=>{
        this.props.updateAppStatus(this.state);
      },0)
    }

  render() {
    

      
    
    return (
      <div>
        <div>
          <style>{`
            .center {
              text-align: center;
              border: 1px solid black;
              border-radius: 5px;
              padding-bottom: 10px;
            }
            .button {
              border: 1px solid black;
              border-radius: 5px;
              padding: 10px;
              box-shadow: 2px -2px 2px rgba(0,0,0,.5)
            }
          `}</style>
        </div>
        <div className="center">
        <p>Total {this.state.upvotes - this.state.downvotes}</p>
        <p>Up {this.state.upvotes}</p>
        <p>Down {this.state.downvotes}</p>
          <h1>{this.props.title}</h1>
          <em>{this.props.link}</em>
          <p>{this.props.body}</p>
          <button className="button" onClick={()=>this.onVote("up")} >UpVote</button>
          <button className="button" onClick={()=>this.onVote("down")}>DownVote</button>
        </div>
      </div>
    );
  }
}

export default Post;