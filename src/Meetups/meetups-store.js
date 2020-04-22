import { writable } from "svelte/store";

const meetups = writable([
  {
    id: "m1",
    title: "Coding Bootcamp",
    subtitle: "Learn to code in 2 hours",
    description:
      "In this meetup,we will have some experts to teach you for two hours.",
    imageUrl:
      "https://www.wraltechwire.com/wp-content/uploads/2019/09/networking-meetup-stock-photo-627x376.jpg",
    address: "27th Nerd Road, 12323 New York",
    contactEmail: "test@meetups.com",
    isFavorite: false,
  },
  {
    id: "m2",
    title: "Swim together",
    subtitle: `Let's go for some swimming`,
    description: "Swimming and relaxing at the pool side",
    imageUrl:
      "https://www.southwestjournal.com/wp-content/uploads/2019/09/46-pool.jpg",
    address: "Fith South Road, 12323 New York",
    contactEmail: "swim@poolside.com",
    isFavorite: false,
  },
]);

const customMeetupsStore = {
  subscribe: meetups.subscribe,
  addMeetup: (meetupData) => {
    const newMeetup = {
      ...meetupData,
      id: Math.random().toString(),
      isFavorite: false,
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
};

export default customMeetupsStore;
