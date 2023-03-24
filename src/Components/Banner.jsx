import Carousel from "react-bootstrap/Carousel";
export function Banner() {
  return (
    <div className="my-3 rounded-4 px-3" >
      <Carousel className="rounded-4 ">
        <Carousel.Item interval={2000} className="rounded-4">
          <img
            className="d-block w-100  rounded-4 "
            src="https://img.freepik.com/free-vector/modern-green-wave-style-banner-template-design_1055-16153.jpg"
            height={215}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000} className="rounded-4">
          <img
            className="d-block w-100 rounded-4  "
            src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/5fed81142f212_json_image_1609400596.webp"
            height={215}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000} className="rounded-4">
          <img
            className="d-block w-100 rounded-4  "
            src="https://t3.ftcdn.net/jpg/04/34/19/08/360_F_434190838_3FCCIiag1LYlL1IA6pb0WPEEqxiZVfPO.jpg"
            height={215}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
