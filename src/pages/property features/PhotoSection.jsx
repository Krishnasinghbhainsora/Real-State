import React, { useState } from "react";
import { Form, Row, Col, Button, Modal } from "react-bootstrap";

const PhotosSection = () => {
  const [photos, setPhotos] = useState({
    "Exterior View": [],
    "Master Plan": [],
    "Location Map": [],
    "Other": [],
  });
  const [showModal, setShowModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");

  const handleShow = (category) => {
    setCurrentCategory(category);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleFileChange = (e) => {
    const selectedPhotos = Array.from(e.target.files);
    setPhotos({
      ...photos,
      [currentCategory]: [...photos[currentCategory], ...selectedPhotos],
    });
    handleClose();
  };

  const handleDeleteImage = (category, index) => {
    const updatedPhotos = photos[category].filter((_, i) => i !== index);
    setPhotos({ ...photos, [category]: updatedPhotos });
  };

  return (
    <>
      <h5 className="mt-3">Photos</h5>
      <Form.Group controlId="photos">
        <Form.Label>Add Photos</Form.Label>
        <Row>
          {Object.keys(photos).map((category) => (
            <Col key={category} xs={6} md={3} className="mb-3">
              <Button
                variant="outline-primary"
                onClick={() => handleShow(category)}
                className="w-100"
              >
                {category}
              </Button>
              <div className="mt-2">
                {photos[category].map((photo, index) => (
                  <div key={index} className="position-relative">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`${category} ${index + 1}`}
                      className="img-thumbnail"
                    />
                    <Button
                      variant="danger"
                      size="sm"
                      className="position-absolute top-0 end-0"
                      onClick={() => handleDeleteImage(category, index)}
                    >
                      &times;
                    </Button>
                  </div>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Form.Group>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Photos - {currentCategory}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="uploadPhotos">
            <Form.Label>Select Photos</Form.Label>
            <Form.Control
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PhotosSection;
