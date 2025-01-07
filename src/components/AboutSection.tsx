import React from 'react';
import { Heart, Users, BookOpen, Star } from 'lucide-react';

export function AboutSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Content Side */}
          <div className="p-8 lg:p-12">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Heart className="w-8 h-8 text-rose-500" />
                About Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Onnorokom School was created in 2022 with a simple yet powerful mission: to make quality education accessible to everyone in Bangladesh, regardless of their financial background. We believe that every student deserves access to high-quality educational resources that can help them achieve their dreams.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-50 rounded-lg">
                    <BookOpen className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">5000+</p>
                    <p className="text-sm text-gray-600">Free Resources</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-50 rounded-lg">
                    <Users className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">60K+</p>
                    <p className="text-sm text-gray-600">Active Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative lg:h-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 opacity-90"></div>
            <div className="relative h-full p-8 lg:p-12 text-white flex flex-col justify-between">
              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/91181868?v=4"
                  alt="Founder"
                  className="w-24 h-24 rounded-xl shadow-lg mb-6"
                />
                <blockquote className="text-xl font-medium mb-6">
                  "Through education and resources anyone can get out of poverty"
                </blockquote>
                <p className="text-primary-100 mb-2">Md. Bahauddin</p>
                <p className="text-sm text-primary-200">Founder & CEO, Onnorokom School</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}