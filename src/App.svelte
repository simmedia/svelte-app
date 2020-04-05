<script>
  import { Router, Route } from "svelte-routing";

  import Header from "./components/Header.svelte";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Contact from "./pages/Contact.svelte";

  export let url = "";
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
  <Router {url}>
    <Route path="/" component={Home} />
    <Route path="about" component={About} />
    <Route path="contact" component={Contact} />
  </Router>
</div>
