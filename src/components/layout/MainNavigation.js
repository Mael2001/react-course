import { Link } from "react-router-dom/cjs/react-router-dom";

function MainNavigation() {
	return <header>
		<div> React Meetups </div>
		<nav>
			<ul>
				<Link to='/'>All Meetups</Link>
			</ul>
			<ul>
				<Link to='/new-meetup'>Add New Meetup</Link>
			</ul>
			<ul>
				<Link to='/favorites'>My Favorites</Link>
			</ul>
		</nav>
	</header>
}

export default MainNavigation;