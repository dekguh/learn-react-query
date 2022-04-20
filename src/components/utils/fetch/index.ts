export const apiFetchTodo = async () => {
    const response = await fetch('https://rental-motoran.herokuapp.com/todos', {
        method: 'GET'
    })
    return response.json()
}