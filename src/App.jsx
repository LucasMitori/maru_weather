import GeneralProvider from "./contexts/AuthContext";
import RoutesMain from "./routes/routes";

function App() {
  return (
    <>
      <GeneralProvider>
        <RoutesMain />
      </GeneralProvider>
    </>
  );
}

export default App;
