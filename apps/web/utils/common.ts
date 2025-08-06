import img_1 from "@/assets/imgs/img-sample-1.jpg";
import img_2 from "@/assets/imgs/img-sample-2.jpg";
import img_3 from "@/assets/imgs/img-sample-3.jpg";
import img_4 from "@/assets/imgs/img-sample-4.jpg";

const imageConstants = [img_1, img_2, img_3, img_4];

export function getRandomImage(index?: number) {
  if (index) return imageConstants[index % imageConstants?.length];
  const randomIndex = Math.floor(Math.random() * imageConstants.length);
  return imageConstants[randomIndex];
}

