// Button for viewing current favorites
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { favConst } from './FavouriteList'; // Importing favorite constructors
import { favCirc } from './FavouriteList'; // Importing favorite circuits
import { favDriver } from './FavouriteList'; // Importing favorite drivers
import { favCLear } from './FavouriteList';

export function FavoritesButt() {
  const [show, setShow] = useState(false); // State variable viewing modal

  // Function to close modal
  const handleClose = () => setShow(false);
  // Function to open modal
  const handleShow = () => setShow(true);

  const clearFavourites = () => {
    favCirc.length = 0
    favConst.length = 0
    favDriver.length = 0
    handleClose();
  }


  return (
    <>
      {/* The Favorites button */}
      <Button variant="primary" onClick={handleShow}>
        Favorites
      </Button>

      {/* Shows favorites modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Title>Favorites</Modal.Title>
        <Modal.Body>
          <div className="box-column" id="column2">
            {/* Table for displaying favorite drivers */}
            <table>
              <caption style={{ "padding": "10px" }}>Drivers</caption>
              <tbody>
                {/* lists drivers*/}
                {favDriver.message ? "" :
                  favDriver.map((driver, index) => (
                    <tr key={index}>
                      <td>{driver}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {/* table for displaying favorite constructors */}
            <table style={{ "width": "45%", "float": "right", "padding": "10px" }}>
              <caption style={{ "padding": "10px" }}>Constructors</caption>
              <tbody>
                {/* lists constructors */}
                {favConst.message ? "" :
                  favConst.map((cs, index) => (
                    <tr key={index}>
                      <td>{cs}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {/* Table for displaying favorite circuits */}
            <div>
              <table style={{ "width": "45%", "float": "right", "padding": "10px" }}>
                <caption style={{ "padding": "10px" }}>Circuits</caption>
                <tbody>
                  {/* lists circuits*/}
                  {favCirc.message ? "" :
                    favCirc.map((cs, index) => (
                      <tr key={index}>
                        <td>{cs}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* Button for closing Modal */}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={clearFavourites}>
            Clear Favourites
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FavoritesButt; // Exporting the component as default
