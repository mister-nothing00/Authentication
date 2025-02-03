import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";
import React, { memo, useEffect, useState } from "react";

 function Info() {
  const [news, setNews] = useState([]);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    const fetchNewsAboutEnvironment = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=environment&apiKey=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Errore nella risposta della rete");
        }
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error("Errore fetching news:", error);
      }
    };

    fetchNewsAboutEnvironment();
  }, [apiKey]);

  return (
    <Box
      height="100vh"
      overflowY="auto"
      width={"25%"}
      display={{ base: "none", md: "block" }}
    >
      <Flex flexDir={"column"} boxShadow={"dark-lg"} px={4}>
        <Heading fontSize={"24px"} mt={8}>
          Notizie
        </Heading>
        {news.slice(0, 8).map((article, index) => (
          <Card key={index} my={8} size={"sm"}>
            <CardBody>
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} />
              )}
              <Text fontWeight="bold">{article.title}</Text>
              <Text>
                {article.description
                  ? article.description.substring(0, 100) + "..."
                  : "Nessuna descrizione disponibile."}
              </Text>
            </CardBody>
            <CardFooter>
              <Button
                bg={"blue.900"}
                color={"whiteAlpha.900"}
                as="a"
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Vai al sito
              </Button>
            </CardFooter>
          </Card>
        ))}
      </Flex>
    </Box>
  );
}

export default memo(Info);