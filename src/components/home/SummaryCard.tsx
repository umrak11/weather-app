type SummaryCardProps = {
  title: string;
  icon: JSX.Element;
  bgColor: string;
  data: string;
};

function SummaryCard(props: SummaryCardProps) {
  return (
    <div
      className={`
      shadow-md 
      rounded-md 
      p-8 flex 
      flex-col 
      items-center 
      ${props.bgColor}`}
    >
      <div className="text-sm font-gray-300 flex flex-col items-center">
        <div className="text-4xl">{props.icon}</div> <div>{props.title}</div>
      </div>
      <div className="mt-4 font-bold text-lg">{props.data}</div>
    </div>
  );
}

export default SummaryCard;
