import './App.css';
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from './queries/userQueries';
import { useEffect, useState } from 'react';

function App() {
  // Query from graphql to fetch all users
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  // State for our Light/Dark theme
  let [theme, setTheme] = useState('dark');

  useEffect(() => {
    console.log('data from App: ', data)
  }, [data])

  return (
    <div className="App">

    </div>
  );
}

export default App;
