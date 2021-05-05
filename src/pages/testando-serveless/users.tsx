import axios from "axios";
import { Flex, Container, Stack, Text } from "@chakra-ui/react";

export default function Users() {
  async function cadastroTeste() {
    const { data } = await axios.get("/api/cadastro");

    return data;
  }
  

  return (
    <Flex
      as="main"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    ></Flex>
  );
}
