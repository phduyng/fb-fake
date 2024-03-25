import Image from "next/image";

const LikeEmoji = () => {
    return (
        <div className='relative h-[18px] w-[18px]' >
            <Image
                src='/images/emoji_like.png'
                alt="like"
                fill={true}
                objectFit="cover"
                />
        </div>
    )
};

export default LikeEmoji;