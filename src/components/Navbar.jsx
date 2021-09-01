import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import useGradeStore from '../store/gradingStore';

const NavbarStyles = styled.div`
  width: 100%;

  header {
    background-color: var(--accent);
  }

  h6 {
    color: var(--black);
  }

  svg {
    width: 30px;
    height: 30px;
    fill: var(--white);

    &:hover {
      cursor: pointer;
      fill: var(--accentHover);
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const history = useHistory();

  const classes = useStyles();

  const [visible, setVisible] = useState(false);

  const { setProcess, process, restartProcess } = useGradeStore(
    (state) => state
  );

  const handleSelectProcess = (chosenProcess) => {
    if (chosenProcess === 'new') {
      setProcess('new');
      restartProcess();
      setVisible(false);
      return history.push('/new');
    }

    restartProcess();
    setProcess('pro');
    setVisible(false);
    return history.push('/pro');
  };

  return (
    <NavbarStyles>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {process.toUpperCase()}
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              history.push('/');
              setVisible(false);
              restartProcess();
              setProcess('Home');
            }}
          >
            Home
          </Button>
          <Button color="inherit" onClick={() => handleSelectProcess('new')}>
            New
          </Button>
          <Button color="inherit" onClick={() => handleSelectProcess('pro')}>
            Pro
          </Button>
        </Toolbar>
      </AppBar>
    </NavbarStyles>
  );
};

export default Navbar;
