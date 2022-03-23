import { useEffect, useState } from 'react';
import Pages from './Pages';
import SearchBar from './SearchBar';
import Table from './Table';

const App = () => {
	const [users, setUsers] = useState(() => []);
	const [currentPageNumber, setCurrentPageNumber] = useState(() => 1);
	const [usersPerPage] = useState(() => 10);
	const [search, setSearch] = useState(() => "");
	
	// TODO: You probably need searchResults useState hook

	useEffect(() => {
		// Fetch users from the given API
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

	// For Page numbers
	const lastUserIndex = currentPageNumber * usersPerPage;
	const firstUserIndex = lastUserIndex - usersPerPage;
	const currentUsers = users.slice(firstUserIndex, lastUserIndex);

	// Handle page number change
	const handleChangePage = (number) => {
		setCurrentPageNumber(() => number);
	}

	// Change to page 1
	const jumpToFirstPage = () => {
		if (currentPageNumber === 1) {
			return;
		}
		setCurrentPageNumber(() => 1);
	}

	// Move 1 page back
	const goBackOnePage = () => {
		if (currentPageNumber === 1) {
			return;
		}
		setCurrentPageNumber((prevPageNumber) => prevPageNumber - 1);
	}

	// Move 1 page forward
	const goForwardOnePage = () => {
		if (currentPageNumber === Math.ceil(users.length / usersPerPage)) {
			return;
		}
		setCurrentPageNumber((prevPageNumber) => prevPageNumber + 1);
	}

	// Change to the last page
	const jumpToLastPage = () => {
		if (currentPageNumber === Math.ceil(users.length / usersPerPage)) {
			return;
		}
		setCurrentPageNumber(() => Math.ceil(users.length / usersPerPage));
	}

	// Delete a single user from Actions
	const handleDelete = (id) => {
		let newUsers = users.filter(user => user.id !== id)

		setUsers(() => newUsers);

		if (currentUsers.length === 1) {
			goBackOnePage();
		}
	}

	const handleSearch = () => {
		if (search.length > 0) {
			let searchedUsers = users.filter((user) => (
				user.name.toLowerCase().includes(search.toLowerCase())
			))
			setUsers(() => searchedUsers)
		} else {
			console.log('in else');
			setUsers(() => users);
		}
	}

  return (
    <div className="App m-2 p-4">
			<SearchBar search={search} setSearch={setSearch} handleSearch={handleSearch} />
			<Table users={currentUsers} handleDelete={handleDelete} />
			<Pages usersPerPage={usersPerPage} totalUsers={users.length} handleChangePage={handleChangePage} currentPageNumber={currentPageNumber} jumpToFirstPage={jumpToFirstPage} jumpToLastPage={jumpToLastPage} goBackOnePage={goBackOnePage} goForwardOnePage={goForwardOnePage} />
    </div>
  );
}

export default App;
