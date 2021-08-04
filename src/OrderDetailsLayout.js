import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

class OrderDetailsLayout extends Component {
    render = () => {
        const {receivedOrders, name} = this.props
        return (
            <>
                <div>
                    <h4 className="card_header">{name}({receivedOrders.length})</h4>
                    <div className="card_layout">
                        {
                            (receivedOrders.length === 0)
                            ? (
                                <>
                                <h3>No Data Available</h3>
                                </>
                            ) : (
                                <>
                                {
                                    receivedOrders.map((data, index) => {
                                        return (
                                            <>
                                            <div className={data.status === "active" ? "card" : 'card_inactive'} >
                                                <div className="card_details">
                                                <span className="card_id">{data.orderId}</span>
                                                <span className="response_due">Response due</span>
                                                <div className="card_order_no">
                                                <b>Order No: {data.orderNo}</b> 
                                                </div>
                                                <div>
                                                    {data.items}
                                                </div>
                                                <div className="card_date">
                                                    <div>
                                                        DUE: {data.dueDate}
                                                    </div>
                                                    <div>
                                                        ASSIGNED TO <span><Icon className="card_icon" name="circle thin" /></span>
                                                    </div>
                                                </div>
                                                </div> 
                                            </div>
                                            </>
                                        )
                                    })
                                }
                                </>
                            )
                        }
                    </div> 
                </div>
            </>
        )
    }
}
  
export default OrderDetailsLayout;