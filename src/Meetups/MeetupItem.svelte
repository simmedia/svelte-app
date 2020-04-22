<script>
  import meetups from "./meetups-store.js";
  import { fade } from "svelte/transition";
  import Button from "../UI/Button.svelte";

  export let id;
  export let title;
  export let subtitle;
  export let imageUrl;
  export let description;
  export let address;
  export let email;
  export let isFav;

  function toggleFavorite() {
    meetups.toggleFavorite(id);
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
    width: 350px;
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

<article transition:fade>
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
      mode="btn"
      color="outline"
      href="mailto:{email}"
      caption="Contact" />
    <Button color="primary" caption="Details" />
    <Button
      mode="btn"
      color={isFav ? 'error' : 'success'}
      caption={isFav ? 'Unfavorite' : 'Favorite'}
      on:click={toggleFavorite} />

  </footer>
</article>
