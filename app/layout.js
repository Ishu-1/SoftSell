import './globals.css';

export const metadata = {
  title: 'SoftSell - Sell Your Unused Software Licenses',
  description: 'Turn your unused software licenses into cash with SoftSell',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}