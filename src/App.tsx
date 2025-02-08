import { HamburgerMenuProvider } from "./Components/Context/HamburgerMenuContext";
import {
  SettingsProvider,
  useSettings,
} from "./Components/Context/SettingContext";
import NavBar from "./Components/NavBar";
import SettingsMenu from "./Components/SettingsMenu";
import UserInputBox from "./Components/UserInputBox";

const App = () => {
  return (
    <div>
      
      
      <HamburgerMenuProvider>
      <SettingsProvider>
        <AppContent />
      </SettingsProvider>
      </HamburgerMenuProvider>
    </div>
  );
};
const AppContent = () => {
  const { settingsIsOpen } = useSettings();

  return (
    <div>
      <NavBar />
      {settingsIsOpen && <SettingsMenu/>}
      <UserInputBox />
    </div>
  );
};
export default App;
