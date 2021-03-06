import io from "socket.io-client";
import store from "./store";
import {
  setNewMessage,
  removeOfflineUser,
  addOnlineUser,
} from "./store/conversations";

const socket = io({
  auth: {
    token: localStorage.getItem('messenger-token')
  }
});

socket.on("connect", () => {
  console.log("connected to server");

  socket.on("add-online-user", (id) => {
    store.dispatch(addOnlineUser(id));
  });

  socket.on("remove-offline-user", (id) => {
    store.dispatch(removeOfflineUser(id));
  });

  socket.on("new-message", ({ message, sender }) => {
    store.dispatch(setNewMessage(message, sender));
  });
});

socket.on("connect_error", (err) => {
  console.log(err.message);
});

export default socket;
