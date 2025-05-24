import React from 'react'
import { UserCircle, Mail, Phone, Edit2 } from 'lucide-react';

const Profile = () => {
  // Dummy user data (replace with real data from API/context as needed)
  const user = {
    name: 'Amit Kumar',
    email: 'amit.kumar@example.com',
    phone: '+91 9876543210',
    joined: 'April 2024',
    avatar: '',
  };

  return (
    <div className="max-w-2xl mx-auto my-12 p-8 bg-gradient-to-br from-amber-100 via-amber-50 to-yellow-200 dark:from-yellow-900 dark:via-amber-900 dark:to-yellow-950 rounded-3xl shadow-2xl border-2 border-amber-300 dark:border-yellow-900 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-300 dark:bg-yellow-900 rounded-full opacity-20 blur-2xl z-0"></div>
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-yellow-900 dark:bg-amber-700 rounded-full opacity-10 blur-2xl z-0"></div>
      <div className="flex flex-col items-center z-10 relative">
        <div className="w-24 h-24 rounded-full bg-amber-200 dark:bg-yellow-900 border-4 border-yellow-900 dark:border-amber-700 flex items-center justify-center shadow-lg mb-4">
          {user.avatar ? (
            <img src={user.avatar} alt="User Avatar" className="w-full h-full object-cover rounded-full" />
          ) : (
            <UserCircle className="w-16 h-16 text-yellow-900 dark:text-amber-200" />
          )}
        </div>
        <h2 className="text-xl font-extrabold text-yellow-900 dark:text-amber-100 mb-1">{user.name}</h2>
        <div className="w-full mt-2 space-y-3">
          <div className="flex items-center gap-3 text-yellow-900 dark:text-amber-100">
            <Mail className="w-5 h-5" />
            <span className="font-medium">{user.email}</span>
          </div>
          <div className="flex items-center gap-3 text-yellow-900 dark:text-amber-100">
            <Phone className="w-5 h-5" />
            <span className="font-medium">{user.phone}</span>
          </div>
          <div className="flex items-center gap-3 text-yellow-900 dark:text-amber-100">
            <span className="font-medium">Joined:</span>
            <span>{user.joined}</span>
          </div>
        </div>
        <button className="mt-8 px-6 py-2 bg-gradient-to-r from-yellow-900 via-amber-600 to-amber-700 hover:from-yellow-800 hover:to-amber-800 text-yellow-50 rounded-xl font-bold shadow-lg flex items-center gap-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-amber-300">
          <Edit2 className="w-4 h-4" /> Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;