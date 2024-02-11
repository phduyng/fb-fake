import { Button } from "@/components/shared/ui/button";
import * as Dialog from "@radix-ui/react-dialog";

const TestDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Click</Button>
      </Dialog.Trigger>
    </Dialog.Root>
  );
};

export default TestDialog;
