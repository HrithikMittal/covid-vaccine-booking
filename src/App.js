import Home from "./Pages/Home";
import { QueryClientProvider, QueryClient } from "react-query";
import "./style.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Home />
      </div>
    </QueryClientProvider>
  );
}

export default App;
