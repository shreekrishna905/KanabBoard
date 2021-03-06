import React from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types"
class List extends React.Component {

    render() {
        var cards = this.props.cards.map((card) => {
            return <Card keys={card.id}
                         taskCallbacks{this.props.taskCallbacks}
                         id={card.id}
                         title={card.title}
                         color={card.color}
                         description={card.description}
                         tasks={card.tasks}/>
        });

        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        );
    }

}

List.propTypes = {
    title:PropTypes.string.isRequired,
    cards:PropTypes.arrayOf(PropTypes.object),
    taskCallbacks:PropTypes.object
};

 export default List;

