import type { Metadata } from "next";
import "./globals.css";
import Rightbar from "@/components/Rightbar";
import Leftbar from "@/components/Leftbar";

export const metadata: Metadata = {
  title: "X CLONE",
  description: "frontend for xclone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-md lg:max-w-screen-lg mx-auto xl:max-w-screen-xl xxl:max-w-screen-xxl  flex justify-between">
          <div className="h-screen px-2 xsm:px-4 xxl:px-8">
            <Leftbar />
          </div>

          <div className=" lg:min-w-[600px] border-x-[1px] border-bordergray flex-1 ">
            {children}
          </div>

          <div className="hidden lg:flex flex-1 h-screen ml-4 md:ml-8">
            <Rightbar />
          </div>
        </div>
      </body>
    </html>
  );
}
