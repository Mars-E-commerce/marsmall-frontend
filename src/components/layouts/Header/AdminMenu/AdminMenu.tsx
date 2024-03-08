import { memo } from 'react';

import { MdPerson, MdSettings } from 'react-icons/md';

import { AdminMenuContainer, IConContainer } from './AdminMenu.styles';

const AdminMenu = () => {
  return (
    <AdminMenuContainer>
      <IConContainer>
        <MdSettings />
      </IConContainer>
      <IConContainer>
        <MdPerson />
      </IConContainer>
    </AdminMenuContainer>
  );
};

export default memo(AdminMenu);
