import bullsEye from '@/assets/bulls-eye.webp';
import thumbsUp from '@/assets/thumbs-up.webp';
import meh from '@/assets/meh.webp';

interface EmojiProps {
  rating: number;
}

type EmojiImage = {
  src: string;
  alt: string;
  className: string;
};

const Emoji = ({ rating }: EmojiProps) => {
  const emojiMap: Record<number, EmojiImage> = {
    3: { src: meh, alt: 'meh', className: 'w-6 h-6' },
    4: { src: thumbsUp, alt: 'recommended', className: 'w-6 h-6' },
    5: { src: bullsEye, alt: 'noice', className: 'w-9 h-9' },
  };

  const emoji = emojiMap[rating];
  if (!emoji) return null;

  return <img src={emoji.src} alt={emoji.alt} className={`mt-1 ${emoji.className}`} />;
};

export default Emoji;
