import React from 'react';
import { Draggable } from 'react-beautiful-dnd';


class Card extends React.Component {
render(){
 const  { card, index } = this.props;

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <div
            
            className={card.status === "active" ? "card" : 'card_inactive'} >
              <div className="card_details">
              <span className="card_id">{card.orderId}</span>
              <span className="response_due">Response due</span>
              <div className="card_order_no">
              <b>Order No: {card.orderNo}</b> 
              </div>
              <div>
                  {card.items}
              </div>
              <div className="card_date">
                  <div>
                      DUE: <span className="dateTxt">{card.dueDate}</span>
                  </div>
                  <div className="assignWrap">
                      <span className="assignTxt">ASSIGNED TO</span>
                        <div className="blue_circle" />
                  </div>
              </div>
              </div> 
          </div>
        </div>
      )}
    </Draggable>
  );
}
}
export default Card;