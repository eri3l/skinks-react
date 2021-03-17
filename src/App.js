import React, { useState, useMemo } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SearchForm from './SearchForm';
import {
  model
} from "./Model";
import Result from "./Results";

const drawerWidth = 290;

const useStyles = makeStyles((theme) => ({
 toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  const [total, setTotal] = useState();
  const [query, setQuery] = useState({
    site: '',
    cover: '',
    svl: [model.svl.min, model.svl.max],
    vtl: [model.vtl.min, model.vtl.max],
    weight: [model.weight.min, model.weight.max],
    regen: 0,
  });

  const handleQueryChange = (_query) => {
    setQuery(() => _query);
  };

  const handleResultChange = (_total) => {
    setTotal(() => _total);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" noWrap>
            Skinks Lookup {total ? '('+total+' matching records)' : '(no match)'}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbarIcon}>
          
        </div>
        <SearchForm
            query={query}
            onQueryChange={handleQueryChange}
        ></SearchForm>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Result query={query} onResultChange={handleResultChange}/>
      </main>
    </div>
  );
}
