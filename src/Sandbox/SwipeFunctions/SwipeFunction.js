import React, { Component } from 'react';
import ReactGA from 'react-ga';

// You need to import these to the wanted component
// import {deleteTask} from "../Sandbox/SwipeFunctions/SwipeFunction";
// this.delete = this.delete.bind(this);
// deleteTask(id) {
//     this.setState(prevState => ({
//         tasks: prevState.tasks.filter(previousTask => previousTask != id)
//     }));
// }


class SwipeFunction extends Component{
    constructor(){
        super();
        this.state = {
            tasks: []
        }
        this.deleteTask = this.deleteTask.bind(this);
    }

    deleteTask(id){
        ReactGA.event({
            category: 'Task',
            action: 'Task delete',
          });
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(el => el != id )
        }));
    }

    render(){
        return(
            <Child deleteTask={this.deleteTask} tasks={this.state.tasks}/>
        );
    }
}

export default SwipeFunction;