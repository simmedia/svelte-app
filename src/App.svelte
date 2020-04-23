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
  let editedId;
  let page = "overview";
  let pageData = {};

  function savedMeetup(event) {
    editMode = null;
    editedId = null;
  }

  function cancelEdit() {
    editMode = null;
    editedId = null;
  }

  function showDetails(event) {
    page = "details";
    pageData.id = event.detail;
  }

  function closeDetail() {
    page = "overview";
    pageData.id = {};
  }

  function startEdit(event) {
    editMode = "edit";
    editedId = event.detail;
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


  .container {
    padding: 30px;
    max-width: 1366px;
    margin: auto;
  }
</style>

<Header />

<div class="container">

  {#if page === 'overview'}
    {#if editMode === 'edit'}
      <EditMeetup 
        id={editedId} 
        on:save={savedMeetup} 
        on:cancel={cancelEdit} />
    {/if}
    <MeetupGrid
      meetups={$meetups}
      on:showdetails={showDetails}
      on:add={() => {editMode = 'edit'}}
      on:edit={startEdit} />
  {:else}
    <MeetupDetail id={pageData.id} on:close={closeDetail} />
  {/if}
</div>
