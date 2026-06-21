export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* TODO: Root layout shell (nav, sidebar, etc.) */}
      {children}
    </div>
  );
}
