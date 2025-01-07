import React from 'react';
import { Users, MessageCircle, Heart, Rocket } from 'lucide-react';

export function CommunitySection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Online Community
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with over 60,000 students and educators across Bangladesh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">60K+ Members</h3>
            <p className="text-gray-600">Join the largest educational community in Bangladesh</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Peer Support</h3>
            <p className="text-gray-600">Get help from fellow students and experienced mentors</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Discussions</h3>
            <p className="text-gray-600">Participate in topic-specific study groups and forums</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Together</h3>
            <p className="text-gray-600">Learn, share, and grow with like-minded individuals</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://www.facebook.com/groups/learndigitalskils"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-flex items-center gap-2"
          >
            <Users className="w-5 h-5" />
            Join Community
          </a>
        </div>
      </div>
    </section>
  );
}