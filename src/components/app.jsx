import React, { Component } from 'react';
import request from 'superagent';


class App extends Component{
    constructor(){
        super();
        this.state = {
            users: []
        }
    }
    componentDidMount(){
        request.get('/api/people').end((err, resp)=>{
            const users = JSON.parse(resp.text).person;
            this.setState({
                users: users
            });
        });
    }

    render(){
        var users = this.state.users.map((user,i)=>{
            return <li key={i}>{user.name}</li>
        });
        return(
            <div>
                <h1>React app</h1>
                <ul>
                    {users}
                </ul>
            </div>
        )
    }
}

export default App;