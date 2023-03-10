import Carousel from 'react-bootstrap/Carousel';

export function Banner() {
  return (
 <div className="container-fluid">
     <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 my-4 mx-3 "
          src="https://img.freepik.com/free-vector/modern-green-wave-style-banner-template-design_1055-16153.jpg" height={215}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 my-4 rounded mx-3 "
          src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/5fed81142f212_json_image_1609400596.webp" height={215}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img 
          className="d-block w-100 rounded my-4 mx-3 "
          src="https://t3.ftcdn.net/jpg/04/34/19/08/360_F_434190838_3FCCIiag1LYlL1IA6pb0WPEEqxiZVfPO.jpg" height={215}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
 </div>
  );
}












// export function Banner() {
//     return (
//       <>
//         <div className="container-fluid mt-0">
         
//             <div className="row">
//               <div className="col-12">
//                 <img className="w-100"
//                   src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=1440/layout-engine/2022-05/Group-33704.jpg"
//                   alt="Big Banner"
//                 />
//               </div>
//             </div>
//           </div>
//       </>
//     );
//   }