"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Github, Twitter, Crosshair, Zap, ShieldCheck, Loader2, CheckCircle, AlertCircle, Clock, Database, Globe, Lock, Code2, BarChart3, Users, TrendingUp, Filter, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Toaster, toast } from "sonner";

export default function TrustShieldLanding() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Welcome to the TrustShield beta! Check your email for updates.");
    setEmail("");
    setCompany("");
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Enhanced Background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
                           linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), 
                           linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50% 50%, 50% 50%, 60px 60px, 60px 60px'
        }}
      />
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-indigo-900/5 animate-pulse" />

      {/* Enhanced Navbar */}
      <motion.nav 
        className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/70 border-b border-slate-800/50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-400" />
            <div className="font-bold text-xl tracking-tight">TrustShield</div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#api" className="text-sm text-gray-400 hover:text-white transition-colors">API</a>
            <a href="#security" className="text-sm text-gray-400 hover:text-white transition-colors">Security</a>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="hover:bg-slate-800/50">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-slate-800/50">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <main className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Enhanced Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <Badge className="mb-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30 text-yellow-400 px-6 py-2 text-sm font-medium hover:from-yellow-500/30 hover:to-orange-500/30 transition-all duration-300">
              🚧 Under Construction • Public Beta Coming Soon
            </Badge>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-[0.9]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent">
              Protect Your<br />
              Business From<br />
              Fake Users
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            TrustShield delivers a <span className="text-blue-400 font-medium">Trust Score (0-100)</span> for every email address, 
            detecting disposable emails, fake accounts, and high-risk signups before they impact your business.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="flex-1 space-y-3">
              <Input
                type="email"
                placeholder="work@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-slate-900/50 border-slate-800 text-white placeholder:text-gray-500 focus:border-blue-500 transition-all duration-300"
                disabled={isLoading}
              />
              <Input
                type="text"
                placeholder="Company (optional)"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="h-12 bg-slate-900/50 border-slate-800 text-white placeholder:text-gray-500 focus:border-blue-500 transition-all duration-300"
                disabled={isLoading}
              />
            </div>
            <Button 
              onClick={handleSubmit}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:scale-105 transition-all duration-300 h-12 px-8 text-base font-medium shadow-lg shadow-blue-500/25"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Join Beta Waitlist
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </motion.div>

          <motion.div 
            className="flex justify-center gap-8 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Problem Section */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-500/20 border-red-500/30 text-red-400">
              <AlertCircle className="w-3 h-3 mr-2" />
              The Problem
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Fake Users Are Costing You Real Money</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every fake signup costs you in server resources, support time, and polluted analytics. 
              The average business loses $50,000+ annually to fake account abuse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Free Trial Abuse",
                description: "Users create multiple accounts to abuse free tiers, costing you real infrastructure costs.",
                impact: "Up to 40% of free trials"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Spam Signups",
                description: "Disposable email services enable mass registration for spam, phishing, and malicious activities.",
                impact: "15,000+ disposable domains"
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Polluted Analytics",
                description: "Fake accounts skew your user metrics, making it impossible to make data-driven decisions.",
                impact: "25% inaccurate metrics"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800 hover:border-red-500/30 transition-all duration-300 rounded-xl p-6">
                <div className="text-red-400 mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                <div className="text-xs text-red-400 font-medium">{item.impact}</div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Trust Score Explanation */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 rounded-2xl p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4">The Trust Score System</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Our proprietary algorithm analyzes over 50 data points to calculate a Trust Score from 0-100. 
                  Higher scores indicate legitimate, low-risk email addresses that are safe to onboard.
                </p>
                
                <div className="space-y-4">
                  {[
                    { score: "90-100", label: "Excellent", color: "text-green-400", desc: "Verified legitimate email" },
                    { score: "70-89", label: "Good", color: "text-blue-400", desc: "Low risk, likely legitimate" },
                    { score: "50-69", label: "Moderate", color: "text-yellow-400", desc: "Requires verification" },
                    { score: "0-49", label: "High Risk", color: "text-red-400", desc: "Disposable or suspicious" }
                  ].map((range, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`font-mono font-bold ${range.color}`}>{range.score}</div>
                      <div className="flex-1">
                        <div className={`text-sm font-medium ${range.color}`}>{range.label}</div>
                        <div className="text-xs text-gray-500">{range.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-950 rounded-xl p-6 border border-slate-700">
                <h4 className="text-sm font-medium text-gray-400 mb-4">API Response Example</h4>
                <pre className="text-sm font-mono text-gray-300">
                  <span className="text-blue-400">{`{`}</span>
                  <br />
                  <span className="text-gray-500">  </span><span className="text-green-400">"email"</span><span className="text-white">: </span><span className="text-yellow-400">"user@example.com"</span><span className="text-white">,</span>
                  <br />
                  <span className="text-gray-500">  </span><span className="text-green-400">"trust_score"</span><span className="text-white">: </span><span className="text-blue-400">92</span><span className="text-white">,</span>
                  <br />
                  <span className="text-gray-500">  </span><span className="text-green-400">"risk_level"</span><span className="text-white">: </span><span className="text-yellow-400">"LOW"</span><span className="text-white">,</span>
                  <br />
                  <span className="text-gray-500">  </span><span className="text-green-400">"is_disposable"</span><span className="text-white">: </span><span className="text-blue-400">false</span><span className="text-white">,</span>
                  <br />
                  <span className="text-gray-500">  </span><span className="text-green-400">"domain_age"</span><span className="text-white">: </span><span className="text-blue-400">5</span><span className="text-gray-500"> years</span>
                  <br />
                  <span className="text-blue-400">{`}`}</span>
                </pre>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features Grid */}
        <motion.section 
          className="mb-20"
          id="features"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Enterprise-Grade Protection</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built for developers who need reliable, scalable email validation without compromising on speed or accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Global Coverage",
                description: "Real-time validation of emails from 200+ countries with localized domain intelligence.",
                tech: "Edge Network"
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Lightning Fast",
                description: "Average response time under 50ms with 99.9% uptime SLA guarantee.",
                tech: "< 50ms latency"
              },
              {
                icon: <Database className="w-6 h-6" />,
                title: "Massive Database",
                description: "Continuously updated database of 50,000+ disposable and temporary email providers.",
                tech: "50K+ domains"
              },
              {
                icon: <Lock className="w-6 h-6" />,
                title: "Enterprise Security",
                description: "SOC 2 Type II compliant with end-to-end encryption and GDPR compliance.",
                tech: "SOC 2 Certified"
              },
              {
                icon: <Filter className="w-6 h-6" />,
                title: "Advanced Filtering",
                description: "Machine learning algorithms detect patterns and emerging threat vectors.",
                tech: "ML Powered"
              },
              {
                icon: <Code2 className="w-6 h-6" />,
                title: "Developer First",
                description: "RESTful API with SDKs for Python, Node.js, Ruby, PHP, and more.",
                tech: "8+ SDKs"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800 hover:border-blue-500/30 transition-all duration-300 rounded-xl p-6 group">
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{feature.description}</p>
                <div className="text-xs text-blue-400 font-medium bg-blue-400/10 px-2 py-1 rounded-full inline-block">
                  {feature.tech}
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* API Documentation */}
        <motion.section 
          className="mb-20"
          id="api"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-500/20 border-blue-500/30 text-blue-400">
              <Code2 className="w-3 h-3 mr-2" />
              Simple Integration
            </Badge>
            <h2 className="text-4xl font-bold mb-4">API Built for Developers</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get started in minutes with our straightforward REST API. No complex setup required.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm text-gray-400">Endpoint: /api/v1/validate</div>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">Request</h4>
                <div className="bg-slate-950 rounded-lg p-4 border border-slate-700">
                  <pre className="text-sm font-mono text-gray-300">
                    <span className="text-blue-400">curl</span>
                    <span className="text-white"> -X POST </span>
                    <span className="text-green-400">https://api.trustshield.app/v1/validate</span>
                    <br />
                    <span className="text-white">  </span><span className="text-blue-400">-H</span>
                    <span className="text-white"> </span><span className="text-green-400">"Authorization: Bearer your_api_key"</span>
                    <br />
                    <span className="text-white">  </span><span className="text-blue-400">-H</span>
                    <span className="text-white"> </span><span className="text-green-400">"Content-Type: application/json"</span>
                    <br />
                    <span className="text-white">  </span><span className="text-blue-400">-d</span>
                    <span className="text-white"> </span><span className="text-green-400">'{`{"email": "user@company.com"}`}'</span>
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">Node.js SDK</h4>
                <div className="bg-slate-950 rounded-lg p-4 border border-slate-700">
                  <pre className="text-sm font-mono text-gray-300">
                    <span className="text-blue-400">const</span>
                    <span className="text-white"> trustshield = </span>
                    <span className="text-blue-400">require</span>
                    <span className="text-white">(</span><span className="text-green-400">'trustshield'</span>
                    <span className="text-white">);</span>
                    <br />
                    <br />
                    <span className="text-blue-400">const</span>
                    <span className="text-white"> client = </span>
                    <span className="text-blue-400">new</span>
                    <span className="text-white"> trustshield(</span><span className="text-green-400">'your_api_key'</span>
                    <span className="text-white">);</span>
                    <br />
                    <br />
                    <span className="text-blue-400">const</span>
                    <span className="text-white"> result = </span>
                    <span className="text-blue-400">await</span>
                    <span className="text-white"> client.validate(</span>
                    <br />
                    <span className="text-white">  </span><span className="text-green-400">'user@company.com'</span>
                    <span className="text-white">);</span>
                    <br />
                    <br />
                    <span className="text-blue-400">console</span>
                    <span className="text-white">.log(result.trust_score); </span>
                    <span className="text-gray-500">// 92</span>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Social Proof */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Trusted by Leading Companies</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join hundreds of companies protecting their applications with TrustShield
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                quote: "TrustShield reduced our fake signups by 94% in the first month. The ROI was immediate.",
                author: "Sarah Chen",
                title: "CTO at TechCorp",
                rating: 5
              },
              {
                quote: "The API is incredibly fast and reliable. It seamlessly integrated with our existing auth flow.",
                author: "Michael Rodriguez",
                title: "Lead Engineer at SaaSHub",
                rating: 5
              },
              {
                quote: "Finally, an email validation service that actually catches disposable emails accurately.",
                author: "Emily Watson",
                title: "Product Manager at CloudFlow",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800 rounded-xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.title}</div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center gap-12 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">500M+</div>
              <div className="text-sm text-gray-500">Emails Validated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-1">99.9%</div>
              <div className="text-sm text-gray-500">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-1">&lt;50ms</div>
              <div className="text-sm text-gray-500">Avg Response</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-1">24/7</div>
              <div className="text-sm text-gray-500">Support</div>
            </div>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-2xl p-12 text-center">
            <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Ready to Protect Your Business?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join our beta program and get early access to the most advanced email protection API on the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium h-auto hover:scale-105 transition-all duration-300"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Join Beta Waitlist
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-slate-700 text-white hover:bg-slate-800 px-8 py-4 text-lg font-medium h-auto"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Enhanced Footer */}
      <motion.footer 
        className="border-t border-slate-800 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
                <div className="font-bold text-xl">TrustShield</div>
              </div>
              <p className="text-sm text-gray-400">
                Protecting businesses from fake users and email abuse with enterprise-grade validation.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Features</a>
                <br />
                <a href="#" className="hover:text-white transition-colors">API Documentation</a>
                <br />
                <a href="#" className="hover:text-white transition-colors">Pricing</a>
                <br />
                <a href="#" className="hover:text-white transition-colors">Security</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">About</a>
                <br />
                <a href="#" className="hover:text-white transition-colors">Blog</a>
                <br />
                <a href="#" className="hover:text-white transition-colors">Careers</a>
                <br />
                <a href="#" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <br />
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <br />
                <a href="#" className="hover:text-white transition-colors">GDPR Compliance</a>
                <br />
                <a href="#" className="hover:text-white transition-colors">SLA</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 sm:mb-0">
              © 2024 TrustShield. All rights reserved. Built with ❤️ for developers.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-slate-800/50">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-slate-800/50">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-slate-800/50">
                <Shield className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.footer>

      <Toaster />
    </div>
  );
}
