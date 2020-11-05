import firebase from '../firebase'

export function show(list) {
    return async dispatch => {
        const db = firebase.firestore()

        let todos = []

        await db.collection('todo').where('listId', '==', list.id).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                todos.push(doc.data())
                todos[todos.length - 1].id = doc.id
            })

        })
        
        dispatch({
            type: 'SHOW_TODOS',
            payload: {
                todos: todos,
                currentList: list
            }
        })

    }
}

export function setDone(todo) {
    return async dispatch => {
        const db = firebase.firestore()

        console.log(todo)

        await db.collection('todo').doc(todo.id).update({'isDone': true}).then(() => {
            dispatch(show(todo.parrentList))
        })

    }
}

export function deleteTodo(todo) {
    return async dispatch => {
        const db = firebase.firestore()

        await db.collection('todo').doc(todo.id).delete().then(() => {
            dispatch(show(todo.parrentList))
        })

    }
}

export function addTodo(todo) {
    return async dispatch => {
        const db = firebase.firestore()

        await db.collection('todo').doc().set({
            isDone: false,
            isUrgently: todo.isUrgently,
            listId: todo.parrentList.id,
            name: todo.name,
            date: todo.date
        }).then(() => {
            dispatch(show(todo.parrentList))
        })
    }
}