import { Header, Footer } from "@/components/layout";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="bg-background mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 pt-8 pb-12 sm:px-8">
        {children}
      </main>
      <Footer />
      <div
        aria-hidden="true"
        className="bg-background mask-b-to-background pointer-events-none fixed inset-x-0 bottom-0 z-10 h-24 w-full overflow-hidden mask-b-from-transparent mask-no-repeat"
      />
    </>
  );
}
