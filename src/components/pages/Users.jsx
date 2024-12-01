// src/pages/Users.jsx
import React, { useState } from 'react';
import { UserList } from '../users/UserList';
import { UserForm } from '../users/UserForm';
import { Toaster } from 'react-hot-toast';

export const Users = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEditUser = (user) => {
    setSelectedUser(user);
  };

  const handleUserSaved = () => {
    setSelectedUser(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">
            {selectedUser ? 'Edit User' : 'Create User'}
          </h2>
          <UserForm 
            user={selectedUser} 
            onUserSaved={handleUserSaved} 
          />
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">User List</h2>
          <UserList onEditUser={handleEditUser} />
        </div>
      </div>
    </div>
  );
};