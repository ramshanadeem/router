import { Navbar, Nav } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
const Header = () => {
  const classes = useStyles();
  return (
    <>
      {/*     <Navbar bg="primary" variant="dark" className="">
        <Navbar.Brand as={Link} to="/">
          MERN App
      </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/users">
            Users
        </Nav.Link>
          <Nav.Link as={Link} to="/register">
            Register
        </Nav.Link>
          <Nav.Link as={Link} to="/posts">
            Posts
        </Nav.Link>
          <Nav.Link as={Link} to="/add-post">
            Add Post
        </Nav.Link>
        </Nav>
      </Navbar>
 */}


      <div className={classes.root} className="navbar">
        <AppBar style={{ width: '100%' }} >
          <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" className={classes.title}>
              <img style={{ height: '60px' }} src='https://i.morioh.com/67feeaf72f.png'></img>
            </Typography>
            <Button color="inherit"><Link to="/" className="link">Home</Link></Button>
            <Button color="inherit"><Link to="/users" className="link">User</Link></Button>
            <Button color="inherit"><Link to="/posts" className="link">Post</Link></Button>
            <Button color="inherit"> <Link to="/register" className="link">Register</Link></Button>
            <Button color="inherit"> <Link to="/add-post" className="link">Add post</Link></Button>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Header;
