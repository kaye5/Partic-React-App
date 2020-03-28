import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Auth from '../Modules/Auth';
import { Link } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function Profile() {
  const classes = useStyles();
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [login,setLogin] = React.useState(false)
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  React.useEffect(()=>{
    if(Auth.isUserAuthenticated()){
        setLogin(true)
    } else 
    setLogin(false)
  },[Auth.isUserAuthenticated()])
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  function renderIsLogin(){
    if(!login)
        return (
            <React.Fragment>
                <Link to={{
                    pathname : '/login',
                    state : {
                        prev : window.location.pathname,
                    }}
                }><span className="dropdown-item">Login</span></Link>
                <Link to={{
                    pathname : '/signup',
                    state : {
                        prev : window.location.pathname
                    }}
                }><span className="dropdown-item">Sign up</span></Link>
            </React.Fragment>
        )
        else 
        return(
            <React.Fragment>
                <a className="dropdown-item" href="/profile/setting">Account Setting</a>
                <a className="dropdown-item" href="/profile/ticket">Ticket</a>
                <a className="dropdown-item" href="/profile/event/ticket">Create Event</a>
                <a className="dropdown-item" href="/events/my">My Events </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/logout" style={{color : "red"}}>Logout</a>
            </React.Fragment>
        )
    }
  return (
    <div>
        <span onClick={handleClick}>
            <i className="fa fa-user-circle" style={{color : "black",fontSize:"1.5rem"}}></i>
        </span>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {renderIsLogin()}
      </Popover>
    </div>
  );
}
