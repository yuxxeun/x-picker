"use client";

import { Box, Flex, Progress } from "@radix-ui/themes";

export default function LoadingScreen() {
  return (
    <>
      <Flex direction="column" gap="4" maxWidth="300px">
        <Progress value={25} size="1" />
        <Progress value={50} size="2" />
        <Progress value={75} size="3" />
      </Flex>
    </>
  );
}
