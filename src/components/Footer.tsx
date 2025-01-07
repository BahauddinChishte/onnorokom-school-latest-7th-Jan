import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary-400" />
              <span className="text-xl font-bold text-white">Onnorokom School</span>
            </div>
            <p className="text-gray-400">
              Empowering students with quality education resources and skill development opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">Academic Subjects</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">Skill Development</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">Join as Teacher</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">Success Stories</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">Community Guidelines</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="break-all">contact@onnorokomschool.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span>+880 1621285057</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span> Baridhara J block, Dhaka 1212, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} EduHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}