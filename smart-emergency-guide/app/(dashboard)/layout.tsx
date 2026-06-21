export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* TODO: Dashboard layout shell (nav, sidebar, etc.) */}
      {children}
    </div>
  );
}
