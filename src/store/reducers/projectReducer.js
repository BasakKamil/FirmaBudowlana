const initState ={
    projects: [
        {id: '1',title: 'projekt 1', content: 'jest 1 projekt tu'},
        {id: '2',title: 'projekt 2', content: 'jest 2 projekt tu'},
        {id: '3',title: 'projekt 3', content: 'jest 3 projekt tu'},
        {id: '4',title: 'projekt 4', content: 'jest 4 projekt tu'}
    ]

}

const projectReducer = (state = initState, action) => {
    //sprawdzamy typ akcji
    switch(action.type){
        case 'CREATE_PROJECT':
        console.log("Utworzylismy nowy projekt :)", action.project)
    }
    return state
}
export default projectReducer