
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children }: LayoutProps) {
  return (
      <main className="layout">
        {children}
      </main>
  );
}
