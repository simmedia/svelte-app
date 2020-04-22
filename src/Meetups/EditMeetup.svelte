<script>
  import meetups from "./meetups-store.js";
  import { createEventDispatcher } from "svelte";
  import TextInput from "../UI/TextInput.svelte";
  import Button from "../UI/Button.svelte";
  import Modal from "../UI/Modal.svelte";

  const dispatch = createEventDispatcher();

  let title = "";
  let subtitle = "";
  let address = "";
  let email = "";
  let description = "";
  let imageUrl = "";

  function submitForm() {
    const meetupData = {
      title: title,
      subtitle: subtitle,
      description: description,
      address: address,
      contactEmail: email,
      imageUrl: imageUrl
    };
    meetups.addMeetup(meetupData);
    dispatch("save");
  }
  
  function cancel() {
    dispatch("cancel");
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
  </div>
</Modal>
