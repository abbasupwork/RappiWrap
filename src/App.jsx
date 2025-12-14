import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import OffersScreen from "./screens/OffersScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import AccountScreen from "./screens/AccountScreen";
import SwipeableRewindContainer from "./components/SwipeableRewindContainer";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="w-full max-w-full min-h-screen flex flex-col bg-white relative">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/ofertas" element={<OffersScreen />} />
            <Route path="/favoritos" element={<FavoritesScreen />} />
            <Route path="/cuenta" element={<AccountScreen />} />
            <Route
              path="/rewind-intro"
              element={<SwipeableRewindContainer />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
