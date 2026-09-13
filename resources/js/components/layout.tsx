import Header from "./Header";


interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
    <Header />
      <main className="layout">
        {children}
      </main>
    </>
  );
}
