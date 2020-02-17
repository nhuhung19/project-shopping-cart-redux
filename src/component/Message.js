import React from 'react';

class Message extends React.Component {
    render() {
        const { messageBuySuccess, messageDelSuccess, messageUpdateSuccess } = this.props
        return (
            <h3>
                <span className="badge amber darken-2">{messageBuySuccess} {messageDelSuccess} {messageUpdateSuccess} </span>
            </h3>
        );
    }

}

export default Message;
