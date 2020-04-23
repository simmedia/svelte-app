<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let selectedButton = 0;
</script>

<style>

 .btn {
    cursor: pointer;
    width: 110px;
    color: #444444;
    outline: none;
    border: none;
    border-radius: 5px;
    box-shadow: 0.1rem 0.2rem 0.3rem #969696;
    transform: translateY(0px);
    transition: all 0.3s ease;
  }
  .btn:hover {
    opacity: 0.7;
  }
  .btn:active {
    box-shadow: 0.1rem 0.1rem 0.1rem #969696;
    transform: translateY(2px);
  }
  .outline {
      border: 1px solid #ccc;
      background: transparent;
      color: #444;
  }
  .success {
    background: #71e671;
  }
  .error {
    background: #e96767;
    color: #ffffff;
  }
</style>

<div class="meetup-filter">
  <button
    type="button"
    class={selectedButton === 0 ? 'btn error' : 'btn'}
    on:click={() => {
      selectedButton = 0;
      dispatch('select', 0);
    }}>
    All
  </button>
  <button
    type="button"
    class={selectedButton === 1 ? 'btn error' : 'btn'}
    on:click={() => {
      selectedButton = 1;
      dispatch('select', 1);
    }}>
    Favorites
  </button>
</div>
