import React from 'react';
import { MapPin, CheckCircle, Users, Camera, Bell, TrendingUp } from 'lucide-react';

export default function SajiloFixLanding() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">SF</span>
            </div>
            <span className="text-xl font-bold">Sajilo Fix</span>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 text-gray-700 hover:text-blue-600">Explore Issues</button>
            <button className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm">
          Empowering Citizens to Build Better Cities
        </div>
        
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Report. Resolve. Revive.
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your community by reporting civic issues and tracking their resolution 
          in real-time. Join thousands of citizens making Nepal better, one report at a time.
        </p>
        
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Report an Issue
          </button>
          <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-lg font-semibold hover:border-gray-400">
            Explore Issues
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-lg shadow">
            <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">2,847</div>
            <div className="text-gray-600">Issues Reported</div>
          </div>
          
          <div className="text-center p-8 bg-white rounded-lg shadow">
            <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">1,923</div>
            <div className="text-gray-600">Issues Resolved</div>
          </div>
          
          <div className="text-center p-8 bg-white rounded-lg shadow">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">5,432</div>
            <div className="text-gray-600">Active Citizens</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-xl text-gray-600 text-center mb-12">Three simple steps to make your community better</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-lg border-2 border-gray-200">
            <Camera className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Report an Issue</h3>
            <p className="text-gray-600">Spot a problem in your community? Take a photo and report it instantly through our platform.</p>
          </div>
          
          <div className="p-8 bg-white rounded-lg border-2 border-gray-200">
            <Bell className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Track Progress</h3>
            <p className="text-gray-600">Get real-time updates on your report and see how authorities are addressing the issue.</p>
          </div>
          
          <div className="p-8 bg-white rounded-lg border-2 border-gray-200">
            <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Build Better Cities</h3>
            <p className="text-gray-600">Your reports help improve community infrastructure and quality of life for everyone.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of active citizens working together to build better communities across Nepal.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="font-bold text-sm">SF</span>
            </div>
            <span className="text-xl font-bold">Sajilo Fix</span>
          </div>
          <p className="text-gray-400 text-sm">© 2024 Sajilo Fix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}