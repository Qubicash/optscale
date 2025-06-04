import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import { FormattedMessage } from "react-intl";
import IconButton from "components/IconButton";
import Popover from "components/Popover";
import ProfileMenuContainer from "containers/ProfileMenuContainer";
import { useMainMenuState } from "hooks/useMainMenuState";
import useStyles from "./HeaderButtons.styles";

const HeaderButtons = () => {
  const { classes } = useStyles();

  const { updateIsExpanded } = useMainMenuState();

  const [anchorEl, setAnchorEl] = useState(null);
  const openMobileMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMobileMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box component="div" className={classes.sectionDesktop}>
        <Popover
          label={
            <IconButton
              dataTestId="btn_profile"
              icon={<AccountCircleIcon />}
              color="primary"
              tooltip={{
                show: true,
                value: <FormattedMessage id="profile" />
              }}
            />
          }
          menu={<ProfileMenuContainer />}
        />
      </Box>
      <Box component="div" className={classes.sectionMobile}>
        <IconButton icon={<MoreVertIcon />} color="primary" onClick={openMobileMenu} />
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMobileMenu}>
          <Box className={classes.customMenuItem}>
            <Popover
              label={
                <IconButton
                  icon={<AccountCircleIcon />}
                  size="medium"
                  color="primary"
                  tooltip={{
                    show: true,
                    value: <FormattedMessage id="profile" />
                  }}
                />
              }
              menu={<ProfileMenuContainer />}
            />
          </Box>
        </Menu>
      </Box>
    </>
  );
};

export default HeaderButtons;
