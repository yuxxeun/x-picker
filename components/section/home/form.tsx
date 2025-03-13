'use client'

import { useState } from "react";
import { Avatar, Box, Button, Card, CheckboxGroup, Flex, Heading, HoverCard, Text, TextField, SegmentedControl } from "@radix-ui/themes";
import Header from "./header";

export default function Form() {
  const [tweetUrl, setTweetUrl] = useState(""); 
  const [selectedOptions, setSelectedOptions] = useState(["1"]); 
  const [selectedUserCount, setSelectedUserCount] = useState("inbox"); 

  const resetHandle = () => {
    setTweetUrl(""); 
    setSelectedOptions(["1"]); 
    setSelectedUserCount("inbox"); 
  };

  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTweetUrl(event.target.value);
  };

  // Handle the submit action
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Tweet URL:", tweetUrl);
    console.log("Selected Options:", selectedOptions);
    console.log("Selected User Count:", selectedUserCount);

    // You can perform further actions here, like calling an API or updating a state.
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}> {/* Attach handleSubmit to form submission */}
        <Box maxWidth="250px">
          <TextField.Root 
            size="2" 
            value={tweetUrl} 
            onChange={handleTextFieldChange} 
            placeholder="Paste tweet URL"
          />
        </Box>
        
        <div className="mt-3">
          <Heading>Pilih berdasarkan:</Heading>
          <CheckboxGroup.Root value={selectedOptions} onValueChange={setSelectedOptions} name="example">
            <CheckboxGroup.Item value="1">Like</CheckboxGroup.Item>
            <CheckboxGroup.Item value="2">Retweet</CheckboxGroup.Item>
            <CheckboxGroup.Item value="3">Quote Retweet</CheckboxGroup.Item>
          </CheckboxGroup.Root>
        </div>

        <div className="my-3">
          <SegmentedControl.Root value={selectedUserCount} onValueChange={setSelectedUserCount}>
            <SegmentedControl.Item value="inbox">1 user</SegmentedControl.Item>
            <SegmentedControl.Item value="drafts">2 user</SegmentedControl.Item>
            <SegmentedControl.Item value="sent">3 user</SegmentedControl.Item>
          </SegmentedControl.Root>
        </div>

        <Flex gap="2" align="center">
            <Button type="submit">Submit</Button> {/* Change to type="submit" */}
            <Button type="button" onClick={resetHandle}>Reset form</Button> 
        </Flex> 
      </form>

      {/* Jika syarat sudah terpenuhi maka hasil pemenang akan ditampikan profilnya  */}
      <div className="my-3">
        <Heading>Hasil</Heading>
        <HoverCard.Root>
          <HoverCard.Trigger>
            <Card>
              <Flex gap="3" align="center">
                <Avatar
                  size="3"
                  src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                  radius="full"
                  fallback="T"
                />
                <Box>
                  <Text as="div" size="2" weight="bold">
                    Teodros Girmay
                  </Text>
                  <Text as="div" size="2" color="gray">
                    Engineering
                  </Text>
                </Box>
              </Flex>
            </Card>
          </HoverCard.Trigger>
          
          <HoverCard.Content maxWidth="300px">
            <Flex gap="4">
              <Avatar
                size="3"
                fallback="R"
                radius="full"
                src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
              />
              <Box>
                <Heading size="3" as="h3">
                  Radix
                </Heading>
                <Text as="div" size="2" color="gray" mb="2">
                  @radix_ui
                </Text>
                <Text as="div" size="2">
                  React components, icons, and colors for building high-quality,
                  accessible UI.
                </Text>
              </Box>
            </Flex>
          </HoverCard.Content>
        </HoverCard.Root>
      </div>
    </>
  );
}
