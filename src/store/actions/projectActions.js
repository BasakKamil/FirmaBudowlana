

export const createProject = (project) => {
    return(dispatch, getState,{ getFirebase,getFirestore }) => {
        //synchronizujemy z baza danych 
        const firestore = getFirestore();
        //Dodajemy dane z Nowego Projektu do naszej kolekcji w bazie danych o nazwie: projects
        firestore.collection('projects').add({
            ...project, 
            firstName: 'mp.Kamil',
            lastName: 'np.Basi',
            createdAt: new Date()
        }).then(()=>{
            dispatch({type: 'CREATE_PROJECT', project});
        }).catch((err)=>{
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })
      
    }
};