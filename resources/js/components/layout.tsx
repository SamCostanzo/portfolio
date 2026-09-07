
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children }: LayoutProps) {
  return (
      <main className="layout flex justify-center items-center">
        {children}
      </main>
  );
}
