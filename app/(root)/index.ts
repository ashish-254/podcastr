export const getSidebarLinks = (userId?: string) => [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/discover.svg",
    route: "/discover",
    label: "Discover",
  },
  {
    imgURL: "/icons/microphone.svg",
    route: "/create-podcast",
    label: "Create Podcast",
  },
  {
    imgURL: "/icons/profile.svg",
    route: `/profile/${userId}`,
    label: "My Profile",
  },
];