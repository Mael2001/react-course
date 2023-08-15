import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {

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
		);
	}

	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</section>
	)
}

export default NewMeetupPage;