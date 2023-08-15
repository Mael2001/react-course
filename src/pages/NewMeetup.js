import { useHistory } from 'react-router-dom'

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
	const history = useHistory();

	function addMeetupHandler(meetupData) {
		fetch(
			'https://react-e38f1-default-rtdb.firebaseio.com/meetups.json',
			{
				method: 'POST',
				mode: "cors",
				body: JSON.stringify(meetupData),
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': 'origin'
				}
			}
		).then(() => {
			history.replace('/')
		}).catch(() => {
			window.alert('Error')
		});
	}

	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</section>
	)
}

export default NewMeetupPage;