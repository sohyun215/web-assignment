import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  path: string;
  iconImg: string;
}

const CategoryCard = ({ title, iconImg, path }: CategoryCardProps) => {
  return (
    <Link
      href={path}
      className="shadow-card flex h-[89px] min-w-[156px] grow cursor-pointer flex-col justify-between rounded-[10px] bg-white p-[10px] transition ease-in-out hover:scale-105"
    >
      <h2 className="font-bold">{title}</h2>
      <div className="self-end">
        <Image src={iconImg} width={36} height={36} alt={title} />
      </div>
    </Link>
  );
};

export default CategoryCard;
