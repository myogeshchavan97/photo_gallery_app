/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { startLoadPhotos } from '../actions/photos';
import Photo from './Photo';

const Gallary = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    props.dispatch(startLoadPhotos());
  }, []);

  useEffect(() => {
    if (props.photos.length > 0) {
      setIsLoading(false);
    }
  }, [props.photos]);

  return (
    <div className="photos-list">
      {props.errors && props.errors.get_error && (
        <p className="errorMsg centered-message">{props.errors.get_error}</p>
      )}
      {isLoading ? (
        <div className="loading-msg centered-message">Loading...</div>
      ) : (
        props.photos.map((photo) => <Photo key={photo._id} id={photo._id} />)
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  photos: state.photos || [],
  errors: state.errors || {}
});

export default connect(mapStateToProps)(Gallary);
