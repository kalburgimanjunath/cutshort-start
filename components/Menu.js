export default function Menu({ menus }) {
  return (
    <div>
      {menus &&
        menus.map((item) => {
          return <div>{item}</div>;
        })}
    </div>
  );
}
