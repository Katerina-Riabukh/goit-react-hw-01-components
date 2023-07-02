
import PropTypes from 'prop-types';
import { TiHeartOutline, TiEyeOutline, TiGroupOutline  } from "react-icons/ti";

const listStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  border: "1px solid black",
   borderRadius: "15px",
  padding: '10px',
  flexBasis: " calc((100% - 9px) /3)",
   backgroundColor: "gainsboro"
};

const ulStyle = {
  display: 'flex',
  padding: '0px',
  textAlign: 'center',
  marginBottom: "0px",
  gap: "3px"
};

const imgStyle = {
  borderRadius: "50%",
  border: "0.5px solid gray"
}

const divStyle = {
  width: "400px",
  textAlign: "center",
  paddingTop: "25px",
  paddingBottom: "5px",
  paddingLeft: "5px",
  paddingRight: "5px",
  backgroundColor: "white",
  borderRadius: "15px",
  marginLeft: "auto",
  marginRight: "auto",
  boxShadow: '0px 1px 1px rgba(46, 47, 66, 0.16), 0px 3px 1px rgba(46, 47, 66, 0.08), 9px -2px 11px -7px rgba(0,0,0,0.75)',
}
  
const icon = {

}

export const ProfileUser = ({
    avatar,
    username,
    tag,
    location,
    stats: { likes, views, followers } }) => {
  
    return <div className="profile" style={divStyle}>
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
             className="avatar"
             width="200"
                height="200"
                style={imgStyle}
    />
         <p className="name">{ username }</p>
         <p className="tag">@{ tag}</p>
         <p className="location">{ location}</p>
  </div>

        <ul className="stats" style={ulStyle}>
    <li style={listStyle}>
      <span className="label"><TiGroupOutline size={24} /></span>
          <span className="quantity">{followers}</span>
    </li>
    <li style={listStyle}>
      <span className="label"><TiEyeOutline size={24}/></span>
      <span className="quantity">{views}</span>
    </li>
    <li style={listStyle}>
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

