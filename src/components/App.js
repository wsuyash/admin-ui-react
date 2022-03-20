import { useEffect, useState } from 'react';
import Pages from './Pages';
import SearchBar from './SearchBar';
import Table from './Table';

const App = () => {
	const [users, setUsers] = useState(() => []);
	const [currentPageNumber, setCurrentPageNumber] = useState(() => 1);
	const [usersPerPage, setUsersPerPage] = useState(() => 10);

	useEffect(() => {
		const getUsers = async () => {
			try {
				const response = await fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');

				const users = await response.json();

				setUsers(() => users);

			} catch (error) {
				console.log(error);
			}	
		}

		getUsers();
	}, []);

	const lastUserIndex = currentPageNumber * usersPerPage;
	const firstUserIndex = lastUserIndex - usersPerPage;
	const currentUsers = users.slice(firstUserIndex, lastUserIndex);

	const handleChangePage = (number) => {
		setCurrentPageNumber(() => number);
	}

  return (
    <div className="App m-2 p-4">
			<SearchBar />
			<Table users={currentUsers} />
			<Pages usersPerPage={usersPerPage} totalUsers={users.length} handleChangePage={handleChangePage} currentPageNumber={currentPageNumber} />
    </div>
  );
}

export default App;
