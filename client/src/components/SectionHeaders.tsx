interface Props {
  header: string;
  description?: string;
}

const SectionHeaders = ({ header, description }: Props) => {
  return (
    <div className="text-center my-10">
      <h3 className="text-stone-900 text-4xl font-bold capitalize">{header}</h3>
      <p className="text-stone-600">{description}</p>
    </div>
  );
};

export default SectionHeaders;
