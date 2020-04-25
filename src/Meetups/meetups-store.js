import { writable } from "svelte/store";

const meetups = writable([]);

const customMeetupsStore = {
  subscribe: meetups.subscribe,
  setMeetups: (meetupArray) => {
    meetups.set(meetupArray)
  },
  addMeetup: (meetupData) => {
    const newMeetup = {
      ...meetupData
    };
    meetups.update((items) => {
      return [newMeetup, ...items];
    });
  },
  updateMeetup: (id, meetupData) => {
    meetups.update(items => {
      const meetupIndex = items.findIndex(i => i.id === id) // index of the item we want to edit
      const updatedMeetup = { ...items[meetupIndex], ...meetupData } // copy the item from the meetups and  accessin object properties
      const updatedMeetups = [...items];
      updatedMeetups[meetupIndex] = updatedMeetup
      return updatedMeetups
    })
  },
  toggleFavorite: (id) => {
    meetups.update((items) => {
      const updatedMeetup = { ...items.find((m) => m.id === id) };
      updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
      const meetupIndex = items.findIndex((m) => m.id === id);
      const updatedMeetups = [...items];
      updatedMeetups[meetupIndex] = updatedMeetup;
      return updatedMeetups;
    });
  },
  removeMeetup: (id) => {
    meetups.update(items => {
      return items.filter(i => i.id !== id)
    })
  }
};

export default customMeetupsStore;
