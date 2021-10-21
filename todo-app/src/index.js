import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {

  const items = ['Drink Coffee', 'Build Awesome App'];

  return(
    <ul>
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
    </ul>
  );
}

const AppHeader = () => <h1>My Todo List</h1>;

const SearchPanel = () => {

  const searchText = 'Type here to search';
  const searchStyle = {
    fontSize: '25px'
  };

  return <input
    style = { searchStyle }
    type = "text"
    placeholder = { searchText } />;
}

const App = () => {

  const isLoggedIn = true;
  const loginBox = <span>Log in please</span>;
  const welcomeBox = <span>Welcome Back</span>;

  const value = '<script>alert("")</script>';

  return (
    <div>
      { value }
      { isLoggedIn ? welcomeBox : loginBox }
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));