import GameSelectButton from "~/Components/Button";

export default function HomePage() {
  return (
      <div className="flex h-full flex-col items-center justify-center">
        <div className="text-6xl text-white my-10">Dofudle</div>
          <div className="flex flex-col w-fit rounded-md px-20 py-16 gap-5 bg-dprimary border-[3px] border-dsecondary">
            <GameSelectButton link="/spells" name="Spells" />
            <GameSelectButton link="" name="More Coming Soon" />
          </div>
      </div>
  );
}



