import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import NavigateNext from '@material-ui/icons/NavigateNext';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Typography from '@material-ui/core/Typography';
import {
  model, filter
} from "./Model";
import { Grid } from '@material-ui/core';
// import skink from './images/skink000101.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: "100%",
    widthMin: "300",
    // [theme.breakpoints.down('sm')]: {
    //   width: 400,
    // },
    // [theme.breakpoints.down('md')]: {
    //   width: 400,
    // },
    // [theme.breakpoints.between('md', 'lg')]: {
    //   width: 800,
    // },
    // [theme.breakpoints.up('lg')]: {
    //   width: 1200,
    // },
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


export default function Result(props) {
  const classes = useStyles();
  const [selectedImage, setSelectedImage] = useState([]);

  const getImage = function(item, index) {
    return "./images/skink00010"+((index === undefined ? 0 : index)+1)+".jpg";
    // return skink;
  }

  const nextImage = function(index) {
    const arr = selectedImage.slice(0);
    if (arr[index] === undefined) {
      arr[index] = 1;
    } else {
      arr[index]++;
      if (arr[index] >= records[index].imageCount) {
        arr[index] = 0;
      }
    }
    setSelectedImage(arr);
  }

  const theme = useTheme();
  const isMediumOrSmaller = useMediaQuery(theme.breakpoints.down('md'));

  const records = filter(props.query);
  props.onResultChange(records.length);

  return (
    <div className={classes.root}>
      <GridList cellHeight={400} cols={isMediumOrSmaller ? 1 : 2} className={classes.gridList}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile> */}
        {records.slice(0, 10).map((item, index) => (
          <GridListTile key={index}>
            <img src={getImage(item, selectedImage[index])} onClick={() => {nextImage(index)}} />
            <GridListTileBar
              title={item.Site + ', ' + item.Sex + ', ' + item.Cover}
              subtitle={<span>{item.Date} SVL:{item.SVL}mm VTL:{item.VTL}mm {item.Weight}g</span>}
              actionIcon={
                <IconButton className={classes.icon} onClick={() => {nextImage(index)}}>
                  <ArrowForwardIosIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
        {records.length > 10 && (
          <Grid container>
          <Typography variant="h6" noWrap>
            Displaying only first 10 records.
          </Typography>
          </Grid>
        )}
      </GridList>
    </div>
  );
}
