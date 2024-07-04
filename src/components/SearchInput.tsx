import { useForm } from "react-hook-form";
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
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
