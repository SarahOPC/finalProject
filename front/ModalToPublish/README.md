# ModalComponent

ModalComponent is a simple modal component for React that displays a success message ("Employee Created") upon successful completion of a form.

## Installation

You can install the ModalComponent package via npm:

npm install modaltopublish

## Usage
To use the ModalComponent in your React project, import it :

import React, { useState } from 'react';
import { ModalComponent } from 'modaltopublish';

Then add the component to your form handling logic:

Assuming you have a form submission function (handleFormSubmit) and a function to close the modal (handleCloseModal):

const YourFormComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle successful form submission
  const handleFormSubmit = () => {
    // Your form validation logic goes here
    // If form is valid, set isModalOpen to true to display the modal
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Your form goes here */}
      {/* On successful form submission, set isModalOpen to true */}
      {isModalOpen && <ModalComponent handleCloseModalClick={handleCloseModal} />}
    </div>
  );
};

export default YourFormComponent;

## Props
handleCloseModalClick
Type: Function
Description: Callback function to close the modal when the close icon is clicked.

## Dependencies
styled-components
@fortawesome/react-fontawesome
@fortawesome/free-solid-svg-icons

## License
This project is licensed under the ISC License.