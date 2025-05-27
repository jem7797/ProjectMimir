import { HamburgerMenuProvider } from "./Components/Context/HamburgerMenuContext";
import {
  SettingsProvider,
} from "./Components/Context/SettingContext";
import NavBar from "./Components/NavBar";
import UserInputBox from "./Components/UserInputBox";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ProfilePage from "./Pages/Profile";
import { SignedInProvider } from "./Components/Context/SignedInContext";
import Settings from "./Pages/Settings";

const App = () => {
  return (
    <Router>
      <div>
        <SignedInProvider>
        <HamburgerMenuProvider>
          <SettingsProvider>
              <Routes>
                <Route path="/" element={<AppContent />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/settings" element= {<Settings/>}> </Route>
              </Routes>
          </SettingsProvider>
        </HamburgerMenuProvider>
        </SignedInProvider>
      </div>
    </Router>
  );
};
const AppContent = () => {

  return (
    <div style={{ width: "100vw" }}>
      <NavBar />
      <UserInputBox />
    </div>
  );
};
export default App;
