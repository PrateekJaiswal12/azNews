import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import categories from '../data/category';

export default function SwipeableTemporaryDrawer({setCategory}) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ff5252',
      },
    },
  });
  

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200, paddingLeft: 2, paddingRight: 4, marginTop: 2}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>Categories</ListItem>
      </List>
      <Divider />
      <List>
        {categories.map((text, index) => (
          <ListItem 
            key={text}
            disablePadding 
            onClick={() => setCategory(text)}
            style={{height:40, borderRadius:10, marginTop: 5}}
          >
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>

        <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}><MenuIcon/></Button>
          <ThemeProvider theme={darkTheme}>
            <SwipeableDrawer
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
            {list('left')}
            </SwipeableDrawer>
          </ThemeProvider>
        </React.Fragment>

    </div>
  );
}