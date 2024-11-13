import classNames from "classnames";

export function DefaultListItem({ className, ...rest }) {
  return <li className={classNames("list-item", className)} {...rest} />;
}
export default function List({
  view: View = DefaultListItem,
  value = [],
  className,
  ...rest
}) {
  return (
    <div className={classNames(className, "list")}>
      {value?.map(({ id, key, value, index }) => (
        <View key={key} id={id} value={value} index={index} {...rest} />
      ))}
    </div>
  );
}
