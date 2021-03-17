import React, { useState, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Chip from "@material-ui/core/Chip";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import DoneIcon from '@material-ui/icons/Done';
import {
  model
} from "./Model";
import { Slider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(2),
    paddingRight: theme.spacing(4),
  },
  formControl2: {
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(4),
    paddingRight: theme.spacing(8),
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
}));

export default function SearchForm(props) {
  const [query, setQuery] = useState({
    site: props.query.site,
    cover: props.query.cover,
    svl: props.query.svl,
    vtl: props.query.vtl,
    weight: props.query.weight,
    regen: props.query.regen,
  });
  const classes = useStyles();

  const handleQueryChange = (name, value) => {
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    
    props.onQueryChange({
      ...query,
      [name]: value,
    });
  };

  const createNoneMenuItem = function () {
    const result = (
          <MenuItem value="">
            <em>None</em>
          </MenuItem>    );
    return result;
  };

  const createMenuItem = function (item, suffix) {
    const result = (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    );
    return result;
  };

  const sites = [createNoneMenuItem()].concat(model.site.map((item) => createMenuItem(item)));
  const cover = [createNoneMenuItem()].concat(model.cover.map((item) => createMenuItem(item)));

  function valuetext(value) {
    // debugger;
    return `${value}mm`;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12}>
          <FormControl
          // required
            variant="outlined"
            fullWidth
            className={classes.formControl}
          >
            <InputLabel id="for-site">Site</InputLabel>
            <Select
              labelId="for-site"
              id="site"
              value={query.site}
              onChange={(event) => {
                handleQueryChange("site", event.target.value);
              }}
              label="Site"
            >{sites}</Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl
          // required
            variant="outlined"
            fullWidth
            className={classes.formControl}
          >
            <InputLabel id="for-cover">Cover</InputLabel>
            <Select
              labelId="for-cover"
              id="cover"
              value={query.cover}
              onChange={(event) => {
                handleQueryChange("cover", event.target.value);
              }}
              label="Cover"
            >{cover}</Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl
          // required
            variant="outlined"
            fullWidth
            className={classes.formControl2}
          >
            <InputLabel id="for-svl">SVL (in mm)</InputLabel>
            <Slider
              labelId="for-svl"
              id="svl"
              value={query.svl}
              min={model.svl.min}
              max={model.svl.max}
              valueLabelDisplay="on"
              onChange={(event, value) => {
                handleQueryChange("svl", value);
              }}
              label="SVL"
            ></Slider>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl
          // required
            variant="outlined"
            fullWidth
            className={classes.formControl2}
          >
            <InputLabel id="for-svl">VTL (in mm)</InputLabel>
            <Slider
              labelId="for-vtl"
              id="vtl"
              value={query.vtl}
              min={model.vtl.min}
              max={model.vtl.max}
              valueLabelDisplay="on"
              onChange={(event, value) => {
                handleQueryChange("vtl", value);
              }}
              label="VTL"
            ></Slider>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl
          // required
            variant="outlined"
            fullWidth
            className={classes.formControl2}
          >
            <InputLabel id="for-svl">Weight (in g)</InputLabel>
            <Slider
              labelId="for-weight"
              id="weight"
              value={query.weight}
              min={model.weight.min}
              max={model.weight.max}
              valueLabelDisplay="on"
              onChange={(event, value) => {
                handleQueryChange("weight", value);
              }}
              label="Weight"
            ></Slider>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
