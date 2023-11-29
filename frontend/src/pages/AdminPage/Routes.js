import dashBoard from "./dashBoard";

var routes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: HomeIcon,
    component: dashBoard,
    layout: "/super_admin",
    appearInSidebar: true,
    admin: true,
  },
  {
    path: "/restaurants",
    name: "Restaurants",
    icon: RestaurantIcon,
    component: RestaurantList,
    layout: "/super_admin",
    appearInSidebar: true,
    admin: true,
  },
  {
    path: "/users",
    name: "Users",
    icon: UserIcon,
    component: Users,
    layout: "/super_admin",
    appearInSidebar: true,
    admin: true,
  },
];
export default routes;
