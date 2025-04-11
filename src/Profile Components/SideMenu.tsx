import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { useSettings } from '../Components/Context/SettingContext';
import SettingsMenu from '../Components/SettingsMenu';

const SideMenu = () => {
const {settingsIsOpen, setSettingsIsOpen} = useSettings();


const handleClick = () => {
setSettingsIsOpen(!settingsIsOpen);
    console.log("settings");
  };





  return (
<>

{settingsIsOpen ? <SettingsMenu/> : ""}


    <Sidebar rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: '#171929',
          height: "100vh",
          width:"250px",
          padding: 0,
          margin: 0,
          overflow:"hidden",
          whiteSpace:"none",
          color: "white"
        },
      }} >
       <Menu style={{padding: "10px"}}>
    <MenuItem component={<Link to= "/"/>}> Mimir </MenuItem>
    <MenuItem onClick={() => handleClick()} > Settings </MenuItem>
  </Menu>
    </Sidebar>
    </>
   
  )
}

export default SideMenu
