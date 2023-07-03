import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'

export const FriendListLtem = ({ avatar, name, isOnline, id }) => {
 
    return (<li className={css.item} key={id}>
     
        <span className={css.status} style={{backgroundColor: isOnline ? 'green' : 'red'}}>{isOnline}</span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>)
    
};



FriendListLtem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
}