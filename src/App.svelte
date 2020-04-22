<script>
  import Header from "./UI/Header.svelte";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Contact from "./pages/Contact.svelte";

  import meetups from "./Meetups/meetups-store.js";
  import Button from "./UI/Button.svelte";
  import TextInput from "./UI/TextInput.svelte";

  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import MeetupDetail from "./Meetups/MeetupDetail.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";

  let editMode;
  let page = "overview";
  let pageData = {};

  function addMeetup(event) {
    editMode = null;
  }

  function cancelEdit() {
    editMode = null;
  }

  function showDetails(event) {
    page = "details";
    pageData.id = event.detail;
  }

  function closeDetail() {
    page = "overview";
  }
</script>

<style>
  :global(*),
  :global(body) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #444;
  }

  .add-meetup {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .container {
    padding: 30px;
    max-width: 1366px;
    margin: auto;
  }
</style>

<Header />

<div class="container">

  {#if page === 'overview'}
    <div class="add-meetup">
      <Button caption="New Meetup" on:click={() => (editMode = 'add')} />
    </div>
    {#if editMode === 'add'}
      <EditMeetup on:cancel={cancelEdit} />
    {/if}
    <MeetupGrid meetups={$meetups} on:showdetails={showDetails} />
  {:else}
    <MeetupDetail id={pageData.id} on:close={closeDetail} />
  {/if}
</div>
