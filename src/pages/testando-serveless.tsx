import { FormEvent, useState } from "react";
import Link from "next/link";
import axios from "axios";
import {
  Flex,
  Stack,
  Input,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";

export default function Teste() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function cadastroTeste(event: FormEvent) {
    event.preventDefault();

    axios.post("/api/cadastro", {
      name,
      email,
    });
  }

  return (
    <Flex
      as="main"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        as="form"
        onSubmit={cadastroTeste}
        width={500}
        flexDir="column"
        alignItems="stretch"
        justifyContent="center"
        marginTop="60px"
      >
        <Stack
          direction="column"
          spacing={5}
          alignItems="center"
          marginBottom="16"
        >
          <FormControl id="email">
            <FormLabel>Nome:</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email:</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <Button
            type="submit"
            w="36"
            p={4}
            color="white"
            fontWeight="bold"
            borderRadius="md"
            bgGradient="linear(to-r, teal.500,green.500)"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
          >
            Enviar
          </Button>
        </Stack>
        <Button
          w="auto"
          p={4}
          color="white"
          fontWeight="bold"
          borderRadius="md"
          bgGradient="linear(to-r, teal.500,green.500)"
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
        >
          <Link href={"/testando-serveless/users"}>
            <a>Ver usuários cadastrados</a>
          </Link>
        </Button>
      </Flex>
    </Flex>
  );
}
