import Link from "next/link";
import Image from "./Image";

const Leftbar = () => {
  const menulist = [
    { id: "2", name: "HomePage", link: "/", icon: "home.svg" },
    { id: "1", name: "Explore", link: "/", icon: "explore.svg" },
    { id: "3", name: "Notification", link: "/", icon: "notification.svg" },
    { id: "4", name: "Bookmark", link: "/", icon: "bookmark.svg" },
    { id: "5", name: "Job", link: "/", icon: "job.svg" },
    { id: "6", name: "Communities", link: "/", icon: "community.svg" },
    { id: "7", name: "Premium", link: "/", icon: "logo.svg" },
    { id: "8", name: "Profile", link: "/", icon: "profile.svg" },
    { id: "9", name: "Message", link: "/", icon: "message.svg" },
    { id: "10", name: "More", link: "/", icon: "more.svg" },
  ];
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* logo, menu, button */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        {/* logo */}
        <Link href="/">
          <Image
            path="public/icons/logo.svg"
            height={24}
            width={24}
            alt="logo"
          />
        </Link>

        {/* menulist */}
        <div className="flex flex-col gap-4">
          {menulist.map((item) => (
            <Link
              className="p-2 rounded-full hover:bg-[#181818] flex gap-4 items-center"
              href={item.link}
              key={item.id}
            >
              <Image
                path={`public/icons/${item.icon}`}
                height={24}
                width={24}
                alt={item.name}
              />
              <span className="hidden xxl:inline">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* button */}
        <Link
          href="/"
          className="xxl:hidden bg-white rounded-full font-bold w-12 h-12 flex items-center justify-center"
        >
          <Image
            path="public/icons/post.svg"
            height={24}
            width={24}
            alt="new post"
          />
        </Link>
        <Link
          href="/"
          className="hidden xxl:block text-black bg-white rounded-full font-bold py-2 px-20"
        >
          Post
        </Link>
      </div>
      {/* user  */}
      <div className="flex justify-between items-center">
        <div className=" flex gap-2 items-center">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image
              path="public/general/avatar.png"
              alt="lama dev"
              width={100}
              height={100}
              tr={true}
            />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-hidden">Tushu</span>
            <span className="text-sm text-textgray">@tushueth</span>
          </div>
        </div>
        <div className="font-bold hidden xxl:block cursor-pointer">...</div>
      </div>
    </div>
  );
};

export default Leftbar;
