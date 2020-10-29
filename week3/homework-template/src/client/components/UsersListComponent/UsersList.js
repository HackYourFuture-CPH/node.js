/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import './UsersListStyle.css';

export default function Userslist({ data, user, onCreateConversation }) {
  if (!user || !data) {
    return <ul className="user-list" />;
  }
  return (
    <ul className="user-details">
      {data.map(({ id, user_name, profile_image }) => (
        <li
          key={id}
          role="presentation"
          className="user-list-in-search"
          onClick={() => onCreateConversation(id, user)}
        >
          <div className="search-user-render">
            <div className="search-image-container">
              <img
                src={profile_image}
                alt={profile_image}
                className="search-image"
              />
            </div>
            <div className="search-name">{user_name}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

Userslist.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      user_name: PropTypes.string,
      profile_image: PropTypes.string,
    }),
  ).isRequired,
  user: PropTypes.shape({}).isRequired,
  onCreateConversation: PropTypes.func.isRequired,
};
