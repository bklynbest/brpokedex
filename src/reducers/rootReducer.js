const initState = {
  posts: [
    {id: '1', title: 'Squirtle laid an egg', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'},
    {id: '2', title: 'Charmander laid an egg', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'},
    {id: '3', title: 'Bulbasaur laid an egg', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'}
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;