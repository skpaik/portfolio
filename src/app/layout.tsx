import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import Container from "@/app/_components/Container";
import Head from "next/head";
import { loadJsonContents } from "@/libs/JsonFileService";
import { LayoutContent } from "@/app/_models/ContentsModel";

export async function generateMetadata() {
  const pageContent: LayoutContent = await loadJsonContents("layout");
  return pageContent.metadata;
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageContent: LayoutContent = await loadJsonContents("layout");

  return (
    <html className="h-full scroll-smooth" lang="en" dir="ltr">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Container classNames="">
          <Header pageContent={pageContent} />
          <main className="bg-white">{children}</main>
          <Footer pageContent={pageContent} />
        </Container>
      </body>
    </html>
  );
}
