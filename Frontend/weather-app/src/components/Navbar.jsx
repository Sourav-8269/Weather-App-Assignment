import React from "react";
import "../styles/navbar.css";
import {
  Box,
  Button,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { BiCurrentLocation } from "react-icons/bi";
import "../App.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div id="logo">
        <Text fontFamily="cursive" fontSize={["20px","24px", "30px"]}>
        SkyCast
        </Text>
      </div>
      <div id="search">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input
            // htmlSize={40}
            type="tel"
            placeholder="Enter your location"
            id="input"
            bg="#3f49c026"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          />
        </InputGroup>
      </div>
      <div id="location">
        <Button
          display={{ base: "none", md: "flex" }}
          borderRadius="30px"
          leftIcon={<BiCurrentLocation size={25} />}
          colorScheme="messenger"
        >
          Current Location
        </Button>
        <IconButton
        display={{ md: 'none' }}
          bg="#0078ff"
          borderRadius="50%"
          textAlign="center"
          isRound={true}
          // display="flex"
          alignItems="center"
          justifyContent="center"
          colorScheme='blue'
          p={2}
        >
          <BiCurrentLocation size={25} alignmentBaseline="center" />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
