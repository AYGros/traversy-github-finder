import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const UserItem = ({user:{avatar_url, login, id, html_url}}) => {

  // Anmerkung: klassisch mit constructor, aber nicht wirklich nötig. Einfacher siehe unten
  // constructor() {
  //   super();
  //   this.state = {
  //     id: 'id',
  //     login: 'mojombo',
  //     avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
  //     html_url: "https://github.com/mojombo"
  //   }
  // }

  // state = {
  //       id: 'id',
  //       login: 'mojombo',
  //       avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
  //       html_url: "https://github.com/mojombo"
  //     }

    return (
      <div className="card text-center">
        <img src={avatar_url} alt="" className="round-img" style={{width: "60px"}} />
        <h3>{login}</h3>
        <div>

          <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
            More
          </Link>
        </div>
      </div>
    )
}

UserItem.propTypes = {
 user: PropTypes.object.isRequired,
}

export default UserItem
