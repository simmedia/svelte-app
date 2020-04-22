<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let selectedButton = 0;
</script>

<style>
  .meetup-filter {
  }

  button {
      width: 6rem;
      border: none;
  }

  .active {
      background: #e96767;
      color: #fff;
  }
</style>

<div class="meetup-filter">
  <button
    type="button"
    class:active={selectedButton === 0}
    on:click={() => {
      selectedButton = 0;
      dispatch('select', 0);
    }}>
    All
  </button>
  <button
    type="button"
    class:active={selectedButton === 1}
    on:click={() => {
      selectedButton = 1;
      dispatch('select', 1);
    }}>
    Favorites
  </button>
</div>
