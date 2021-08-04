import React, { Component } from 'react';
import { Button, Icon, Search } from 'semantic-ui-react'

class HeaderLayout extends Component {
    render = () => {
        const {changeHandler, tab, SearchHandler, isLoading} = this.props;
        return (
            <>
            <div className="menu">
                <div>
                    <span className="tickets_span"><b>Tickets</b></span>
                    <Button className={tab === 'all' ? 'activeTab' : ''} onClick={() => {changeHandler('all')}}>ALL</Button>
                    <Button className={tab === 'myTickets' ? 'activeTab' : ''} onClick={() => {changeHandler('myTickets')}}>ONLY MY TICKETS</Button>
                    <Button className={tab === 'updated' ? 'activeTab' : ''} onClick={() => {changeHandler('updated')}}>RECENTLY UPDATED</Button>
                    <Button  className="icon_width"><Icon name='filter' /></Button>
                    <Button className="icon_width"><Icon name="sync" /></Button>
                </div>
                <div className="right_header">
                   <div>
                    <Search
                        className="page_no"
                        fluid
                        loading={isLoading}
                        onSearchChange={SearchHandler}
                        placeholder="Order No"
                    />
                   </div>
                   <div>
                    <Button><Icon name='setting' />Configurations</Button>
                   </div>
                   <div className="page_no">(0-30)</div>
                   <div>
                    <Button className="icon_width"><Icon name='angle left' /></Button>
                    <Button className="icon_width"><Icon name='angle right' /></Button>
                   </div>
                </div>
            </div>
            </>
        )
    }
}
  
export default HeaderLayout;