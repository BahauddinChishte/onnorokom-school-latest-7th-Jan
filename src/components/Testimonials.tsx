import { useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "তানভীর আহমেদ",
    role: "শিক্ষার্থী",
    content: "এই প্ল্যাটফর্মটি আমার পড়াশোনার জন্য খুবই উপকারী হয়েছে। সুসংগঠিত কন্টেন্ট এবং মানসম্পন্ন রিসোর্সগুলো আমাকে পরীক্ষায় ভালো ফল করতে সাহায্য করেছে।",
    type: "student"
  },
  {
    id: 2,
    name: "ড. রফিকুল ইসলাম",
    role: "পদার্থবিজ্ঞান শিক্ষক",
    content: "একজন শিক্ষক হিসেবে আমি কন্টেন্টের মান দেখে মুগ্ধ। এটি শিক্ষক এবং শিক্ষার্থী উভয়ের জন্যই একটি চমৎকার রিসোর্স।",
    type: "teacher"
  },
  {
    id: 3,
    name: "সাবরিনা রহমান",
    role: "শিক্ষার্থী",
    content: "ভিডিও রিসোর্সগুলো বিশেষভাবে সহায়ক। জটিল বিষয়গুলো বারবার দেখে শেখার সুযোগ আমার বোঝার ক্ষমতা অনেক বাড়িয়েছে।",
    type: "student"
  },
  {
    id: 4,
    name: "প্রফেসর নাজমুল হক",
    role: "গণিত শিক্ষক",
    content: "আমি আমার সকল ছাত্রছাত্রীদের এই প্ল্যাটফর্মটি ব্যবহার করার পরামর্শ দিই। শেখার এই কাঠামোগত পদ্ধতি শিক্ষাদানকে আরও কার্যকর করে তোলে।",
    type: "teacher"
  }
];

export function Testimonials() {
  const [filter, setFilter] = useState<'all' | 'student' | 'teacher'>('all');

  const filteredTestimonials = testimonials.filter(t => 
    filter === 'all' ? true : t.type === filter
  );

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          আমাদের শিক্ষার্থীদের মতামত
        </h2>

        <div className="flex justify-center gap-4 mb-12">
          {[
            { label: 'সকল', value: 'all' },
            { label: 'শিক্ষার্থী', value: 'student' },
            { label: 'শিক্ষক', value: 'teacher' }
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value as any)}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === option.value
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-md p-6">
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}