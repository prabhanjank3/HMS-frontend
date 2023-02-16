import "bulma/css/bulma.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import temp from 'dotenv';
import { createTheme, ThemeProvider } from "@mui/material";
temp.config()
const rootElement:any = document.getElementById("root");
const root = createRoot(rootElement);


const theme = createTheme({
  //here you set palette, typography ect...
})
root.render(
  <ThemeProvider theme={theme}>
  <Provider store={store}>
    <App />
  </Provider>
  </ThemeProvider>
);
