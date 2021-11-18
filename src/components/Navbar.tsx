import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isWide = useMediaQuery('(min-width: 600px)');
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const resetExperience = () => {
    window.location.reload();
  };

  const Content = () => (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <IconButton onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={resetExperience}>Reiniciar experiencia</MenuItem>
        </Menu>
      </Box>
      <Box flex="1"></Box>
      <Box py={2}>
        <IconButton href="https://www.literup.com/" target="_blank">
          <Avatar
            variant="square"
            src="https://www.literup.com/build/images/literup-logo-sm.png"
            alt="literup"
          />
        </IconButton>
      </Box>
    </>
  );

  return isWide ? (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={2}
      sx={{
        zIndex: 2,
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        borderRight: '1px solid #000000',
        width: 60,
      }}
    >
      <Content />
    </Box>
  ) : (
    <Box
      display="flex"
      alignItems="center"
      px={2}
      sx={{
        zIndex: 2,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        borderBottom: '1px solid #000000',
        height: 60,
      }}
    >
      <Content />
    </Box>
  );
};
