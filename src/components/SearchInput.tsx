import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
      }}
    >
      <FormControl>
        <InputGroup>
          <InputLeftElement color="green.800" children={<BsSearch />} />
          <Input
            ref={ref}
            borderRadius={20}
            placeholder="Search games..."
            variant={"fille"}
            bgGradient="linear(to-r, green.200, pink.500)"
            color="blackAlpha.800"
            fontWeight="500"
            _placeholder={{ color: "blackAlpha.500" }}
          />
        </InputGroup>
      </FormControl>
    </form>
  );
};

export default SearchInput;
