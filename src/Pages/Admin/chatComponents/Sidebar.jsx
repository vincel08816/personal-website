// import { Chat } from "@material-ui/icons";
import ChatIcon from "@mui/icons-material/Chat";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAdmin } from "../Admin";
import Nav from "./Nav";
import SidebarRows from "./SidebarRows";

/* grab chat Map from provider and select room should be changed to SetSelectedId */
export default function Sidebar() {
  const [isSearching, setIsSearching] = useState(0);
  const { chatMap } = useAdmin();

  // const [query, setQuery] = useState("");

  useEffect(() => {
    setIsSearching(0);
  }, []);

  const SidebarArray = [<SidebarRows chatArray={chatMap?.toArray()} />];

  return (
    <Container>
      <SearchContainer>
        <Form>
          <Input placeholder="Search" />
        </Form>
        <Button>
          <ChatIcon style={{ fontSize: "28px", color: "darkgrey" }} />
        </Button>
      </SearchContainer>
      {SidebarArray[isSearching]}
      <Nav />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Button = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  margin: 0 5px;
`;

const Form = styled.div`
  display: flex;
  justify-content: center;
  height: 30px;
  flex: 1;
  margin-left: 0px;
  border-radius: 7px;
  background-color: lightgrey;
  padding: 0 5px;
`;

const Input = styled.input`
  flex: 1;
  transition: all 500ms ease-in-out;
  text-align: center;
  border: none;
  background-color: lightgrey;
  border-radius: 7px;
  &:focus {
    text-align: left;
    &::placeholder {
    }
  }
`;

const SearchContainer = styled.div`
  height: 48px;
  display: flex;
  padding-left: 10px;
  justify-content: space-between;
  align-items: center;
  grid-area: searchbar;
  box-shadow: 2px 3px 5px lightgrey;
`;
