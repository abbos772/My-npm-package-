import CardIcon from '../CardIcon/CardIcon';
import { CardEmojiIcon } from '../../icons/svg/CardEmojiIcon';

const CardEmoji = () => (
  <CardIcon
    icon={CardEmojiIcon}
    text="Создать набор эмодзи"
    hasLineBreak={true}
  />
);

export default CardEmoji;