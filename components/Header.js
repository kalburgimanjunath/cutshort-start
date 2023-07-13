import Menu from './Menu';
export default function Header() {
  const menus = [
    'Dashboard',
    ' View Jobs',
    'Messages',
    'Plans',
    'Credits',
    'Settings',
  ];
  return (
    <div>
      <Menu menus={menus} />
    </div>
  );
}
