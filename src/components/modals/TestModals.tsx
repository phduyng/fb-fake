import { FC, useEffect, useState } from "react";
import { Dialog, DialogContent } from "../shared/ui/dialog";
import { useModal } from "@/hooks/useModal";

interface TestModalsProps {}

const TestModals: FC<TestModalsProps> = ({}) => {
  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === "createServer";

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="fixed z-50 h-40 w-full overflow-hidden bg-white text-black">
        <div>Hiiiiiiiiiiiiiiiiii</div>
      </DialogContent>
    </Dialog>
  );
};

export default TestModals;
