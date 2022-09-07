import image1 from "../public/images/1.jpg";
import image2 from "../public/images/2.jpg";
import image3 from "../public/images/3.jpg";
import image4 from "../public/images/4.jpg";
import image5 from "../public/images/5.jpg";
import image6 from "../public/images/6.jpg";
import image7 from "../public/images/7.jpg";
import image8 from "../public/images/8.jpg";
import image9 from "../public/images/9.jpg";
import image10 from "../public/images/10.jpg";
import image11 from "../public/images/11.jpg";
import image12 from "../public/images/12.jpg";

const imagesCol1 = [image1, image2, image3, image4].concat([
  image1,
  image2,
  image3,
  image4,
]);
const imagesCol2 = [image7, image8, image9, image10].concat([
  image7,
  image8,
  image9,
  image10,
]);
const imagesCol3 = [image5, image6, image11, image12].concat([
  image5,
  image6,
  image11,
  image12,
]);

export { imagesCol1, imagesCol2, imagesCol3 };
