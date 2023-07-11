import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../../../../public/bulls-eye.webp";
import meh from "../../../../public/meh.webp";
import thumbsUp from "../../../../public/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  // again, 'index signature' [key: number], ImageProps are the <Image>'s props types.
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "amazing!", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1}></Image>;
};

export default Emoji;
