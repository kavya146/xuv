import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

function MyVerticallyCenteredModal(props) {
  const { title, images = [] } = props;
  console.log(props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel>
          {images.map((obj) => (
            <Carousel.Item>
              <img className="caro-img" src={obj.url} />
              <div>{obj.description}</div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
