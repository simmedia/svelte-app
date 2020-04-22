<script>
  import { onDestroy, createEventDispatcher } from "svelte";
  import meetups from "./meetups-store.js";
  import Button from "../UI/Button.svelte";

  export let id;

  let selectedMeetup;

  const unsubscribe = meetups.subscribe(items => {
    selectedMeetup = items.find(i => i.id === id);
  });

  const dispatch = createEventDispatcher();

  onDestroy(() => {
    unsubscribe();
  });
</script>

<section>
  <div class="image">
    <img src={selectedMeetup.imageUrl} alt={selectedMeetup.title} />
  </div>
  <div class="content">
    <h1>{selectedMeetup.title}</h1>
    <h2>{selectedMeetup.subtitle} - {selectedMeetup.address}</h2>
    <p>{selectedMeetup.description}</p>
    <p>{selectedMeetup.contactEmail}</p>
    <Button mode="btn" caption="Contact" />
    <Button mode="btn outline" caption="Close" on:click={() => dispatch('close')} />
  </div>
</section>
