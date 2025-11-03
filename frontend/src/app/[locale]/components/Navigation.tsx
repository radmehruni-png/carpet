'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/products">Shop</Link>
        </li>
        <li>
          <Link href="/history/carpets">History of Carpets</Link>
        </li>
        <li>
          <Link href="/history/persia">History of Persia</Link>
        </li>
      </ul>
      <div>
        <Link href={pathname}>
          English
        </Link>
        {' | '}
        <Link href={pathname}>
          فارسی
        </Link>
      </div>
    </nav>
  );
}
