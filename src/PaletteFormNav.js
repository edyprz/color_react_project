import React, { Component } from "react";
import {Link} from 'react-router-dom';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ColorPickerForm from './ColorPickerForm';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Button from "@material-ui/core/Button";
import DraggableColorList from './DraggableColorList';
import {arrayMove} from 'react-sortable-hoc';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/core/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import PaletteMetaForm from './PaletteMetaForm';
import {ValidatorForm,TextValidator} from 'react-material-ui-form-validator';
import styles from './styles/PaletteFormNavStyles';


class PaletteFormNav  extends Component {
  constructor(props){
    super(props);
    this.state = {newPaletteName: '',formShowing: false};
    this.handleChange = this.handleChange.bind(this);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }


  handleChange(evt) {
    this.setState({
      [evt.target.name] : evt.target.value
    });
  }

  showForm(){
    this.setState({formShowing: true})
  }

  hideForm(){
    this.setState({formShowing: false})
  }



  render(){

    const {classes,open,palettes,handleSubmit} = this.props;
    const {newPaletteName,formShowing} = this.state;

    return(
      <div className={classes.root}>
      <CssBaseline />
        <AppBar
          color="default"
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.props.handleDrawerOpen}
              edge="start"
              className={classNames(classes.menuButton, {[classes.hide] : open})}
            >
              <ChevronRightIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create a Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
             <Link to='/' style={{textDecoration: 'none'}}>
                <Button variant='contained' color='secondary' className={classes.button}>
                  Go Back
                </Button>
            </Link>
            <Button variant="contained" color="primary" onClick={this.showForm} className={classes.button} >
               Save
            </Button>
          </div>
        </AppBar>
        {formShowing && (
          <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} hideForm={this.hideForm} />
        )}
      </div>
    );
  }
}

export default withStyles(styles,{withTheme: true})(PaletteFormNav);