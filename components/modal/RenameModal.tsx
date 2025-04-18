"use client";

import { toast } from "sonner";
import { FormEventHandler, useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { api } from "@/convex/_generated/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useApiMutation } from "@/hook/UseApiMutation";
import { useRenameModal } from "@/store/useRenameModal";

const RenameModal = () => {
  const { mutate, pending } = useApiMutation(api.board.update);
  const { isOpen, close, initialValues } = useRenameModal();
  const [title, setTitle] = useState(initialValues.title);

  useEffect(() => {
    setTitle(initialValues.title);
  }, [initialValues.title]);

  const onConfirm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    mutate({ id: initialValues.id, title })
      .then(() => {
        close();
        toast.success("Board Title Updated!");
      })
      .catch(() => {
        close();
        toast.error("Failed to update board title");
      });
  };

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Rename Board Title</DialogTitle>
          <DialogDescription>Give a new title for this board</DialogDescription>
        </DialogHeader>
        <form onSubmit={onConfirm} className="space-y-4">
          <Input
            disabled={pending}
            required
            maxLength={60}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Board Title"
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={pending} type="submit">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RenameModal;
