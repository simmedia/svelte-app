<script>
  import MeetupItem from "./MeetupItem.svelte";
  import TextInput from "../components/TextInput.svelte";
  import Button from "../components/Button.svelte";
  import EditMeetup from "../components/EditMeetup.svelte";

  let meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn to code in 2 hours",
      description:
        "In this meetup,we will have some experts to teach you for two hours.",
      imageUrl:
        "https://www.wraltechwire.com/wp-content/uploads/2019/09/networking-meetup-stock-photo-627x376.jpg",
      address: "27th Nerd Road, 12323 New York",
      contactEmail: "test@meetups.com",
      isFavorite: false
    },
    {
      id: "m2",
      title: "Swim together",
      subtitle: `Let's go for some swimming`,
      description: "Swimming and relaxing at the pool side",
      imageUrl:
        "https://www.southwestjournal.com/wp-content/uploads/2019/09/46-pool.jpg",
      address: "Fith South Road, 12323 New York",
      contactEmail: "swim@poolside.com",
      isFavorite: false
    }
  ];

  let editMode = null;

  function addMeetup(event) {
    const newMeetup = {
      id: Math.random().toString(),
      title: event.detail.title,
      subtitle: event.detail.subtitle,
      description: event.detail.description,
      address: event.detail.address,
      contactEmail: event.detail.email,
      imageUrl: event.detail.imageUrl
    };
    meetups = [newMeetup, ...meetups];
    editMode = null
  }

  function toggleFavorite(event) {
    const id = event.detail;
    const updatedMeetup = { ...meetups.find(m => m.id === id) };
    updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
    const meetupIndex = meetups.findIndex(m => m.id === id);
    const updatedMeetups = [...meetups];
    updatedMeetups[meetupIndex] = updatedMeetup;
    meetups = updatedMeetups;
  }
</script>

<style>
  #meetups {
    margin-top: 4rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  .add-meetup {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 760px) {
    #meetups {
      grid-template-columns: repeat(3, 1fr);
      /* grid-template-rows: 600px; */
    }
  }
</style>

<div class="add-meetup">
  <Button
    caption="New Meetup"
    on:click={() => (editMode = 'add')} />
</div>
{#if editMode === 'add'}
  <EditMeetup on:save={addMeetup} />
{/if}
<section id="meetups">
  {#each meetups as meetup}
    <MeetupItem
      id={meetup.id}
      title={meetup.title}
      subtitle={meetup.subtitle}
      imageUrl={meetup.imageUrl}
      description={meetup.description}
      address={meetup.address}
      email={meetup.contactEmail}
      on:togglefavorite={toggleFavorite}
      isFav={meetup.isFavorite} />
  {/each}
</section>
