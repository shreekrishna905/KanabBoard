import React from "react";
import KanbanBoard from "components"
import "whatwg-fetch"

const API_URL ='http://kanbanapi.pro-react.com';

const API_HEADER ={
    'Content-Type':'application/json',
    'Authorization':'shree@datum.com.np'
}

class KanbanBoardContainer extends React.Component {

    constructor(){
        super();
        this.state = {
            cards :[]
        };
    }

    componentDidMount(){
        fetch(API_URL+"/cards", {header:API_HEADER})
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({cards:responseData});
            })
            .catch((error) => {
                console.log("Error in fetching and parsing data", error);
            });
    }

    addTask(cardId, taskName){

    }

    deleteTask(cardId, taskId, taskIndex){

    }

    toggleTask(cardId, taskId, taskIndex) {

    }

    render() {
        return <KanbanBoard cards={this.state.cards}
                    taskCallbacks ={{
                        toggle:this.toggleTask.bind(this),
                        delete:this.deleteTask.bind(this),
                        add: this.addTask.bind(this)
                    }}
                />
    }
}

export default KanbanBoardContainer;
