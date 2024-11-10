import "./globals.css";

export const metadata = {
  title: "Commons - Fantasy Finance",
  description: "Trade Smarter with Commons",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  );
}
