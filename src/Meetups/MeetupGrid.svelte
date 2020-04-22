<script>
  import MeetupItem from "./MeetupItem.svelte";
  import MeetupFilter from "./MeetupFilter.svelte";

  export let meetups;

  let favsOnly = false;

  $: filteredMeetups = favsOnly ? meetups.filter(m => m.isFavorite) : meetups

  function setFilter(event) {
    favsOnly = event.detail === 1
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

  @media (min-width: 760px) {
    #meetups {
      grid-template-columns: repeat(3, 1fr);
      /* grid-template-rows: 600px; */
    }
  }
</style>

<!-- <button on:click={showDetails}></button> -->

<MeetupFilter on:select={setFilter} />
<section id="meetups">
  {#each filteredMeetups as meetup}
    <MeetupItem
      id={meetup.id}
      title={meetup.title}
      subtitle={meetup.subtitle}
      imageUrl={meetup.imageUrl}
      description={meetup.description}
      address={meetup.address}
      email={meetup.contactEmail}
      isFav={meetup.isFavorite}
      on:showdetails
      on:edit />
  {/each}
</section>
