import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import styled from "styled-components";
import useApp from "../contexts/appContext";

const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen((prev) => !prev);
  const { executeScroll, openModal, aboutRef } = useApp();

  const handleClick = (text) => {
    executeScroll(aboutRef);
    setTimeout(() => {
      openModal(text);
    }, 250);
  };

  return (
    <Container>
      <IconButton onClick={toggleDrawer}>
        <MenuIcon fontSize={"large"} />
      </IconButton>
      <Drawer anchor={"top"} open={isOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: "auto",
            paddingTop: "72px",
            paddingBottom: "18px",
            display: "flex",
            flexDirection: "column",
          }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          {["Education", "Experience"].map((text) => (
            <ListItem key={text}>
              <ListItemButton>
                <ListItemText
                  primary={text}
                  sx={{ textAlign: "center" }}
                  onClick={() => handleClick(text)}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem>
            <ListItemButton>
              <StyledLink
                href="mailto:vincel08816@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <ListItemText
                  primary={"Contact Me"}
                  sx={{ textAlign: "center" }}
                />
              </StyledLink>
            </ListItemButton>
          </ListItem>
        </Box>
      </Drawer>
    </Container>
  );
};

export default MobileDrawer;

const StyledLink = styled.a`
  flex: 1;
  text-decoration: none;
  color: inherit;
  text-align: center;
`;

const Container = styled.div`
  margin-left: 12px;
  @media only screen and (min-width: 900px) {
    display: none;
  }
`;
