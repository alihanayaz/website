import { Footer } from "@/components/layout";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="bg-background border-border mx-auto flex w-full max-w-5xl flex-1 flex-col border-x py-12">
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
