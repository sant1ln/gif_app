

export const uiReducer = (state={},action) => {
    switch(action.type){
        case 'ADD_FAVORITE':
            return{
                ...state,
                favorites: [...state.favorites,
                    action.payload,                    
                ]
            }
        default: return state;
    }
}
