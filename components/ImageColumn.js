import Image from "next/image";

export default function ImageColumn({ images, numCol }) {
  console.log(numCol);
  const animateDirection =
    numCol % 2 == 0 ? "animate-scrollUp" : "animate-scrollDown";
  return (
    <div className={"flex flex-col " + animateDirection}>
      {images.map((image, index) => {
        return (
          <div key={index} className="rounded-md">
            <Image alt="image" src={image} width={300} height={400} />
          </div>
        );
      })}
    </div>
  );
}
