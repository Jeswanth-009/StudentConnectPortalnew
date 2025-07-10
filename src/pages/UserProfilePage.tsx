import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Calendar, MapPin, Link, MessageCircle, UserPlus } from 'lucide-react';

const UserProfilePage: React.FC = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  // Mock user data - in real app, fetch based on userId
  const viewedUser = {
    id: userId || '2',
    name: 'Jane Smith',
    username: 'janesmith',
    email: 'jane@example.com',
    bio: 'Frontend Developer with 5+ years of experience. Passionate about React, TypeScript, and creating beautiful user interfaces. Always happy to help fellow developers!',
    profilePicture: `https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400`,
    joinedDate: 'December 2023',
    location: 'San Francisco, CA',
    website: 'https://janesmith.dev',
    stats: {
      posts: 24,
      comments: 87,
      notes: 15,
      jobs: 6
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 h-16">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Back
            </button>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">{viewedUser.name}</h1>
              <p className="text-sm text-gray-500">@{viewedUser.username}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/80 backdrop-blur-md rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          {/* Cover Photo */}
          <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600"></div>

          {/* Profile Content */}
          <div className="px-6 pb-6">
            {/* Profile Picture and Basic Info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 -mt-12 mb-6">
              <img
                src={viewedUser.profilePicture}
                alt={viewedUser.name}
                className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-lg"
              />

              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{viewedUser.name}</h1>
                    <p className="text-gray-600">@{viewedUser.username}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      <UserPlus className="h-4 w-4" />
                      Follow
                    </button>
                    <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">{viewedUser.bio}</p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Information</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Mail className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium text-gray-900">{viewedUser.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Calendar className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Joined</p>
                      <p className="font-medium text-gray-900">{viewedUser.joinedDate}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <MapPin className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium text-gray-900">{viewedUser.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Link className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Website</p>
                      <a
                        href={viewedUser.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-600 hover:text-blue-800"
                      >
                        {viewedUser.website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity Stats */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Activity Overview</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-2xl font-bold text-blue-600">{viewedUser.stats.posts}</p>
                    <p className="text-sm text-blue-800">Posts Created</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-2xl font-bold text-green-600">{viewedUser.stats.comments}</p>
                    <p className="text-sm text-green-800">Comments</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <p className="text-2xl font-bold text-purple-600">{viewedUser.stats.notes}</p>
                    <p className="text-sm text-purple-800">Notes Shared</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <p className="text-2xl font-bold text-orange-600">{viewedUser.stats.jobs}</p>
                    <p className="text-sm text-orange-800">Jobs Posted</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-blue-100 p-1 rounded">
                      <MessageCircle className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">Frontend Development Best Practices</span>
                  </div>
                  <p className="text-sm text-gray-600">What are your favorite tools and techniques for modern frontend development?</p>
                  <p className="text-xs text-gray-500 mt-2">2 days ago</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-green-100 p-1 rounded">
                      <MessageCircle className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">React Developer Position - Remote</span>
                  </div>
                  <p className="text-sm text-gray-600">Looking for a senior React developer to join our growing team at TechCorp.</p>
                  <p className="text-xs text-gray-500 mt-2">1 week ago</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-purple-100 p-1 rounded">
                      <MessageCircle className="h-3 w-3 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">TypeScript Fundamentals Guide</span>
                  </div>
                  <p className="text-sm text-gray-600">Comprehensive guide covering TypeScript basics for JavaScript developers.</p>
                  <p className="text-xs text-gray-500 mt-2">2 weeks ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;