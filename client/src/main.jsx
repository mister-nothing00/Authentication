import Loader from "./hooks/Loader.jsx";
import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { UserProvider } from "../src/hooks/context/User.jsx";
import { ChakraProvider } from "@chakra-ui/react";
const App = lazy(() => import("./App.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <ChakraProvider>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </ChakraProvider>
    </UserProvider>
  </StrictMode>
);
