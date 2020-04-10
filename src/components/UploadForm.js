import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { beginAddPhoto } from "../actions/photos";

const UploadForm = (props) => {
  const [photo, setPhoto] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOnChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (photo) {
      props.dispatch(beginAddPhoto(photo));
      setIsSubmitted(true);
    }
  };

  return (
    <React.Fragment>
      {props.errors && props.errors.upload_error ? (
        <p className="errorMsg centered-message">{props.errors.upload_error}</p>
      ) : (
        isSubmitted && (
          <p className="successMsg centered-message">
            Photo uploaded successfully.
          </p>
        )
      )}
      <Form
        onSubmit={handleFormSubmit}
        method="post"
        encType="multipart/form-data"
        className="upload-form"
      >
        <Form.Group>
          <Form.Label>Choose Photo to upload</Form.Label>
          <Form.Control type="file" name="photo" onChange={handleOnChange} />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="submit-btn"
          disabled={photo ? false : true}
        >
          Upload
        </Button>
      </Form>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  photos: state.photos || [],
  errors: state.errors || {}
});

export default connect(mapStateToProps)(UploadForm);
