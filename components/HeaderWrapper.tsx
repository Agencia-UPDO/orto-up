'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function HeaderWrapper() {
  const pathname = usePathname();
  const headerClass = pathname === '/' ? "transparent header-light nav-up" : "transparent header-light";

  return <Header className={headerClass} />;
}
