"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Github, Twitter, Crosshair, Zap, ShieldCheck, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Toaster, toast } from "sonner";

export default function TrustShieldLanding() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const codeExample = '{"email": "user@example.com"}';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("You've been added to the queue!");
    setEmail("");
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), 
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-600/10" />

      {/* Navbar */}
      <motion.nav 
        className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/50 border-b border-slate-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight">TrustShield</div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="hover:bg-slate-800">
              <Twitter className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-slate-800">
              <Github className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </motion.nav>

      <main className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <Badge className="mb-6 bg-yellow-500/20 border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/30 transition-all duration-300">
              🚧 Under Construction
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Stop Fake Users.<br />
              Protect Your App.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            The API-first solution to detect disposable emails and bot signups. 
            Join the waitlist for the Public Beta.
          </motion.p>

          {/* Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="flex-1">
              <Label htmlFor="email" className="sr-only">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10 bg-slate-900/50 border-slate-800 text-white placeholder:text-gray-500 focus:border-blue-500 transition-all duration-300"
                disabled={isLoading}
              />
            </div>
            <Button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 h-10 px-6"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                "Join Waitlist"
              )}
            </Button>
          </motion.form>
        </motion.div>

        {/* Why Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Card className="bg-slate-900 border-slate-800 hover:border-blue-500/50 transition-all duration-300 rounded-xl p-6">
            <Crosshair className="w-6 h-6 text-blue-400 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Precision.</h3>
            <p className="text-gray-400 text-sm">Detects 1,000+ disposable domains.</p>
          </Card>

          <Card className="bg-slate-900 border-slate-800 hover:border-blue-500/50 transition-all duration-300 rounded-xl p-6">
            <Zap className="w-6 h-6 text-yellow-400 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Speed.</h3>
            <p className="text-gray-400 text-sm">&lt; 50ms Latency global edge network.</p>
          </Card>

          <Card className="bg-slate-900 border-slate-800 hover:border-blue-500/50 transition-all duration-300 rounded-xl p-6">
            <ShieldCheck className="w-6 h-6 text-green-400 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Security.</h3>
            <p className="text-gray-400 text-sm">Enterprise-grade rate limiting.</p>
          </Card>
        </motion.div>

        {/* Code Preview */}
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            {/* Window controls */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            {/* Code content */}
            <div className="p-6 font-mono text-sm">
              <pre className="text-gray-300">
                <span className="text-blue-400">curl</span>
                <span className="text-white"> -X POST </span>
                <span className="text-green-400">https</span>
                <span className="text-white">://</span>
                <span className="text-yellow-400">api.trustshield.app</span>
                <span className="text-white">/validate </span>
                <span className="text-blue-400">\</span>
                <br />
                <span className="text-white">  </span>
                <span className="text-blue-400">-H</span>
                <span className="text-white"> </span>
                <span className="text-green-400">"Authorization: Bearer $API_KEY"</span>
                <span className="text-white"> </span>
                <span className="text-blue-400">\</span>
                <br />
                <span className="text-white">  </span>
                <span className="text-blue-400">-H</span>
                <span className="text-white"> </span>
                <span className="text-green-400">"Content-Type: application/json"</span>
                <span className="text-white"> </span>
                <span className="text-blue-400">\</span>
                <br />
                <span className="text-white">  </span>
                <span className="text-blue-400">-d</span>
                <span className="text-white"> </span>
                <span className="text-green-400">'{codeExample}'</span>
              </pre>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer 
        className="border-t border-slate-800 py-8 mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p className="text-sm">
            © 2024 TrustShield. Protecting digital integrity, one validation at a time.
          </p>
        </div>
      </motion.footer>

      <Toaster />
    </div>
  );
}
