export const createProject = (project) => {
    return(dispatch, getState) => {
        //synchronizujemy z baza danych 
        dispatch({type: 'CREATE_PROJECT', project});
    }
};