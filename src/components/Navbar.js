import { useEffect, useRef, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Hidden from "@mui/material/Hidden";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { createStyles, makeStyles } from "@mui/styles";
import MenuButton from "./MenuButton";
import InputWithIcon from "../components/SearchInput";
import { useContext } from "react";
import { ImageContext } from "../context/image-context";
import axios from "axios";

const useStyles = makeStyles(() =>
  createStyles({
    tab: {
      fontSize: "20px",
      marginRight: "30px",
      "&:hover,&:focus": {
        fontWeight: "600",
      },
      cursor: "pointer",
    },
  })
);

const Navbar = () => {
  const classes = useStyles();
  const pages = ["Upload", "Pricing", "Licens"];
  // const settings = ["Profile", "Account", "Dashboard"];
  const { setImagesData } = useContext(ImageContext);
  const query = (data) => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&client_id=PXG6VDp07CV89ckryZbcszLV_JMTLp9pLFuwInPU6Lk&query=${data}`
      )
      .then((res) => {
        setImagesData(res.data.results);
      })
      .catch((err) => console.error(err));
  };

  const [mobOpen, setMobOpen] = useState(false);
  const handleMobDrawer = () => {
    setMobOpen(!mobOpen);
  };

  const [onTop, setOnTop] = useState(true);
  const navRef = useRef();

  useEffect(() => {
    const position = navRef.current.offsetTop;
    window.onscroll = function () {
      if (window.pageYOffset > position) {
        setOnTop(false);
      } else {
        setOnTop(true);
      }
    };
  });

  const drawerWidth = 220;
  const appbarHeight = 55;

  return (
    <>
      <AppBar
        spacing={12}
        color={"transparent"}
        ref={navRef}
        elevation={!onTop ? 4 : 0}
        position="fixed"
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          py={0.5}
          px={1}
          bgcolor={!onTop ? "#fff" : ""}
          color={!onTop ? "#FFF" : "#FFF"}
        >
          <Hidden mdUp>
            <IconButton
              onClick={() => {
                setMobOpen(true);
              }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box mt={0.5} sx={{ flexGrow: 1 }}>
              <img src={"logos/logo.png"} alt={"logo"} />
            </Box>
            <Hidden mdDown>
              <Box mr={10} />
              {pages.map((each) => (
                <Box key={each} className={classes.tab}>
                  {each}
                </Box>
              ))}
            </Hidden>
          </Box>
          <MenuButton />
        </Box>
      </AppBar>

      {/*==========================================*/}

      <Drawer open={mobOpen} onClose={handleMobDrawer}>
        <Box display={"flex"} width={drawerWidth}>
          <List>
            <ListItem
              component={Box}
              px={2}
              display={"flex"}
              alignItems={"center"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                href={"/"}
                onClick={handleMobDrawer}
                height={appbarHeight}
              >
                <Box>LOGO</Box>
              </Box>
              <Box ml={12} />
              <div>
                <IconButton onClick={handleMobDrawer}>
                  <CloseIcon />
                </IconButton>
              </div>
            </ListItem>
            <Box mt={1} />
            {pages.map((each, index) => (
              <ListItem key={each}>
                <Box />
                <Button>{each}</Button>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      {/*==========================================*/}
      <InputWithIcon query={query} />
    </>
  );
};

export default Navbar;
