export default (state=[],action)=>{
    switch (action.type) {
        case 'FETCH_USER':
            return [...state,action.payload]
            break;
    
        default:
            return state
            break;
    }
}