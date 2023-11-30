
import { useReducer } from "react"

const initialState = ({ initialValue }) => ({
    error: false,
    loading: true,
    item: initialValue,
)}

const actionTypes = {
    ERROR: 'ERROR',
    SUCCESS: 'SUCCESS',
    SAVE: 'SAVE',
}

const reducer = (state, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_INPUT : 
            return {
                ...state,
                value: action.value
            }
        case actionTypes.ADD : 
            return {
                ...state,
                openModal: false,
                newTodo: action.newTodo,
                value: ''
            }
        case actionTypes.DELETE :
            return {
                ...state,
                deleted: true
            }
        default: 
            return {
                ...state,
            }
    }
}

export default function useLocalStorage( itemName, initialValue ) {
    const [ state, dispatch ] = useReducer(reducer, initialState)
    const {
        error,
        loading,
        item,
      } = state;

    //Action Creators
    const onError =(error) => dispatch({type: actionTypes.ERROR, payload: error});
    // const onSuccess =(parsedItem) => dispatch({type: actionTypes.SUCCESS, payload: parsedItem});
    const onSave = (item) => dispatch({type: actionTypes.SAVE, payload: item});
    // const on = () => dispatch({type: actionTypes});
    
    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
      
                let parsedItem;  
    
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                }   else {
                        parsedItem = JSON.parse(localStorageItem);
                    }
                onSuccess(parsedItem);
            } catch (error) {
                onError(error);
            }
        }, 2000);
      }, [parsedItem]);

      const saveItem = (newItem) => {
        try {
          localStorage.setItem(itemName, JSON.stringify(newItem));
          onSave(newItem);
        } catch(error) {
          onError(error);
        }
        
      };
}