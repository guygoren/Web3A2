import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { favConst } from './FavouriteList';
import { favCirc } from './FavouriteList';
import { favDriver } from './FavouriteList';

export function FavoritesButt() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
          <Modal.Title>Favorites</Modal.Title>
        <Modal.Body>
        <div className="box-column" id="column2">
          <table>
        <caption style={{"padding": "10px"}}>Drivers</caption>
          <tbody>
            {favDriver.message ? "" :
              favDriver.map((driver, index) => (
              <tr key={index}>
                <td>{driver}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table style={{ "width": "45%", "float": "right", "padding": "10px" }}>
        <caption style={{"padding": "10px"}}>Constructors</caption>
          <tbody>
            {favConst.message ? "" :
              favConst.map((cs, index) => (
              <tr key={index}>
                <td>{cs}</td>
              </tr>
            ))}
          </tbody>
          
        </table>
      </div>
      <div>
      <table style={{ "width": "45%", "float": "right", "padding": "10px" }}>
        <caption style={{"padding": "10px"}}>Circuits</caption>
          <tbody>
            {favCirc.message ? "" :
              favCirc.map((cs, index) => (
              <tr key={index}>
                <td>{cs}</td>
              </tr>
            ))}
          </tbody>
          
        </table>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FavoritesButt;