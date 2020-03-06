import React from 'react'
import { connect } from 'react-redux'
import {buyIceCream} from '../redux/iceCreamAction'

 const IceCream = (props) => {
    return (
        <div>
            <h2>No of IceCreams - {props.noOfIceCream}</h2>
            <button onClick={props.buyIceCream} >Buy IceCream</button>
        </div>
        )
}

const mapStateToProps =state=>{
    return{
        noOfIceCream: state.noOfIceCream
    }
}


const mapDispatchToProps = dispatch =>{
    return {
        buyIceCream: ()=>dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( IceCream);