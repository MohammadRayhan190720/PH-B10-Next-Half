import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { APIProvider, Map } from "@vis.gl/react-google-maps";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <APIProvider apikey={API_KEY}>
      <App />
    </APIProvider>
  </StrictMode>
);
