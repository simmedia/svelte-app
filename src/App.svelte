<script>
  import Header from "./UI/Header.svelte";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Contact from "./pages/Contact.svelte";

  import Meetups from "./Meetups/Meetups.svelte";


</script>

<style>
  :global(*),
  :global(body) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #444;
  }

  .container {
    padding: 30px;
    max-width: 1366px;
    margin: auto;
  }
</style>

<Header />
<div class="container">
 <Meetups />
</div>
