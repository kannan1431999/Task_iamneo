import React from 'react';
import Card from './Card';
import { Droppable, Draggable } from 'react-beautiful-dnd';


class OrderList extends React.Component {
  render(){
   const { list, index } = this.props;
  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <div 
        {...provided.draggableProps} 
        ref={provided.innerRef} className="orders">
          <div 
          style={{ padding: '0 10px' }}
           {...provided.dragHandleProps}>
           <div className="list_head">{list.title}</div>
            <Droppable droppableId={list.id} type="card">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                 className="card_layout"
                  {...provided.droppableProps}
                >
                  {list.cards.length === 0 ?
                  (
                    <h3>No Data Available</h3>
                  ) : (
                  list.cards.map((card, index) => (
                    <Card key={card.id} card={card} index={index} />
                  )))}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      )}
    </Draggable>
  );
}
}
export default OrderList;
