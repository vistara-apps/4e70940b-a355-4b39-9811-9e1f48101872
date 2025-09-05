import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://skillswap-local.vercel.app'),
  title: 'SkillSwap Local',
  description: 'Connect with your community for local gigs and skill-sharing.',
  openGraph: {
    title: 'SkillSwap Local',
    description: 'Connect with your community for local gigs and skill-sharing.',
    images: ['/og-image.png'],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': '/og-image.png',
    'fc:frame:button:1': 'View Gig Board',
    'fc:frame:button:2': 'Post Task',
    'fc:frame:button:3': 'My Profile',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
