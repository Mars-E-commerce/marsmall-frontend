import { memo, useEffect, useRef } from 'react';

import cx from 'classnames';
import { useRecoilState } from 'recoil';

import { sidebarOpenState } from '@/states';

import { SidebarNavBar } from './SidebarNavBar';
import { SidebarUserMenu } from './SidebarUserMenu';

import { SidebarContainer } from './Sidebar.styles';

interface ISidebarProps {
  onClickLogout: () => void;
}

const Sidebar = ({ onClickLogout }: ISidebarProps) => {
  const sidebarRef = useRef<HTMLElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(sidebarOpenState);

  const className = cx({ open: isSidebarOpen });

  const onClickOutside = (event: Event) => {
    if (!sidebarRef.current?.contains(event.target as Node)) {
      return setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('click', onClickOutside, true);
    } else {
      document.removeEventListener('click', onClickOutside, true);
    }

    return () => {
      document.removeEventListener('click', onClickOutside, true);
    };
  }, [isSidebarOpen]);

  return (
    <SidebarContainer
      ref={sidebarRef}
      isSidebarOpen={isSidebarOpen}
      className={className}
    >
      <SidebarUserMenu onClickLogout={onClickLogout} />
      <SidebarNavBar />
    </SidebarContainer>
  );
};

export default memo(Sidebar);
