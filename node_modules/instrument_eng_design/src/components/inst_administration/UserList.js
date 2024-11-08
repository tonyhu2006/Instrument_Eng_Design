 // components/user_management/UserList.js
 import React from 'react';
 import { useTranslation } from 'react-i18next';

 const UserList = () => {
   const { t } = useTranslation();

   return (
     <div>
       <h1>{t('userManagement.title')}</h1>
       {/* 其他内容 */}
     </div>
   );
 };

 export default UserList;