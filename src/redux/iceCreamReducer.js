import { BUY_ICECREAM } from "./iceCreamActionType"

const initialState ={
    noOfIceCream : 10
}

export const iceCreamReducer = (state = initialState, action)=>{

    switch(action.type){
        case  BUY_ICECREAM:
            return {
                ...state,
                noOfIceCream: state.noOfIceCream - 1
            }
            default: return state

    }
}



