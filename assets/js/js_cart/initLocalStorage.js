import { getLocalStorage, setLocalStorage } from "./constant.js";

if (!getLocalStorage("list"))
  setLocalStorage("list", list);

if (!getLocalStorage("cartList")) setLocalStorage("cartList", []);

if (!getLocalStorage("orderList")) setLocalStorage("orderList", []);
if (!getLocalStorage("statsList")) setLocalStorage("statsList", []);
/*
if (!getLocalStorage("listUSer")) {
  setLocalStorage("listUSer", [
    {
      id: 1,
      name: "Admin",
      password: "123",
      phone: "3122",
      isAdmin: true,
      cartList: [],
      order: []
    },
    {
      id: 2,
      name: "User1",
      password: "123",
      phone: "1111",
      isAdmin: false,
      cartList: [],
      order: []
    },
    {
      id: 3,
      name: "User2",
      password: "123",
      phone: "2222",
      isAdmin: false,
      cartList: [],
      order: []
    },
  ]);
}
*/
if (!getLocalStorage("currentUser")) {
  setLocalStorage("currentUser", null);
}