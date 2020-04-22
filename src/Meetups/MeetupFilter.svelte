<script>
    import { createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher()
</script>

<style>

.meetup-filter {
    width: 50%;
    margin: auto;
    text-align: center;
    padding: 20px 0px;
}

</style>

<div class="meetup-filter">
    <button type="button" on:click={() => dispatch('select', 0)}>All</button>
    <button type="button" on:click={() => dispatch('select', 1)}>Favorites</button>
</div>