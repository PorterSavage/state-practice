import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import CreatePost from './CreatePost';


class App extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            masterPostList: []
        };
        this.handleAddingPostToList = this.handleAddingPostToList.bind(this);
        this.updateAppStatusFromPost = this.updateAppStatusFromPost.bind(this);
    }

    updateAppStatusFromPost(newStateObject){
        let newPostList = this.state.masterPostList.slice();
        let postIndex = this.findPostIndex(newStateObject, newPostList);
        newPostList.splice(postIndex, 1, newStateObject);

        this.setState({
            masterPostList: newPostList
        })
    }

    findPostIndex(post, arr){
        for(let i=0; i<arr.length; i++){        
            if(post.id === arr[i].id){
                
                return i;
            }
        }
    }

    handleAddingPostToList(post) {
        let newPostList = this.state.masterPostList.slice();
        newPostList.push(post);
        this.setState({masterPostList: newPostList}); 
    }

    render() {
        return(
            <div>
                <div>
                    <style>{`
                        .page {
                        margin-left: -8px;
                        margin-right: -8px;
                        margin-top: -17px;
                        }
                        .nav {
                        margin-left: -8px;
                        margin-top: -4px;
                        }
                    `}</style>
                </div>
                <div>
                    <div className="nav">
                        <Nav/>
                    </div>
                    <div>
                        <Switch>
                            <Route exact path='/' component={() =><Home updateAppStatus = {this.updateAppStatusFromPost} postList = {this.state.masterPostList}/>}/>
                            <Route path='/create-post' component={() =><CreatePost onAddPostToList={this.handleAddingPostToList}/>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;