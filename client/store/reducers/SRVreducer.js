import Axios from 'axios';
const serverAddr = 'http://127.0.0.1:3000'
const empstate = {
    emp_name: '',
    emp_data: null,
    surveys: []
}
const empReducer = (copyState = empstate, action) => {
    let st = Object.assign({}, copyState);
    switch (action.type) {
        case 'CHANGE_EMP_NAME':
            st.emp_name = action.payload;
            return st;
        case 'SET_INIT_DATA':
            st.emp_data = action.payload.emp_data;
            st.surveys = action.payload.surveys;
            return st;
        case 'ADD_TO_ASSIGN':
            let emp_obj = Object.assign({}, st.emp_data);
            emp_obj[st.emp_name].push(action.payload);
            return {...st, emp_data: emp_obj };
        case 'REMOVE_FROM_ASSIGN':
            emp_obj = Object.assign({}, st.emp_data);
            emp_obj[st.emp_name] = emp_obj[st.emp_name].filter(e => e != action.payload);
            return {...st, emp_data: emp_obj };

        default:
            return copyState;
    }
}
export default empReducer;