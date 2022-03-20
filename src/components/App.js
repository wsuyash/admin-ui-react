import { useEffect, useState } from 'react';
import Pages from './Pages';
import SearchBar from './SearchBar';
import Table from './Table';

const App = () => {
	const [users, setUsers] = useState(() => []);
	const [pageNumber, setPageNumber] = useState(() => 1);

	useEffect(() => {
		const getUsers = async () => {
			try {
				const response = await fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');

				const users = await response.json();

				setUsers(() => users);

			} catch (error) {
				console.log(error);
				setUsers(() => []);
			}	
		}

		getUsers();
	}, []);



  return (
    <div className="App m-2 p-4">
			<SearchBar />
			<Table users={users} />
			<Pages />
    </div>
  );
}

export default App;
