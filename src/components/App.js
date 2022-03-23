import { useEffect, useState } from 'react';
import Pages from './Pages';
import SearchBar from './SearchBar';
import Table from './Table';

const App = () => {
	const [users, setUsers] = useState(() => []);
	const [currentPageNumber, setCurrentPageNumber] = useState(() => 1);
	const [usersPerPage] = useState(() => 10);

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

	const jumpToFirstPage = () => {
		if (currentPageNumber === 1) {
			return;
		}
		setCurrentPageNumber(() => 1);
	}

	const goBackOnePage = () => {
		if (currentPageNumber === 1) {
			return;
		}
		setCurrentPageNumber((prevPageNumber) => prevPageNumber - 1);
	}

	const goForwardOnePage = () => {
		if (currentPageNumber === Math.ceil(users.length / usersPerPage)) {
			return;
		}
		setCurrentPageNumber((prevPageNumber) => prevPageNumber + 1);
	}

	const jumpToLastPage = () => {
		if (currentPageNumber === Math.ceil(users.length / usersPerPage)) {
			return;
		}
		setCurrentPageNumber(() => Math.ceil(users.length / usersPerPage));
	}

	const handleDelete = (id) => {
		let newUsers = users.filter(user => user.id !== id)

		setUsers(newUsers);

		if (currentUsers.length === 1) {
			goBackOnePage();
		}
	}

  return (
    <div className="App m-2 p-4">
			<SearchBar />
			<Table users={currentUsers} handleDelete={handleDelete} />
			<Pages usersPerPage={usersPerPage} totalUsers={users.length} handleChangePage={handleChangePage} currentPageNumber={currentPageNumber} jumpToFirstPage={jumpToFirstPage} jumpToLastPage={jumpToLastPage} goBackOnePage={goBackOnePage} goForwardOnePage={goForwardOnePage} />
    </div>
  );
}

export default App;
