import { createStore } from 'redux';
import todoReducer from './reducers/SRVreducer';
const saveToStorage = (state) => {
    const data = JSON.stringify(state);
    localStorage.setItem('state', data);
}
const loadFromStorage = () => {
    try {
        let state = JSON.parse(localStorage.getItem('state'));
        state.date = new Date();
        state.showNotes=[]
        state.notes.map(e=>{
            e.date=new Date(e.date);
            if(e.date.getDate()==state.date.getDate())
            state.showNotes.push(e);
        })
        if (state == null)
            return undefined
        return state;
    } catch (e) {
        return undefined;
    }
}
const store = createStore(todoReducer,loadFromStorage());
store.subscribe(() => {
    saveToStorage(store.getState());
})
// const store = createStore(todoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;