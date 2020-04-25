<script>
  import meetups from "./meetups-store.js";
  import { createEventDispatcher } from "svelte";
  import TextInput from "../UI/TextInput.svelte";
  import Button from "../UI/Button.svelte";
  import Modal from "../UI/Modal.svelte";

  export let id = null;

  let title = "";
  let subtitle = "";
  let address = "";
  let email = "";
  let description = "";
  let imageUrl = "";

  if (id) {
    const unsubscribe = meetups.subscribe(items => {
      const selectedMeetup = items.find(i => i.id === id);
      title = selectedMeetup.title;
      subtitle = selectedMeetup.subtitle;
      address = selectedMeetup.address;
      imageUrl = selectedMeetup.imageUrl;
      email = selectedMeetup.contactEmail;
      description = selectedMeetup.description;
    });

    unsubscribe();
  }

  function submitForm() {
    const meetupData = {
      title: title,
      subtitle: subtitle,
      description: description,
      address: address,
      contactEmail: email,
      imageUrl: imageUrl
    };

    if (id) {
      fetch(`https://svelte-app-1d18d.firebaseio.com/meetups/${id}.json`, {
        method: "PATCH",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" }
      })
        .then(res => {
          if (!res.ok) {
            throw new Error("An error occurred, please try again!");
          }
          meetups.updateMeetup(id, meetupData);
        })
        .catch(err => console.log(err));
    } else {
      fetch("https://svelte-app-1d18d.firebaseio.com/meetups.json", {
        method: "POST",
        body: JSON.stringify({ ...meetupData, isFavorite: false }),
        headers: { "Content-Type": "application/json" }
      })
        .then(res => {
          if (!res.ok) {
            throw new Error("An error occurred, please try again!");
          }
          return res.json();
        })
        .then(data => {
          meetups.addMeetup({
            ...meetupData,
            isFavorite: false,
            id: data.name
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
    dispatch("save");
  }

  const dispatch = createEventDispatcher();

  function cancel() {
    dispatch("cancel");
  }

  function deleteMeetup() {
    fetch(`https://svelte-app-1d18d.firebaseio.com/meetups/${id}.json`, {
      method: "DELETE"
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("An error occurred, please try again!");
        }
        meetups.removeMeetup(id);
      })
      .catch(err => console.log(err));

    dispatch("save");
  }
</script>

<style>

</style>

<Modal on:cancel title="Edit Meetup Data">
  <form on:submit|preventDefault={submitForm}>
    <TextInput
      id="title"
      label="Title"
      value={title}
      on:input={event => (title = event.target.value)} />
    <TextInput
      id="subtitle"
      label="Subtitle"
      value={subtitle}
      on:input={event => (subtitle = event.target.value)} />
    <TextInput
      id="address"
      label="Address"
      value={address}
      on:input={event => (address = event.target.value)} />
    <TextInput
      id="imageUrl"
      label="Image URL"
      value={imageUrl}
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

  </form>

  <div name="footer">
    <Button type="button" on:click={submitForm} caption="Save" />
    <Button
      mode="btn outline"
      type="button"
      on:click={cancel}
      caption="Cancel" />
    {#if id}
      <Button
        mode="btn outline"
        type="button"
        on:click={deleteMeetup}
        caption="Delete" />
    {/if}
  </div>
</Modal>
