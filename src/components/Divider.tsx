type DividerProps = {
  margin: DividerMargin;
  color: DividerColor;
};

export enum DividerColor {
    Gray = "text-gray-400",
}

export enum DividerMargin {
    None = "my-0",
    Xs = "my-2",
    Sm = "my-4",
    Md = "my-8",
}

function Divider(props: DividerProps) {
  return <hr className={`${props.margin} ${props.color}`} />;
}

export default Divider;


