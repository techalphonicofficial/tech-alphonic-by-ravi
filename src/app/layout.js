import "./globals.css";

export const metadata = {
  title: "Tech Alphonic - Your Trusted IT Partner",
  description:
    "TechAlphonic - Digital Marketing, Web Development, AI Automation and Branding Solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}