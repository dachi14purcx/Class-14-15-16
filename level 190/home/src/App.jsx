import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchUser from "./components/SearchUser";
import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";

function Home() {
  return <h1 className="p-4 text-xl">მთავარი გვერდი</h1>;
}
function Contact() {
  return <h1 className="p-4 text-xl">დაკონტაქტება</h1>;
}
function Settings() {
  return <h1 className="p-4 text-xl">პარამეტრები</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <SearchUser />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
