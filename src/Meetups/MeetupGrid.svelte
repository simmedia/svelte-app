<script>
  import { createEventDispatcher } from "svelte";
  import MeetupItem from "./MeetupItem.svelte";
  import MeetupFilter from "./MeetupFilter.svelte";
  import Button from "../UI/Button.svelte";
  import {flip} from 'svelte/animate'
  import {scale} from 'svelte/transition'

  export let meetups;

  const dispatch = createEventDispatcher();

  let favsOnly = false;

  $: filteredMeetups = favsOnly ? meetups.filter(m => m.isFavorite) : meetups;

  function setFilter(event) {
    favsOnly = event.detail === 1;
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

  .meetups-control {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 760px) {
    #meetups {
      grid-template-columns: repeat(3, 1fr);
      /* grid-template-rows: 600px; */
    }
  }
</style>

<!-- <button on:click={showDetails}></button> -->

<div class="meetups-control">
  <MeetupFilter on:select={setFilter} />
  <Button caption="New Meetup" on:click={() => dispatch('add')} />
</div>

<section id="meetups">
  {#each filteredMeetups as meetup (meetup.id)}
    <div animate:flip={{duration: 300}} transition:scale={{duration: 300}}>
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
    </div>
  {/each}
</section>
