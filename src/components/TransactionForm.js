import React from 'react'

class TransactionForm extends React.Component{
    state = {
        ...this.returnStateObject()
    }
    
    returnStateObject(){
        if(this.props.currentIndex==-1)
            return{
                bAccountNo:'',
                iFSC:'',
                bName:'',
                amount:''
            }
        else
            return this.props.list[this.props.currentIndex]
    }

    handleInputChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.state.bAccountNo && this.state.iFSC && this.state.bName && this.state.amount)
            this.props.onAddOrEdit(this.state)

    }

    componentDidUpdate(prevProps){
        if(prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length)
            this.setState({...this.returnStateObject()})
    }

    render(){
        return(
            <form autoComplete="off" onSubmit={this.handleSubmit}>
                <input name="bAccountNo" placeholder="Acc no" value={this.state.bAccountNo} onChange={this.handleInputChange}/>
                <br/>
                <input name="iFSC" placeholder="ifsc code" value={this.state.iFSC} onChange={this.handleInputChange}/>
                <br/>
                <input name="bName" placeholder="account holder name" value={this.state.bName} onChange={this.handleInputChange}/>
                <br/>
                <input name="amount" placeholder="Amount" value={this.state.amount} onChange={this.handleInputChange}/>
                <br/>
                <button type="submit"> Submit </button>
            </form>
        )
    }
}

export default TransactionForm