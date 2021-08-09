import React from 'react';
import OrderList from './OrderList';
import HeaderLayout from './HeaderLayout';
import cardList from './dragCardList';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import message from './chatimage.png';
import './App.css';
import {Grid, Image} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      cardData: cardList,
      activeTab: 'all' 
    }
  } 

   handleTabChange = (name) => {
   this.setState({
     activeTab: name
   });
  }

   onDragEnd = (event) => {
    const { destination, source, draggableId, type } = event;
    const {cardData} = this.state;
    if (!destination) {
      return;
    }
    if (type === 'list') {
      const newListIds = cardData.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      return;
    }
    const sourceList = cardData.lists[source.droppableId];
    const destinationList = cardData.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];
    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newData = {
        ...cardData,
        lists: {
          ...cardData.lists,
          [sourceList.id]: destinationList,
        },
      };
      this.setState({ cardData: newData, });
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newData = {
        ...cardData,
        lists: {
          ...cardData.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      this.setState({ cardData: newData, });
    }
  };

render = () => {
  const {cardData = {}, activeTab} = this.state;
    return (
        <div
        >
          <HeaderLayout handleTabChange={this.handleTabChange} activeTab={activeTab} />
          <div className="body_layout">
            <Grid>
                <Grid.Column width={15}>
                  <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="app" type="list" direction="horizontal">
                      {(provided) => (
                        <div
                          className="list_layout"
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                        >
                          {Object.keys(cardData).length > 0 && cardData.listIds.map((listId, index) => {
                            return (
                              <OrderList list={cardData.lists[listId]} key={listId} index={index} />
                            );
                          })}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                </Grid.Column>
                <Grid.Column  width={1}>
                  <div className="chat_image">
                    <Image src={message} alt="message" />
                  </div>
                </Grid.Column>
            </Grid>
          </div>
        </div>
    );
  }
}

export default App;