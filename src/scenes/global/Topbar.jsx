import { Box, IconButton, Menu, MenuItem, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { KeycloakContext } from '../../KeycloakContext';

const Topbar = () => {
  const client = useContext(KeycloakContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [settingsAnchorEl, setSettingsAnchorEl] = useState(null);
  const [personAnchorEl, setPersonAnchorEl] = useState(null);

  const handleSettingsClick = (event) => {
    setSettingsAnchorEl(event.currentTarget);
  };

  const handleSettingsClose = () => {
    setSettingsAnchorEl(null);
  };

  const handlePersonClick = (event) => {
    setPersonAnchorEl(event.currentTarget);
  };

  const handlePersonClose = () => {
    setPersonAnchorEl(null);
  };
  const logoutP = () =>{
    client.logout({ redirectUri: "http://localhost:3000" });
    setPersonAnchorEl(null);
  }
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleSettingsClick}>
          <SettingsOutlinedIcon />
        </IconButton>
        <Menu
          anchorEl={settingsAnchorEl}
          open={Boolean(settingsAnchorEl)}
          onClose={handleSettingsClose}
        >
          <MenuItem onClick={handleSettingsClose}>Settings 1</MenuItem>
          <MenuItem onClick={handleSettingsClose}>Settings 2</MenuItem>
          <MenuItem onClick={handleSettingsClose}>Settings 3</MenuItem>
        </Menu>
        <IconButton onClick={handlePersonClick}>
          <PersonOutlinedIcon />
        </IconButton>
        <Menu
          anchorEl={personAnchorEl}
          open={Boolean(personAnchorEl)}
          onClose={handlePersonClose}
        >
          <MenuItem onClick={handlePersonClose}>Profile</MenuItem>
          <MenuItem onClick={handlePersonClose}>My account</MenuItem>
          <MenuItem onClick={logoutP}>Logout</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Topbar;
