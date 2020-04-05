<script>
  import { links } from "svelte-routing";
  let users = [
    { name: "Stefan", age: 28 },
    { name: "Milica", age: 27 },
    { name: "Petar", age: 26 }
  ];
</script>

<ul>
  {#each users as user}
    <li>
      {user.name} , {user.age}
      <a use:links >View</a>
    </li>
  {/each}
</ul>
