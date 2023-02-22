import { Children } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "github",
    name: "Github",
    isFollowing: true,
  },
  {
    userName: "youtube",
    name: "Youtube",
    isFollowing: false,
  },
  {
    userName: "reddit",
    name: "Reddit",
    isFollowing: false,
  },
]


export function App() {
 
  return (
    <section className="App">
      
      {
        users.map((user) => {
          const { userName, name, isFollowing } = user
          return (
            <TwitterFollowCard
              userName={userName}
              initialIsFollowing={isFollowing}
              key={name}
            >
            {name}
            </TwitterFollowCard>
          )
        })
      }
      
    </section>
  );
}
