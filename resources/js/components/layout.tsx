
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children }: LayoutProps) {
  return (
      <main className="layout testy-test flex justify-center items-center h-screen">
        {children}
      </main>
  );
}
