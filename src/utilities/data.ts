import product from "@/assets/images/product.png";
import digitalBook from "@/assets/images/digital-book.png";
import lullaby from "@/assets/images/lullaby.png";
import poster from "@/assets/images/poster.png";
import poster1 from "@/assets/images/poster1-min.png";
import postcard from "@/assets/images/postcard.png";
import postcard1 from "@/assets/images/postcard-open1-min.png";
import postcard2 from "@/assets/images/postcard-open2-min.png";
import postcard3 from "@/assets/images/postcard-open3-min.png";
import book1 from "@/assets/images/book-open1-min.png";
import book2 from "@/assets/images/book-open2-min.png";
import book3 from "@/assets/images/book-open3-min.png";
// import
export const includedProducts = [
  {
    title: "The digital book",
    element: "digital-book",
    description:
      "one sentence description one sentence description one sentence description one sentence description.",
    imagePath: [digitalBook],
    to: "/donation/digital-book",
  },
  {
    title: "The lullaby audio recording",
    element: "lullaby",
    description:
      "one sentence description one sentence description one sentence description one sentence description.",
    imagePath: [lullaby],
    to: "/donation/lullaby",
  },
  {
    title: "Digital supporter's certificate",
    element: "certificate",
    description:
      "one sentence description one sentence description one sentence description one sentence description.",
    imagePath: [product],
    to: "/donation/certificate",
  },
];

export const extraProducts = [
  {
    title: "Printed Book",
    element: "book",
    description:
      "one sentence description one sentence description one sentence description one sentence description.",
    imagePath: [book1, book2, book3],
    to: "/donation/book",
  },
  {
    title: "Poster",
    element: "poster",
    description:
      "one sentence description one sentence description one sentence description one sentence description.",
    imagePath: [poster, poster1],
    to: "/donation/poster",
  },
  {
    title: "Postcards",
    element: "postcards",
    description:
      "one sentence description one sentence description one sentence description one sentence description.",
    imagePath: [postcard, postcard1, postcard2, postcard3],
    to: "/donation/postcards",
  },
];

export const creatorsData = [
  {
    name: "Afrika Fuentes",
    location: "Manchester, UK",
    description:
      "is a Soul and R&B singer, songwriter and keyboard player. After winning the 'BBC New Talent Award' for new songwriters in 2008, she launched her so ngwriting career under the mentorship of Cathy Dennis; hit songwriter for Britney Spears and Kylie Minogue. In 2012 Afrika signed a publishing deal with Sony ATV and released her acclaimed single D'Rainbow', which was well received in her native Spain. Currently she writes for pop artists and labels worldwide. Her song “Ay Dios Mío” was recorded by Spanish girl band Sweet California, peaking at number one in the Spanish album charts in 2017 with their album “3”.",
  },
  {
    name: "Ksenia Urban",
    location: "Poland",
    description:
      "is a n illustrator living in Poland. She's been drawing and creating art professionally for about 10 years. Through her illustrations, she aims to inspire both children and adults to see the world in a new and magical way.",
  },
  {
    name: "ENG SINGER",
    location: "london, UK",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  },
  {
    name: "Teo Nalani",
    location: "Brooklyn, NY, US",
    description:
      "is a 2d animator and Illustrator based in Brooklyn, NY, US. His art is influenced strongly by personal memory, forces of nature and storms, boxing, and fashion. He believes in instincts and imagination, and is always looking for things that are hard to find.",
  },
  {
    name: "Danbi Kim",
    location: "Berlin, Germany",
    description:
      "is a UX/UI designer and trilingual calligrapher with a rich multicultural background and a genuine curiosity about the world. Her diverse experiences and unique perspectives infuse her work with vibrant and varied designs. She is dedicated to creating meaningful experiences for diverse audiences through her design approach.",
  },
  {
    name: "Ivan",
    location: "Berlin, Germany",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. ",
  },
  {
    name: "Propeller",
    location: "Kiev, Ukraine",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. ",
  },
  {
    name: "Printing House",
    location: "Location",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. ",
  },
];
