import { useState } from "react";

export function TwitterFollowCard({ userName = 'unknown', children, initialIsFollowing}){

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  
  const imgSrc = `https://unavatar.io/${userName}`;
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'
  
  const handleClick = () => setIsFollowing(!isFollowing)

  return (
    <article className="tw-followCard">

      <header className="tw-followCard-header">
        <img alt="avatar" src={imgSrc} className="tw-followCard-avatar" />
        <div className="tw-followCard-info">
          <strong className="tw-followCard-name">{children} </strong>
          <span className="tw-followCard-userName">@{ userName } </span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
        <span className="tw-followCard-text">{text}</span>
        <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>

    </article>
  );
}
