import React from 'react';
import './tracklist.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
  render () {
    return (
      <div className="TrackList">
      {this.props.tracks.map(track => {
        return <Track tracks={track} key={track.id} onAdd={this.props.onAdd}/>;
        })}
      </div>
    )
  }
}

export default TrackList;
