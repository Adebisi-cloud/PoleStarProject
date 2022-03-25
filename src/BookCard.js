import React, { useState } from "react";
import { Card, CardTitle, CardImg, CardBody, Button, Modal } from "reactstrap";

const BookCard = ({
  thumbnail,
  title,
  authors,
  published,
  infoLink,
  publisher,
  previewLink,
  description,
  pageCount,
  language,
  categories,
  industryIdentifiers
  
}) => {
  // Declaring my variables and Setter on display of images
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  console.log(authors, published);

  return (
    <Card style={{ width: "233px" }} className="m-auto ">
      <CardImg
        top
        style={{ width: "100%", height: "233px" }}
        src={
          thumbnail ||
          "https://media.istockphoto.com/photos/antique-leather-book-cover-picture-id183382838?k=20&m=183382838&s=612x612&w=0&h=Gi0iBncD4fv59TlsXbOOANtDyczqNEvWdZYW0DvWbXU="
        }
        alt="card image"
      />
      <CardBody>
        <CardTitle className="card-title">{title}</CardTitle>
        <Button onClick={toggle}>More Info</Button>
      </CardBody>
      <Modal isOpen={modal} toggle={toggle}>
        <div className="modal-header d-flex justify-content-center">
          <h5 className="modal-title text-center" id="exampleModalLabel">
            {title}
          </h5>
          <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={toggle}
          >
            <span aria-hidden={true}>X</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="d-flex justify-content-between ml-3">
            <img src={thumbnail} alt={title} style={{ height: "233px" }} />
            <div>
              <p>Authors: {authors.join(", ")}</p>
              <p>Published: {published}</p>
              <p>Publisher: {publisher}</p>
              <p>Language: {language}</p>
              <p>Categories: {categories}</p>
              <p>Page Count: {pageCount}</p>
             
              
            </div>
          </div>
          <div className="mt-3">{description}</div>
        </div>
        <div className="modal-footer">
          <div className="left-slide">
            <a
              href={previewLink}
              className="btn-link"
              color="default"
              type="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              PreviewLink
            </a>
          </div>
        </div>
        <div className="divider">
          <div className="right-slide">
            <a
              href={infoLink}
              className="btn-link"
              color="default"
              type="button"
              target="_blank"
              rel="nonpener noreferrer"
            >
              Info Link
            </a>
          </div>
        </div>
      </Modal>
    </Card>
  );
};

export default BookCard;
