import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store.js";
import App from "./app/App.jsx";
import "./scss/master.scss";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
