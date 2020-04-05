<script>
  import MeetupItem from "./MeetupItem.svelte";
  import TextInput from "./components/TextInput.svelte";

  let title = "";
  let subtitle = "";
  let address = "";
  let email = "";
  let description = "";
  let imageUrl = "";

  let meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn to code in 2 hours",
      description:
        "In this meetup,we will have some experts to teach you for two hours.",
      imageUrl:
        "https://www.wraltechwire.com/wp-content/uploads/2019/09/networking-meetup-stock-photo-627x376.jpg",
      address: "27th Nerd Road, 12323 New York",
      contactEmail: "test@meetups.com"
    },
    {
      id: "m2",
      title: "Swim together",
      subtitle: `Let's go for some swimming`,
      description: "Swimming and relaxing at the pool side",
      imageUrl:
        "https://www.southwestjournal.com/wp-content/uploads/2019/09/46-pool.jpg",
      address: "Fith South Road, 12323 New York",
      contactEmail: "swim@poolside.com"
    }
  ];

  function addMeetup() {
    const newMeetup = {
      id: Math.random().toString(),
      title: title,
      subtitle: subtitle,
      description: description,
      address: address,
      contactEmail: email,
      imageUrl: imageUrl
    };
    meetups = [newMeetup, ...meetups];
  }
</script>

<style>
  #meetups {
    margin-top: 4rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  @media (min-width: 760px) {
    #meetups {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 600px;
    }
  }
</style>

<div class="add-meetup">
  <form on:submit|preventDefault={addMeetup}>
    <TextInput
      id="title"
      label="Title"
      value={title}
      type="text"
      on:input={event => (title = event.target.value)} />
    <TextInput
      id="subtitle"
      label="Subtitle"
      value={subtitle}
      type="text"
      on:input={event => (subtitle = event.target.value)} />
    <TextInput
      id="address"
      label="Address"
      value={address}
      type="text"
      on:input={event => (address = event.target.value)} />
    <TextInput
      id="imageUrl"
      label="Image URL"
      value={imageUrl}
      type="text"
      on:input={event => (imageUrl = event.target.value)} />
    <TextInput
      id="email"
      label="Contact"
      value={email}
      type="email"
      on:input={event => (email = event.target.value)} />
    <TextInput
      id="description"
      label="Description"
      value={description}
      controlType="textarea"
      on:input={event => (description = event.target.value)} />
    <input type="submit" value="Submit" />
  </form>
</div>

<section id="meetups">
  {#each meetups as meetup}
    <MeetupItem
      title={meetup.title}
      subtitle={meetup.subtitle}
      imageUrl={meetup.imageUrl}
      description={meetup.description}
      address={meetup.address}
      email={meetup.contactEmail} />
  {/each}
</section>
