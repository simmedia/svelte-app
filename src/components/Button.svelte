<script>
  export let type;
  export let caption;
  export let href;
  export let mode;
</script>


{#if href}
    <a {href}>{caption}</a>
    {:else}
<button {type}>{caption}</button>
{/if}