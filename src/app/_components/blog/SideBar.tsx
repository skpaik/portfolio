"use client";
import Link from "next/link";
import { BlogMenu } from "@/app/_models/BlogModels";

type Props = {
  sideBarList: BlogMenu[];
};

export default function SideBar({ sideBarList }: Props) {
  return (
    <ul className="space-y-1">
      {sideBarList.map((blogMenu: BlogMenu, index) => {
        let cssClassNames =
          "text-gray-500 hover:bg-gray-100 hover:text-gray-700";
        if (blogMenu.isActive) {
          cssClassNames = "bg-gray-100 text-gray-700";
        }
        return (
          <li key={index}>
            <Link
              href={blogMenu.url}
              className={`group flex items-center justify-between rounded-lg px-4 py-2 ${cssClassNames}`}
            >
              <span className="text-sm font-medium"> {blogMenu.label} </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
