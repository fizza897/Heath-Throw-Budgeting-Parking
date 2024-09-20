// components/OurServiceCard.js
import Image from 'next/image';

const OurServiceCard = ({ data }) => {
    return (
        <div className="rounded-3xl w-[384px] h-[350px] p-4 bg-[#193D1C] shadow-lg flex flex-col items-center justify-center mx-2">
            <div className="w-[70px] h-[70px] mb-4">
                <Image
                    src={data.image}
                    alt={data.title}
                    width={100}
                    height={100}
                    className="object-contain"
                />
            </div>
            <div className="text-center text-white">
                <h2 className="text-[30px] font-semibold">{data.title}</h2>
                <p className="text-[18px] font-normal">{data.desc}</p>
            </div>
        </div>
    );
};

export default OurServiceCard;
