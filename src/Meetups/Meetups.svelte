<script>
  import meetups from "./meetups-store.js";
  import MeetupItem from "./MeetupItem.svelte";
  import TextInput from "../UI/TextInput.svelte";
  import Button from "../UI/Button.svelte";
  import EditMeetup from "./EditMeetup.svelte";

  let editMode = null;

  function addMeetup(event) {
    editMode = null;
  }

  function cancelEdit() {
    editMode = false;
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
  <Button caption="New Meetup" on:click={() => (editMode = 'add')} />
</div>
{#if editMode === 'add'}
  <EditMeetup on:cancel={cancelEdit} on:save={addMeetup} />
{/if}
<section id="meetups">
  {#each $meetups as meetup}
    <MeetupItem
      id={meetup.id}
      title={meetup.title}
      subtitle={meetup.subtitle}
      imageUrl={meetup.imageUrl}
      description={meetup.description}
      address={meetup.address}
      email={meetup.contactEmail}
      isFav={meetup.isFavorite} />
  {/each}
</section>
