<script>
  import { links } from "svelte-routing";

  let currentLink = "Home";
  let navLinks = [
    { name: "Home"},
    { name: "Meetups"},
    { name: "About"},
    { name: "Contact" }
  ];
</script>

<style>
  header {
    width: 100%;
    padding: 30px;
    box-shadow: 0rem 0.2rem 0.5rem #cecece;
  }
  .logo {
    font-size: 1.3rem;
    color: #444;
    font-weight: 700;
  }
  header .container {
    max-width: 1306px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  nav a {
    margin-left: 30px;
    color: #444;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  nav a:hover {
    text-decoration: none;
    opacity: 0.7;
  }
  .active {
    color: #ff6e6e;
  }
</style>

<header>
  <div class="container">
    <div class="logo">
      <span>simmedia</span>
    </div>
    <nav>
      {#each navLinks as link}
        <a
          use:links
          href={link.path}
          class:active={currentLink === link.name}
          on:click={() => (currentLink = link.name)}>
          {link.name}
        </a>
      {/each}
    </nav>
  </div>
</header>
