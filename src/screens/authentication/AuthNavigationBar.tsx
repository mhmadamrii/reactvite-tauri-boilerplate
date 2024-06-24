import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';

import { Bluetooth } from 'lucide-react';

export default function AuthNavigationBar() {
  return (
    <div className="flex w-full items-center justify-between border-b px-4 pb-4 pt-5">
      <div>
        <h1 className="font-semibold">Prisma Form Pro</h1>
      </div>

      <div className="cursor-pointer">
        <div className="rounded-full bg-blue-300 p-2">
          <Bluetooth color="#2d4ed2" />
        </div>
      </div>

      <div>
        <Select>
          <SelectTrigger className="w-[180px] bg-blue-500 font-semibold text-white">
            <SelectValue placeholder="Muhammad Taher" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">
                Blueberry
              </SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">
                Pineapple
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
