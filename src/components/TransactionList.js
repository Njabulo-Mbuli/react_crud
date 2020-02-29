import React from 'react'
import TransactionForm from './TransactionForm'
import { connect } from 'react-redux'
import * as actions from "../actions/TransactionActions"
import {bindActionCreators} from 'redux'

class TransactionList extends React.Component{
    handleEdit = (index) =>{
        this.props.updateTransaction(index)
    }

    handleDelete = index =>{
        this.props.deleteTransaction(index)
    }

    render(){
        return(
            <div>
                <TransactionForm/>
                <hr/>
                <p>List of transactions</p>
                { this.props.list.length>0 ?
                    <table>
                        <tbody>
                            {
                                this.props.list.map((item,index)=>{
                                    return<tr key={index}>
                                        <td>{item.bAccountNo}</td>
                                        <td>{item.bName}</td>
                                        <td>{item.amount}</td>
                                        <td><button onClick={()=>{this.handleEdit(index)}}>Edit</button></td>
                                        <td><button onClick={()=>{this.handleDelete(index)}}>Delete</button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                : null }
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        list:state.list
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        deleteTransaction: actions.Delete,
        updateTransaction: actions.UpdateIndex
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(TransactionList);