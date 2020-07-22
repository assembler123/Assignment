import Axios from 'axios';
const serverAddr = 'http://127.0.0.1:3000'
const notes = {
    date:new Date(),
    notes:[],
    showNotes:[]
}
const notesReducer = (copyState = notes, action) => {
    let st = Object.assign({}, copyState);
    switch (action.type) {
        case 'CHANGE_DATE':
            st.date = action.payload;
            st.showNotes = st.notes.filter(e=>e.date.getDate()==action.payload.getDate());
            return st;
        case 'ADD_NOTE':
            st.notes.push({
                    id:Math.ceil(Math.random()*10000),
                    date:st.date,
                    title:action.payload.title,
                    content:action.payload.content
                });
            st.showNotes = st.notes.filter(e=>e.date.getDate()==st.date.getDate());
            return st;
        case 'EDIT_NOTE':
            st.notes.map((e,index)=>{
                if (e.id==action.payload.object.id)
                {
                    st.notes[index]=action.payload.object;
                }
            });
            st.showNotes = st.notes.filter(e=>e.date.getDate()==st.date.getDate());
            return st;
        // case 'SET_INIT_DATA':
        //     st.emp_data = action.payload.emp_data;
        //     st.surveys = action.payload.surveys;
        //     return st;
        // case 'ADD_TO_ASSIGN':
        //     let emp_obj = Object.assign({}, st.emp_data);
        //     emp_obj[st.emp_name].push(action.payload);
        //     return {...st, emp_data: emp_obj };
        // case 'REMOVE_FROM_ASSIGN':
        //     emp_obj = Object.assign({}, st.emp_data);
        //     emp_obj[st.emp_name] = emp_obj[st.emp_name].filter(e => e != action.payload);
        //     return {...st, emp_data: emp_obj };

        default:
            return copyState;
    }
}
export default notesReducer;