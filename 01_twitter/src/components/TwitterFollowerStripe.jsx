export function TwitterFollowerStripe({ username, realname, following }) {
  const AVATAR_BASE_URL = 'https://unavatar.io/';

  return (
    <article className="flex items-center justify-between w-[300px]">
      <main className=" flex items-center gap-x-2">
        <img
          className="rounded-full w-12 h-12"
          src={AVATAR_BASE_URL + username}
        />
        <div className="flex flex-col text-white text-xs">
          <strong>{realname}</strong>
          <p className="text-zinc-400">@{username}</p>
        </div>
      </main>

      {following ? (
        <button className="outline outline-white outline-2 w-fit h-fit text-white text-xs font-semibold self-center px-6 rounded-2xl">
          Seguiendo
        </button>
      ) : (
        <button className="outline outline-white bg-white outline-2 w-fit h-fit text-[#22222] text-xs font-semibold self-center px-6 rounded-2xl">
          Seguir
        </button>
      )}
    </article>
  );
}
