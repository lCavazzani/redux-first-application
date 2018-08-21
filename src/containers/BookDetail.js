import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{

    render(){

    if(!this.props.book){
        return (<div>Empty</div>)
    }
        return(
            <div>{this.props.book.title}</div>
        )
    }
}
function mapStateToProps(state){
    //transform the application state to props
    return {
        book: state.activeBook,
    }
}

export default connect(mapStateToProps)(BookDetail);