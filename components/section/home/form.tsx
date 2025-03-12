import { Button, Heading, Progress, SegmentedControl } from "@radix-ui/themes";

const resetHandle = () => {};

export default function Form() {
  return (
    <>
      <Heading>Pick a Winner.</Heading>
      <form action="">
        <SegmentedControl.Root defaultValue="inbox">
          <SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
          <SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
          <SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
        </SegmentedControl.Root>
        <Button>Reset form</Button>
      </form>
    </>
  );
}
