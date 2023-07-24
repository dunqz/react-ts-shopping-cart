import Carousel from "react-bootstrap/Carousel";

export function HomeCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imgs/book.jpg"
          alt="First slide"
          height="350px"
          style={{ objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imgs/5G-drone.jpg"
          alt="Second slide"
          height="350px"
          style={{ objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imgs/banana.jpg"
          alt="Third slide"
          height="350px"
          style={{ objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
