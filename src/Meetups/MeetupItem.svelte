<script>
  import Button from '../components/Button.svelte'

  export let title;
  export let subtitle;
  export let imageUrl;
  export let description;
  export let address;
  export let email;
</script>

<style>
  article {
    padding: 20px 30px;
    min-width: 350px;
    overflow: hidden;
    margin-right: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: 0.1rem 0.2rem 0.5rem #b6b6b6;
  }
  .image {
    height: 300px;
    overflow: hidden;
  }
  .image img {
    width: 100%;
  }
  header h1,
  header h2 {
    margin-bottom: 10px;
  }
  .content p {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  footer {
    display: flex;
    justify-content: space-between;
  }
</style>

<article>
  <header>
    <h1>{title}</h1>
    <hr />
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
    <Button href="mailto:{email}" caption="Contact" />
    <div class="actions">
      <Button caption="Show Details" />
      <Button caption="Favorite" />
    </div>
  </footer>
</article>
