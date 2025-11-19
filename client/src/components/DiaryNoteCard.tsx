interface Props {
  content: string;
  date: string;
}

const DiaryNoteCard = ({ content, date }: Props) => {
  return (
    <div className="relative bg-white min-h-40 text-lg p-5 pb-8 whitespace-pre-wrap rounded-2xl shadow">
      <p>{content}</p>
      <p className="absolute text-stone-400 right-4 bottom-1">{date}</p>
    </div>
  );
};

export default DiaryNoteCard;
