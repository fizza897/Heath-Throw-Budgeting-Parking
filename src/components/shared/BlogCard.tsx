import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const BlogCard: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg bg-white">
      <Image width={1000} height={100} className="w-full" src={imageUrl} alt="Card Image" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-[14px] font-meduim mb-4">{description}</p> {/* Added description here */}
      </div>
    </div>
  );
};

export default BlogCard;
