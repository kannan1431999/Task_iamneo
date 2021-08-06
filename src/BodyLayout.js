import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import OrderDetailsLayout from './OrderDetailsLayout';
import logo from './chatimage.png';

class BodyLayout extends Component {
    render = () => {
        const {
            orderedDetails, dragEnd, onDragStarted, onDragOver, onDrop,
        } = this.props;
        const orderList = {
            received: [],
            progress: [],
            delivered: [],
            pickedUp: [],
        };
        orderedDetails.receivedOrders.forEach((data) => {
            if (orderList[data.type] !== undefined) {
                orderList[data.type].push(data);
            }
        })
        orderedDetails.progressOrders.forEach((data) => {
            if (orderList[data.type] !== undefined) {
                orderList[data.type].push(data);
            }
        })
        orderedDetails.deliveredOrders.forEach((data) => {
            if (orderList[data.type] !== undefined) {
                orderList[data.type].push(data);
            }
        })
        orderedDetails.pickedUpOrders.forEach((data) => {
            if (orderList[data.type] !== undefined) {
                orderList[data.type].push(data);
            }
        })
        const list = [
            {id: 'receivedCard', header: 'Received orders', name: 'received', datas: orderList.received },
            {id: 'progressCard', header: 'Progress orders', name: 'progress', datas: orderList.progress },
            {id: 'deliveredCard', header: 'Delivered orders', name: 'delivered', datas: orderList.delivered },
            {id: 'pickedUpCard', header: 'PickedUp orders', name: 'pickedUp', datas: orderList.pickedUp }
        ];
        return (
            <>
                <div>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={15}>
                                <Grid columns='equal'>
                                    <Grid.Row>
                                        {list.map((data, index) => (
                                                <Grid.Column className="order_style" 
                                                >
                                                    <div
                                                    onDragOver={(event)=> onDragOver(event)}
                                                    onDrop={(event)=>onDrop(event, data.name)}
                                                    >
                                                    <OrderDetailsLayout name={data.header}
                                                    dragEnd={dragEnd}
                                                    onDragStarted={onDragStarted}
                                                    receivedOrders={data.datas} />
                                                    </div>
                                            </Grid.Column>                                            
                                        ))}
                                    </Grid.Row>
                                </Grid>
                            </Grid.Column>
                            <Grid.Column width={1}>
                                <img className="icon_image" src={logo} alt="logo" />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </>
        )
    }
}
  
export default BodyLayout;