import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react';
import HeaderLayout from './HeaderLayout';
import orderDetails from './orderDetails.json';
import BodyLayout from './BodyLayout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderedDetails: orderDetails,
      tab: 'all',
      isLoading: false,
    }
  }

  changeHandler = (name) => {
    this.setState({
      tab: name,
    });
    if (name === 'myTickets' || name === 'updated') {
      this.setState({
        orderedDetails : {
          receivedOrders: [],
          progressOrders: [],
          deliveredOrders: [],
          pickedUpOrders: [],
        },
      });
    } else {
      this.setState({
        orderedDetails: orderDetails,
      })
    }
  }

  SearchHandler = (e, { value }) => {
    const {orderedDetails} = this.state;
     const receivedOrders = orderedDetails.receivedOrders.filter((data) => {
      if (data.orderNo.toLowerCase().includes(value.toLowerCase())) return true;
      return false;
    });
    const progressOrders = orderedDetails.progressOrders.filter((data) => {
      if (data.orderNo.toLowerCase().includes(value.toLowerCase())) return true;
      return false;
    });
    const deliveredOrders = orderedDetails.deliveredOrders.filter((data) => {
      if (data.orderNo.toLowerCase().includes(value.toLowerCase())) return true;
      return false;
    });
    const pickedUpOrders = orderedDetails.pickedUpOrders.filter((data) => {
      if (data.orderNo.toLowerCase().includes(value.toLowerCase())) return true;
      return false;
    });
    if (value === '') {
      this.setState({
        orderedDetails: orderDetails,
      })
    } else {
      this.setState({
        isLoading: true,
        orderedDetails : {
          receivedOrders: receivedOrders,
          progressOrders: progressOrders,
          deliveredOrders: deliveredOrders,
          pickedUpOrders: pickedUpOrders,
        },
      });
    }
    setTimeout(() => {
      this.setState({
        isLoading: false,
        
      })
    }, 300)
  }

  render = () => {
    const {orderedDetails, tab, isLoading} = this.state;
    return (
      <>
        <div className="App">
          <Grid>
            <Grid.Row className="header_layout">
              <Grid.Column>
                <HeaderLayout changeHandler={this.changeHandler} tab={tab} SearchHandler={this.SearchHandler} isLoading={isLoading}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row className="header_layout">
              <Grid.Column>
                <BodyLayout orderedDetails={orderedDetails} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </>
    )
  }
}

export default App;
