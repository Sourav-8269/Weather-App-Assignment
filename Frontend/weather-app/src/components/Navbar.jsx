import React from "react";
import "../styles/navbar.css";
import {
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
import { useState,useEffect } from "react";
import {useThrottle} from "use-throttle"

const Navbar = ({onUserInput}) => {
  const [input,setInput]=useState("");
  const throttleText=useThrottle(input,1000);

  useEffect(() => {
    onUserInput(throttleText);
 }, [throttleText,onUserInput]);
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
            value={input}
            onChange={(e)=>setInput(e.target.value)}
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
          onClick={()=>window.location.reload()}
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
          onClick={()=>window.location.reload()}
        >
          <BiCurrentLocation size={25} alignmentBaseline="center" />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
