import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const PhotosSection = ({
  showModal,
  handleShow,
  handleClose,
  handleFileChange,
  handleDeleteImage,
  photos
}) => (
  <>
    <h5 className="mt-3">Photos</h5>
            <p>It's Optional! But, don't forget to upload them later.</p>
            <Tab.Container activeKey={activeTab} onSelect={handleSelect}>
              <Nav variant="tabs" className="mb-2">
                <Nav.Item>
                  <Nav.Link eventKey="exteriorView">Exterior View</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="masterPlan">Master Plan</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="locationMap">Location Map</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="others">Others</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="exteriorView">
                  <div className="photo-upload-box">
                    <p className="pt-2">
                      85% of Buyers enquire on Properties with Photos. Upload
                      Photos & Get up to 10x more Enquiries
                    </p>
                    <Button
                      variant="outline-danger"
                      className="mt-3"
                      onClick={() => handleShow("Exterior View")}
                    >
                      Add Photos Now
                    </Button>
                    {/* Preview images for "Exterior View" */}
                    <div className="image-previews mt-3">
                      {photos["Exterior View"].map((file, index) => (
                        <div key={index} className="image-container">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`preview-${index}`}
                            className="uploaded-image-preview"
                          />
                          <button
                            className="delete-image-button"
                            onClick={() =>
                              handleDeleteImage("Exterior View", index)
                            }
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="masterPlan">
                  <div className="photo-upload-box">
                    <p className="pt-2">
                      85% of Buyers enquire on Properties with Photos. Upload
                      Photos & Get up to 10x more Enquiries
                    </p>
                    <Button
                      variant="outline-danger"
                      className="mt-3"
                      onClick={() => handleShow("Master Plan")}
                    >
                      Add Photos Now
                    </Button>
                    {/* Preview images for "Master Plan" */}
                    <div className="image-previews mt-3">
                      {photos["Master Plan"].map((file, index) => (
                        <div key={index} className="image-container">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`preview-${index}`}
                            className="uploaded-image-preview"
                          />
                          <button
                            className="delete-image-button"
                            onClick={() =>
                              handleDeleteImage("Master Plan", index)
                            }
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="locationMap">
                  <div className="photo-upload-box">
                    <p className="pt-2">
                      85% of Buyers enquire on Properties with Photos. Upload
                      Photos & Get up to 10x more Enquiries
                    </p>
                    <Button
                      variant="outline-danger"
                      className="mt-3"
                      onClick={() => handleShow("Location Map")}
                    >
                      Add Photos Now
                    </Button>
                    {/* Preview images for "Location Map" */}
                    <div className="image-previews mt-3">
                      {photos["Location Map"].map((file, index) => (
                        <div key={index} className="image-container">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`preview-${index}`}
                            className="uploaded-image-preview"
                          />
                          <button
                            className="delete-image-button"
                            onClick={() =>
                              handleDeleteImage("Location Map", index)
                            }
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="others">
                  <div className="photo-upload-box">
                    <p className="pt-2">
                      85% of Buyers enquire on Properties with Photos. Upload
                      Photos & Get up to 10x more Enquiries
                    </p>
                    <Button
                      variant="outline-danger"
                      className="mt-3"
                      onClick={() => handleShow("Others")}
                    >
                      Add Photos Now
                    </Button>
                    {/* Preview images for "Others" */}
                    <div className="image-previews mt-3">
                      {photos["Others"].map((file, index) => (
                        <div key={index} className="image-container">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`preview-${index}`}
                            className="uploaded-image-preview"
                          />
                          <button
                            className="delete-image-button"
                            onClick={() => handleDeleteImage("Others", index)}
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            {/* Modal for Adding Photos */}
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Upload Photos - {currentCategory}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group>
                  <Form.Label>Select Images</Form.Label>
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

            <div className="photo-guidelines mt-4">
              <p >
                Accepted formats are .jpeg, .gif, .bmp, & .png. Maximum size
                allowed is 20 MB. Minimum dimensions allowed 600x400 Pixel.
              </p>
              <p>
                You can also email them to us for uploading at photos@zwolf.com
              </p>
              <div className="image-guidelines d-flex justify-content-between">
                <img
                  src="valid.jpg"
                  alt="Valid example"
                  className="guideline-img"
                />
                <img
                  src="invalid1.jpg"
                  alt="Invalid example 1"
                  className="guideline-img"
                />
                <img
                  src="invalid2.jpg"
                  alt="Invalid example 2"
                  className="guideline-img"
                />
              </div>
            </div>  </>
);

export default PhotosSection;
