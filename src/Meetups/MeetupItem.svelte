<script>
  import { createEventDispatcher } from "svelte";
  import meetups from "./meetups-store.js";
  import Button from "../UI/Button.svelte";

  const dispatch = createEventDispatcher();

  export let id;
  export let title;
  export let subtitle;
  export let imageUrl;
  export let description;
  export let address;
  export let email;
  export let isFav;

  function toggleFavorite() {
    fetch(`https://svelte-app-1d18d.firebaseio.com/meetups/${id}.json`, {
      method: "PATCH",
      body: JSON.stringify({ isFavorite: !isFav }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("An error occurred, please try again!");
        }
        meetups.toggleFavorite(id);
      })
      .catch(err => console.log(err));
  }
</script>

<style>
  article {
    padding: 20px 30px;
    min-width: 350px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: 0.1rem 0.2rem 0.5rem #b6b6b6;
  }
  .image {
    width: 300px;
    height: 200px;
    overflow: hidden;
    margin-bottom: 20px;
    display: flex;
    place-items: center;
  }
  .image img {
    width: 100%;
  }
  header h1 {
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }

  header h2 {
    padding: 10px 0px;
  }
  .content {
    height: 5rem;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    overflow: hidden;
  }
  p {
    margin-bottom: 10px;
  }
  .content p {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  footer {
    display: flex;
    justify-content: space-around;
  }
</style>

<article>
  <header>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <p>{address}</p>
  </header>
  <div class="image">
    <img src={imageUrl} alt="" />
  </div>
  <div class="content">
    <p>{description}</p>
  </div>
  <footer>
    <Button
      mode="btn outline"
      on:click={() => dispatch('edit', id)}
      caption="Edit Meetup" />
    <Button
      mode="btn primary"
      caption="Details"
      on:click={() => dispatch('showdetails', id)} />
    <Button
      mode="btn"
      color={isFav ? 'error' : 'success'}
      caption={isFav ? 'Unfavorite' : 'Favorite'}
      on:click={toggleFavorite} />
  </footer>
</article>
