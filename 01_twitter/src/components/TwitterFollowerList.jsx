import { TwitterFollowerStripe } from './TwitterFollowerStripe';

export function TwitterFollowerList({ userlist }) {
  return (
    <main className="grid gap-y-5">
      {userlist?.map((user) => {
        return (
          <TwitterFollowerStripe
            key={user.realname}
            following={user.following}
            username={user.username}
            realname={user.realname}
          />
        );
      })}
    </main>
  );
}
