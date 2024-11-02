 // __tests__/UserList.test.js
 import React from 'react';
 import { render, screen } from '@testing-library/react';
 import UserList from '../components/UserManagement/UserList';

 test('renders user list title', () => {
   render(<UserList />);
   const titleElement = screen.getByText(/用户列表/i);
   expect(titleElement).toBeInTheDocument();
 });