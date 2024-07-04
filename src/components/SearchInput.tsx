import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement color="green.800" children={<BsSearch />} />
      <Input
        borderRadius={20}
        placeholder="Search games..."
        variant={"fille"}
        bgGradient="linear(to-r, green.200, pink.500)"
        color="blackAlpha.800"
        fontWeight="500"
        _placeholder={{ color: "blackAlpha.500" }}
      />
    </InputGroup>
  );
};

export default SearchInput;
