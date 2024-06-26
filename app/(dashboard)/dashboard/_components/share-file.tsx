import { Copy, ShareIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { env } from "@/env.mjs"
import { File } from "@prisma/client"
import CopyBtn from "./copy-btn"

export function FileShareBtn({ file }: { file: File }) {
  const rootUrl = env.NEXT_PUBLIC_APP_URL
  const edgeStoreId = file.fileUrl.split('/')[6]
  const sharableUrl = `${rootUrl}/files/f/${edgeStoreId}`
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full py-[-20px] flex justify-start items-center" variant={'ghost'} size={'sm'}>
         <ShareIcon className="w-4 h-4 mr-2"/> Share

        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[calc(100%_+_40px)] bg-gradient-to-br from-purple-400/10 rounded-md  via-transparent to-transparent/5">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue={sharableUrl}
              readOnly
            />
          </div>
          <CopyBtn link={sharableUrl} />
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
