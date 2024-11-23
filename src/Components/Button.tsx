import Link from "next/link";

export default function GameSelectButton({
  link,
  name,
}: {
  link: string;
  name: string;
}) {
  return (
    <Link
      href={link}
      className="box-border flex max-w-64 justify-center truncate border border-b-4 border-black bg-green-700 p-2 px-10 text-2xl text-white duration-200 hover:bg-green-800"
    >
      {name}
    </Link>
  );
}
