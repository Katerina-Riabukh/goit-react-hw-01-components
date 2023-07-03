import PropTypes from 'prop-types';
import { FriendListLtem } from "./FriendListItem"
import css from './FriendList.module.css'

export const FriendList = ({ friends }) => {
   
    return (
        <ul className={css.friendList}>
            {friends.map(( friend) => (
              <FriendListLtem  {...friend} key={friend.id}/>
          ))}
            
        </ul>
    );
}

FriendList.propTypes = {
   friends:  PropTypes.arrayOf(PropTypes.object)
}