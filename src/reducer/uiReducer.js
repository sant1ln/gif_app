

export const uiReducer = (state={},action) => {
    switch(action.type){
        case 'ADD_FAVORITE':
            return{
                ...state,
                favorites: [...state.favorites,
                    action.payload,                    
                ]
            }
        case 'REMOVE_FAVORITE':
            return{
                ...state,
                favorites: state.favorites.filter(item => item.id !== action.payload)
            }

        case 'SEARCH_WORD':
            return{
                ...state,
                searchWord: action.payload
            }

        case 'TOGGLE_SIDEBAR':
            return{
                ...state,
                sidebar: !state.sidebar
            }
        
        default: return state;
    }
}
