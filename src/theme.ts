import { extendTheme, ThemeConfig } from "@chakra-ui/react";

//this sets the Theme configuration. Within the ThemeConfig is the intialColorMode which we set to dark
const config: ThemeConfig ={
    initialColorMode: "light"
};

// extendTheme basically executes this darkMode command, setting it to the config we set above
//const theme just makes it easier to export and use everywhere else
const theme = extendTheme({config});



export default theme