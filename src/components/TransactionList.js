import React from 'react'
import TransactionForm from './TransactionForm'

class TransactionList extends React.Component{
    state={
        currentIndex:-1,
        list: this.returnList()
    }

    returnList(){
        if(localStorage.getItem("transactions")==null)
            localStorage.setItem("transactions",JSON.stringify([]))
       
        return JSON.parse(localStorage.getItem("transactions"))
    }

    onAddOrEdit=(data)=>{
        var list = this.returnList()

        if(this.state.currentIndex==-1)
            list.push(data)
        else
            list[this.state.currentIndex] = data

        localStorage.setItem('transactions',JSON.stringify(list))
        this.setState({currentIndex:-1,list:list})
    }

    handleEdit = (index) =>{
        this.setState({
            currentIndex:index
        })
    }

    handleDelete = index =>{
        let list = this.returnList()
        list.splice(index,1)
        localStorage.setItem('transactions',JSON.stringify(list))
        this.setState({currentIndex:-1,list:list})
    }

    render(){
        return(
            <div>
                <TransactionForm
                    onAddOrEdit={this.onAddOrEdit}
                    currentIndex={this.state.currentIndex}
                    list={this.state.list}/>
                <br/>
                <p>List of transactions</p>
                { this.state.list.length>0 ?
                    <table>
                        <tbody>
                            {
                                this.state.list.map((item,index)=>{
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
export default TransactionList;