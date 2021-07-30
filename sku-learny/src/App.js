import './App.css';
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from './queries/userQueries';
import { useEffect } from 'react';

function App() {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  useEffect(() => {
    console.log('data from App: ', data)
  }, [data])

  return (
    <div className="App">

    </div>
  );
}

export default App;
