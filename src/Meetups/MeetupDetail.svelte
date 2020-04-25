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

<style>
section {
  display: flex;
  padding: 20px;
}

.content {
  padding-left: 30px;
  flex: 50%;
}

.image {
  width: 50%;
  overflow: hidden;
}

img {
  width: 100%;
}

h1,h2,p {
  margin-bottom: 20px;
}
</style>



<section>
  <div class="image">
    <img src={selectedMeetup.imageUrl} alt={selectedMeetup.title} />
  </div>
  <div class="content">
    <h1>{selectedMeetup.title}</h1>
    <h2>{selectedMeetup.subtitle} - {selectedMeetup.address}</h2>
    <p>{selectedMeetup.description}</p>
    <p>{selectedMeetup.contactEmail}</p>
    <Button class="btn" caption="Contact" />
    <Button class="btn outline" caption="Back" on:click={() => dispatch('close')} />
  </div>
</section>
