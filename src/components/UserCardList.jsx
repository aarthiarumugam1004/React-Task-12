import React from 'react';
import { Mail, MapPin, Briefcase } from 'lucide-react';

function UserCardList({ users }) {
  return (
    <div className="card-grid">
      {/* Dynamically render user cards using map() */}
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <div className="card-header">
            <div className="avatar-large">
              {user.name.charAt(0)}
            </div>
            <div>
              <h3>{user.name}</h3>
              <span className="user-id">ID: #{user.id}</span>
            </div>
          </div>
          <div className="card-body">
            <div className="info-item">
              <Mail size={16} />
              <span>{user.email}</span>
            </div>
            <div className="info-item">
              <MapPin size={16} />
              <span>{user.city}</span>
            </div>
            <div className="info-item">
              <Briefcase size={16} />
              <span className="role-badge">{user.role}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserCardList;
