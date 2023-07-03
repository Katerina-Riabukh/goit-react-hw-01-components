
import PropTypes from 'prop-types';
import { TiHeartOutline, TiEyeOutline, TiGroupOutline } from "react-icons/ti";
import css from './Profile.module.css'



export const ProfileUser = ({
    avatar,
    username,
    tag,
    location,
    stats: { likes, views, followers } }) => {
  
    return <div className={css.profile}>
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
             className={css.avatar}
             width="200"
             height="200"
    />
         <p className="name">{ username }</p>
         <p className="tag">@{ tag}</p>
         <p className="location">{ location}</p>
  </div>

        <ul className={css.stats}>
    <li className={css.listStyle}>
      <span className="label"><TiGroupOutline size={24} /></span>
          <span className="quantity">{followers}</span>
    </li>
    <li className={css.listStyle}>
      <span className="label"><TiEyeOutline size={24}/></span>
      <span className="quantity">{views}</span>
    </li>
    <li className={css.listStyle}>
          <span className="label"><TiHeartOutline size={24}/></span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
</div>
}

ProfileUser.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    likes: PropTypes.number,
    views: PropTypes.number,
    followers: PropTypes.number,
}

