import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface ExpandableTextProps {
  children: string;
}
const ExpandableText = ({ children }: ExpandableTextProps) => {
  const [expanded, setExpanded] = useState(false);

  const characterLimit = 300;
  if (!children) return null;
  if (children.length <= characterLimit) return <Text>{children}</Text>;

  const summary = expanded
    ? children
    : children.substring(0, characterLimit) + "...";
  return (
    <Text>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        marginLeft={1}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
