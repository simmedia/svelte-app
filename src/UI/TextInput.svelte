<script>
  export let controlType = null;
  export let id;
  export let label;
  export let rows = null;
  export let value;
  export let type = 'text';
</script>

<style>
.form-control input, textarea {
 padding: 5px;
 border-radius: 5px;
 width: 100%;
}
</style>

<div class="form-control">
  <label for={id}>{label}</label>
  {#if controlType === 'textarea'}
    <textarea {rows} type="text" {id} {value} on:input />
  {:else}
    <input required type="{type}" {id} {value} on:input />
  {/if}
</div>
