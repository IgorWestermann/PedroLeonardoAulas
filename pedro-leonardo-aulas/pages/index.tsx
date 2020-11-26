//import Head from "next/head";

import { Button, Flex, Grid, Heading, Input, Select, SimpleGrid } from "@chakra-ui/react"

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 380px 380px 1fr"
      templateRows="1fr 380px 1fr"
      templateAreas="
        '. . . .'
        '. text form .'
        '. . . .'
      "
      justifyContent="center"
      // alignItems="center"
    >
      <Flex gridArea="text" flexDir="column" alignItems="flex-start" >
        <Heading size="2xl" fontWeight="bold" lineHeight="none" marginTop={8}>Bem vindo ao meu site!</Heading>
        <Heading size="lg" fontWeight="medium" lineHeight="none" marginTop={6}>Gostaria de marcar uma aula particular?</Heading>
      </Flex>

      <Flex
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={10}
      >
        <Input
          height="50px"
          backgroundColor="gray.800"
          focusBorderColor="blue.200"
          borderRadius="sm"
          placeholder="Nome"
        >
        </Input>
        <Input
          height="50px"
          backgroundColor="gray.800"
          focusBorderColor="blue.200"
          borderRadius="sm"
          placeholder="E-mail"
          marginTop={2}
        >
        </Input>
        <SimpleGrid columns={2} spacing={2}>
          <Input
            isRequired
            height="50px"
            backgroundColor="gray.800"
            focusBorderColor="blue.200"
            borderRadius="sm"
            placeholder="Telefone"
            marginTop={2}
          >
          </Input>
          <Select
            isRequired
            height="50px"
            backgroundColor="gray.800"
            focusBorderColor="blue.200"
            color="#4B4B43"
            _hover={{ color: 'white' }}
            borderRadius="sm"
            placeholder="Materia"
            marginTop={2}
          >
            <option value="option1">Matemátca</option>
            <option value="option2">Física</option>
            <option value="option3">Química</option>
          </Select>
        </SimpleGrid>
        <Input
          isRequired
          height="50px"
          backgroundColor="gray.800"
          focusBorderColor="blue.200"
          borderRadius="sm"
          placeholder="Por onde me conheceu?"
          marginTop={2}
        >
        </Input>

        <SimpleGrid columns={2} spacing={2}>

        </SimpleGrid>
        <Button
          height="50px"
          marginTop={4}
          borderRadius="sm"
        >
          Enviar!
        </Button>

      </Flex>

    </Grid>
  );
}
