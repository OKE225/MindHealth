interface Props {
  content: string;
  date: string;
}

const DiaryNoteCard = ({ content, date }: Props) => {
  return (
    <div className="relative bg-white min-h-25 text-lg max-lg:text-base p-5 max-md:p-3 pb-8 whitespace-pre-wrap rounded-2xl shadow">
      <p>{content}</p>
      <p className="absolute text-stone-400 text-sm right-4 bottom-1">{date}</p>
    </div>
  );
};

export default DiaryNoteCard;
