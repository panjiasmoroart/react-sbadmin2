export const menuItems = [
  { type: "divider" },
  { type: "heading", title: "Main Menu" },
  // === Dashboard Section ===
  {
    type: "link",
    id: "dashboard",
    title: "Dashboard",
    icon: "fas fa-fw fa-tachometer-alt",
    path: "/dashboard",
  },

  { type: "divider" },

  // === Components Section ===
  { type: "heading", title: "Interface" },
  {
    type: "collapse",
    id: "components",
    title: "Components",
    icon: "fas fa-fw fa-cog",
    header: "Custom Components:",
    children: [
      { title: "Buttons", path: "/buttons" },
      { title: "Cards", path: "/cards" },
    ],
  },

  // === Utilities Section ===
  {
    type: "collapse",
    id: "utilities",
    title: "Utilities",
    icon: "fas fa-fw fa-wrench",
    header: "Custom Utilities:",
    children: [
      { title: "Colors", path: "/utilities-color" },
      { title: "Borders", path: "/utilities-border" },
      { title: "Animations", path: "/utilities-animation" },
      { title: "Other", path: "/utilities-other" },
    ],
  },

  { type: "divider" },
  // === Utilities Section ===
  { type: "heading", title: "Addons" },
  {
    type: "collapse",
    id: "pages",
    title: "Pages",
    icon: "fas fa-fw fa-folder",
    sections: [
      {
        header: "Login Screens:",
        children: [
          { title: "Login", path: "/login" },
          { title: "Register", path: "/register" },
          { title: "Forgot Password", path: "/forgot-password" },
        ],
      },
      {
        header: "Other Pages:",
        children: [
          { title: "404 Page", path: "/not-found" },
          { title: "Blank Page", path: "/blank" },
        ],
      },
    ],
  },
  {
    type: "link",
    id: "charts",
    title: "Charts",
    icon: "fas fa-fw fa-chart-area",
    path: "/charts",
  },
  {
    type: "link",
    id: "tables",
    title: "Tables",
    icon: "fas fa-fw fa-table",
    path: "/tables",
  },
];
