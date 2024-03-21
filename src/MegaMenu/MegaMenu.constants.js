import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export const DUMMY_DATA = {
  leftPart: {
    prime_video: {
      id: 1,
      type: "text",
      component: "text",
      value: "prime video",
      link: "",
      bold: true,
    },
  },
  centerPart: {
    home: {
      id: 2,
      type: "menuItem",
      component: "dropdown",
      options: {
        options1: {
          title: "",
          options_value: [
            { id: 1, value: "All", link: "" },
            { id: 2, value: "Movies", link: "" },
            { id: 3, value: "TV Shows", link: "" },
          ],
        },
      },
      value: "Home",
      link: "",
    },
    store: {
      id: 3,
      type: "menuItem",
      component: "dropdown",
      options: {
        options1: {
          title: "",
          options_value: [
            { id: 1, value: "All", link: "" },
            { id: 2, value: "Rent", link: "" },
            { id: 3, value: "Channels", link: "" },
          ],
        },
      },
      value: "Store",
      link: "",
    },
    live_tv: {
      id: 4,
      type: "text",
      component: "text",
      value: "Live TV",
      link: "",
      bold: true,
    },
    categories: {
      id: 5,
      type: "menuItem",
      component: "dropdown",
      options: {
        options1: {
          title: "Geners",
          options_value: [
            { id: 1, value: "Actions and adventures", link: "" },
            { id: 2, value: "Anime", link: "" },
            { id: 3, value: "Comedy", link: "" },
            { id: 4, value: "ADocumentaryll", link: "" },
            { id: 5, value: "Drama", link: "" },
            { id: 6, value: "ChaFantasynnels", link: "" },
            { id: 7, value: "Horror", link: "" },
            { id: 8, value: "Mystery and thrillers", link: "" },
            { id: 9, value: "Kids", link: "" },
            { id: 10, value: "Romance", link: "" },
            { id: 11, value: "Science fictoion", link: "" },
          ],
        },
        options2: {
          title: "Featured Collections",
          options_value: [
            { id: 1, value: "Hindi", link: "" },
            { id: 2, value: "English", link: "" },
            { id: 3, value: "Telugu", link: "" },
            { id: 4, value: "Tamil", link: "" },
            { id: 5, value: "Kannada", link: "" },
            { id: 6, value: "Marathi", link: "" },
            { id: 7, value: "Horror", link: "" },
            { id: 8, value: "Punjabi", link: "" },
            { id: 9, value: "Gujrati", link: "" },
            { id: 10, value: "Bengali", link: "" },
          ],
        },
      },
      value: "Categories",
      link: "",
    },
    my_stuff: {
      id: 6,
      type: "menuItem",
      component: "dropdown",
      options: {
        options1: {
          title: "",
          options_value: [
            { id: 1, value: "All", link: "" },
            { id: 2, value: "Rent", link: "" },
            { id: 3, value: "Channels", link: "" },
          ],
        },
      },
      value: "My Stuff",
      link: "",
    },
  },
  rightPart: {
    search: {
      id: 7,
      type: "search",
      component: "search",
      icon: SearchRoundedIcon,
    },
    profile: {
      id: 8,
      type: "menuItem",
      component: "dropdown",
      options: {
        options1: {
          title: "",
          options_value: [
            { id: 1, value: "Sign In", link: "" },
            { id: 2, value: "Help", link: "" },
            { id: 3, value: "Watch Anywhere", link: "" },
          ],
        },
      },
      value: "",
      icon: AccountCircleRoundedIcon,
    },
  },
};
