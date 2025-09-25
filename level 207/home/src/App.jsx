import UserProfile from "./userProfile";
import NameProvider from "./userContext";

function App() {
  return (
    <NameProvider>
      <UserProfile />
    </NameProvider>
  );
}

export default App;
