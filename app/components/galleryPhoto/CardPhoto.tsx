type CardPhotoProps = {
  srcImage: string;
  wish: string;
};

const CardPhoto = ({ srcImage, wish }: CardPhotoProps) => {
  return (
    <li>
      <div className="bg-white w-52 h-80 mr-32 card p-8 cursor-pointer ">
        <div className="photo h-3/4">
          <img className="object-contain h-48 w-96  " src={srcImage} />
        </div>
        <div className="py-4 text-zinc-600">
          <p>{wish}</p>
        </div>
      </div>
    </li>
  );
};

export default CardPhoto;
