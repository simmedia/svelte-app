<script>
  export let type = "button";
  export let caption;
  export let href = null;
  export let mode = "btn";
  export let color = null;
</script>

<style>
  .btn {
    cursor: pointer;
    width: 110px;
    color: #fff;
    outline: none;
    border: none;
    border-radius: 5px;
    background: #3168ff;
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
  }
  a button {
      color: #444 !important;
  }
</style>

{#if href}
    <a {href}>
      <button class="{mode} {color}">
        {caption}
      </button>
    </a>
  
{:else}
  <button class="{mode} {color}" {type} on:click>{caption}</button>
{/if}
