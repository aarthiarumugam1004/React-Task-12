import React from 'react';
import { Hash, Users, Mail, MapPin, Briefcase } from 'lucide-react';

function UserTable({ users }) {
  return (
    <div className="table-responsive">
      <table className="user-table">
        <thead>
          <tr>
            <th><Hash size={14} /> ID</th>
            <th><Users size={14} /> Name</th>
            <th><Mail size={14} /> Email</th>
            <th><MapPin size={14} /> City</th>
            <th><Briefcase size={14} /> Role</th>
          </tr>
        </thead>
        <tbody>
          {/* Dynamically render table rows using map() */}
          {users.map((user) => (
            <tr key={user.id} className="table-row">
              <td className="id-cell">#{user.id}</td>
              <td className="name-cell">
                <div className="avatar-circle">
                  {user.name.charAt(0)}
                </div>
                <span className="font-semibold">{user.name}</span>
              </td>
              <td className="email-cell">{user.email}</td>
              <td className="city-cell">{user.city}</td>
              <td className="role-cell">
                <span className="role-badge">{user.role}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
