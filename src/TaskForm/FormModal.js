import React from 'react'
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export const FormModal = ({ title, onClose, showModal, submit, reset, children }) => {
  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={submit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};