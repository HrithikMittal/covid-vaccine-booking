import Home from "./Pages/Home";
import { QueryClientProvider, QueryClient } from "react-query";
import "./style.css";
import { Sugar } from "react-preloaders2";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Home />
        </div>
      </QueryClientProvider>
      <Sugar times={1800} />
    </>
  );
}

export default App;
