import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import OrderDetailsLayout from './OrderDetailsLayout';
import logo from './chatimage.png';

class BodyLayout extends Component {
    render = () => {
        const {orderedDetails} = this.props;
        return (
            <>
                <div>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={15}>
                                <Grid columns='equal'>
                                    <Grid.Row>
                                        <Grid.Column className="order_style">
                                            <OrderDetailsLayout name="RECEIVED ORDERSS" receivedOrders={orderedDetails.receivedOrders} />
                                        </Grid.Column> 
                                        <Grid.Column className="order_style">
                                            <OrderDetailsLayout name="ORDER IN PROGRESS" receivedOrders={orderedDetails.progressOrders} />
                                        </Grid.Column>
                                        <Grid.Column className="order_style">
                                            <OrderDetailsLayout name="ORDER IS READY FOR DELIVERY" receivedOrders={orderedDetails.deliveredOrders} />
                                        </Grid.Column>
                                        <Grid.Column className="order_style">
                                            <OrderDetailsLayout name="ORDER PICK UP" receivedOrders={orderedDetails.pickedUpOrders} />
                                        </Grid.Column>
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