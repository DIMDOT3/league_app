import React from 'react';
import './RosterItem.css';

const RosterItem = ({ player, handleDelete }) => (
  <div className="roster-item row">
    <div className="col-sm-12 col-md-3 roster-item-content">
      <p><strong>{ player.last_name }, { player.first_name }</strong></p>
    </div>
    <div className="col-sm-12 col-md-3 roster-item-content">
      <p>Rating: { player.rating }</p>
    </div>
    <div className="col-sm-12 col-md-3 roster-item-content">
      <p>Handedness: { player.handedness }</p>
    </div>
    <div className="col-sm-12 col-md-3">
      <i className="far fa-trash-alt delete" onClick={handleDelete}></i>
    </div>
  </div>
);

export default RosterItem;
