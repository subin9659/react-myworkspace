import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Suspense, lazy, useState } from "react";

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";

// Core components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// Icons
// https://material-ui.com/components/material-icons/

import {
  Home as HomeIcon,
  PlaylistAddCheck,
  TableChart,
  Menu as MenuIcon,
} from "@material-ui/icons";

import Home from "./components//home/Home";

const Todo = lazy(() => import("./components/todo/Todo"));
const Contact = lazy(() => import("./components/contact/Contact"));

const drawerWidth = "240px";

const theme = createMuiTheme({
  palette: {
    primary: {
      //type: "dark",
      main: green[600],
    },
    secondary: {
      main: purple[600],
    },
  },
});

//내부페이지 스타일
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    // viewport 가로가 1280px 이상일때 적용
    [theme.breakpoints.up("lg")]: {
      width: `calc(100% - ${drawerWidth})`,
      marginLeft: "240px",
    },
  },
  menuButton: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    marginRight: theme.spacing(2), //기본 spacing(띄어쓰기)이 8px *2
  },
  toolbar: theme.mixins.toolbar, // 툴바에 대한 기본 스타일
  content: {
    flexGrow: 1, // 균등분할 크기의 1배수 만큼
    [theme.breakpoints.up("lg")]: {
      paddingLeft: drawerWidth,
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  link: {
    textDecoration: "none", // 밑줄없애기
    color: "inherit", //폰트컬러를 부모요소에 색상으로
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles(); //css 클래스 목록이 생성됨
  const [mobileOpen, setMobileOpen] = useState(false); // 앱서랍 열기 닫기

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <div className={classes.toolbar} />
      <List component="nav">
        <Link to="/" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>
        <Link to="/todo" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <PlaylistAddCheck />
            </ListItemIcon>
            <ListItemText>To-Do</ListItemText>
          </ListItem>
        </Link>
        <Link to="/contacts" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <TableChart />
            </ListItemIcon>
            <ListItemText>Contacts</ListItemText>
          </ListItem>
        </Link>
      </List>
    </>
  );

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.root}>
          <header>
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                {/* color="inherit" 부모 요소의 폰트 컬러로 사용함 */}
                <IconButton
                  color="inherit"
                  edge="start"
                  className={classes.munuButton}
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                  MY WORKSPACE
                </Typography>
              </Toolbar>
            </AppBar>
            {/* 앱서랍(Drawer) */}

            {/* 화면이 1280px 이상일 때 숨기는 서랍 */}
            <Hidden lgUp implementation="css">
              <Drawer
                variant="temporary"
                open={mobileOpen} //변수값에 따라서 열렸다 닫혔다
                classes={{ paper: classes.drawerPaper }}
                onClose={handleDrawerToggle}
              >
                {drawer}
              </Drawer>
            </Hidden>

            {/* 화면이 1280px 미만일 때 숨기는 서랍 */}
            <Hidden mdDown implementation="css">
              <Drawer
                open //아무것도 없으면 true임
                variant="permanent"
                classes={{ paper: classes.drawerPaper }}
              >
                {drawer}
              </Drawer>
            </Hidden>
          </header>
          <main className={classes.content}>
            {/* 상단 toolbar 공간만큼 띄우기 */}
            <div className={classes.toolbar} />
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/" component={Home} exact></Route>

                <Route path="/todo" component={Todo}></Route>

                <Route path="/contacts" component={Contact}></Route>
              </Switch>
            </Suspense>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

// App.js에 커맨드 추가
