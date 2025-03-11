import {
  CopyIcon,
  InfoCircledIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import {
  Avatar,
  Badge,
  Box,
  Callout,
  Card,
  Checkbox,
  CheckboxCards,
  CheckboxGroup,
  Code,
  DataList,
  Flex,
  Heading,
  IconButton,
  Link,
  Tabs,
  Text,
  TextField,
} from "@radix-ui/themes";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Heading>Pick a Winner.</Heading>
        <Text>Pick a Winner.</Text>
        <Avatar
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
        />
        <Flex gap="2">
          <Badge color="orange">In progress</Badge>
          <Badge color="blue">In review</Badge>
          <Badge color="green">Complete</Badge>
        </Flex>
        <Callout.Root size="2">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            You will need admin privileges to install and access this
            application.
          </Callout.Text>
        </Callout.Root>

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

        <Text as="label" size="2">
          <Flex gap="2">
            <Checkbox defaultChecked />
            Agree to Terms and Conditions
          </Flex>
        </Text>

        <CheckboxGroup.Root defaultValue={["1"]} name="example">
          <CheckboxGroup.Item value="1">Fun</CheckboxGroup.Item>
          <CheckboxGroup.Item value="2">Serious</CheckboxGroup.Item>
          <CheckboxGroup.Item value="3">Smart</CheckboxGroup.Item>
        </CheckboxGroup.Root>

        <Box maxWidth="600px">
          <CheckboxCards.Root
            defaultValue={["1"]}
            columns={{ initial: "1", sm: "3" }}
          >
            <CheckboxCards.Item value="1">
              <Flex direction="column" width="100%">
                <Text weight="bold">A1 Keyboard</Text>
                <Text>US Layout</Text>
              </Flex>
            </CheckboxCards.Item>
            <CheckboxCards.Item value="2">
              <Flex direction="column" width="100%">
                <Text weight="bold">Pro Mouse</Text>
                <Text>Zero-lag wireless</Text>
              </Flex>
            </CheckboxCards.Item>
            <CheckboxCards.Item value="3">
              <Flex direction="column" width="100%">
                <Text weight="bold">Lightning Mat</Text>
                <Text>Wireless charging</Text>
              </Flex>
            </CheckboxCards.Item>
          </CheckboxCards.Root>
        </Box>

        <DataList.Root>
          <DataList.Item align="center">
            <DataList.Label minWidth="88px">Status</DataList.Label>
            <DataList.Value>
              <Badge color="jade" variant="soft" radius="full">
                Authorized
              </Badge>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">ID</DataList.Label>
            <DataList.Value>
              <Flex align="center" gap="2">
                <Code variant="ghost">u_2J89JSA4GJ</Code>
                <IconButton
                  size="1"
                  aria-label="Copy value"
                  color="gray"
                  variant="ghost"
                >
                  <CopyIcon />
                </IconButton>
              </Flex>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Name</DataList.Label>
            <DataList.Value>Vlad Moroz</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Email</DataList.Label>
            <DataList.Value>
              <Link href="mailto:vlad@workos.com">vlad@workos.com</Link>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Company</DataList.Label>
            <DataList.Value>
              <Link target="_blank" href="https://workos.com">
                WorkOS
              </Link>
            </DataList.Value>
          </DataList.Item>
        </DataList.Root>

        <TextField.Root placeholder="Search the docs…">
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>

        <Tabs.Root defaultValue="account">
          <Tabs.List>
            <Tabs.Trigger value="account">Account</Tabs.Trigger>
            <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
            <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
          </Tabs.List>

          <Box pt="3">
            <Tabs.Content value="account">
              <Text size="2">Make changes to your account.</Text>
            </Tabs.Content>

            <Tabs.Content value="documents">
              <Text size="2">Access and update your documents.</Text>
            </Tabs.Content>

            <Tabs.Content value="settings">
              <Text size="2">
                Edit your profile or update contact information.
              </Text>
            </Tabs.Content>
          </Box>
        </Tabs.Root>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
