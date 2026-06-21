export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* TODO: Auth layout shell (nav, sidebar, etc.) */}
      {children}
    </div>
  );
}
