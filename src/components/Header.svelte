<script>
  import { links } from "svelte-routing";

  let navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];
</script>

<style>
  header {
    width: 100%;
    padding: 30px;
    box-shadow: 0rem .2rem .5rem #cecece;
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
      transition: all .3s ease;
  }
  nav a:hover {
      text-decoration: none;
      opacity: .7;
  }
</style>

<header>
  <div class="container">
    <div class="logo">
      <span>simmedia</span>
    </div>
    <nav>
      {#each navLinks as link}
        <a use:links href={link.path}>{link.name}</a>
      {/each}
    </nav>
  </div>
</header>
