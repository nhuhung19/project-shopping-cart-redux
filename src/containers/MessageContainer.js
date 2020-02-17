import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Message from '../component/Message'
// import * as messages from '../constants/Message'

class MessageContainer extends React.Component {

    render() {
        const { messageBuySuccess, messageDelSuccess, messageUpdateSuccess } = this.props
        return (
            <Message
                messageBuySuccess={messageBuySuccess}
                messDelete={messageDelSuccess}
                messageUpdateSuccess={messageUpdateSuccess}
            />
        );
    }
}


function mapStateToProps(state) {
    return {
        messageBuySuccess: state.message,
        messageDelSuccess: state.message,
        messageUpdateSuccess: state.message

    }
}

MessageContainer.propTypes = {
    messageBuySuccess: PropTypes.string.isRequired,
    messageDelSuccess: PropTypes.string.isRequired
}


export default connect(mapStateToProps, null)(MessageContainer);
