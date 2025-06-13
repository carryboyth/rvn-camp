
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onContinueAsGuest?: () => void;
  redirectAfterLogin?: string;
}

const LoginPopup = ({ isOpen, onClose, onContinueAsGuest, redirectAfterLogin }: LoginPopupProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [language, setLanguage] = useState<'en' | 'th'>('en');
  const { toast } = useToast();
  const navigate = useNavigate();

  const translations = {
    en: {
      title: "Welcome to RVnCamp",
      subtitle: "Log in to save your trip and manage your bookings easily.",
      email: "Email",
      password: "Password",
      login: "Log In",
      signup: "Sign Up",
      continueAsGuest: "Continue as Guest",
      loginWithGoogle: "Continue with Google",
      loginWithFacebook: "Continue with Facebook",
      noAccount: "Don't have an account?",
      haveAccount: "Already have an account?",
      switchToSignup: "Sign up here",
      switchToLogin: "Log in here",
      emailPlaceholder: "Enter your email",
      passwordPlaceholder: "Enter your password",
    },
    th: {
      title: "ยินดีต้อนรับสู่ RVnCamp",
      subtitle: "เข้าสู่ระบบเพื่อบันทึกแผนการเดินทางและจัดการการจองของคุณได้อย่างง่ายดาย",
      email: "อีเมล",
      password: "รหัสผ่าน",
      login: "เข้าสู่ระบบ",
      signup: "สมัครสมาชิก",
      continueAsGuest: "ดำเนินการต่อแบบผู้เยี่ยมชม",
      loginWithGoogle: "ดำเนินการต่อด้วย Google",
      loginWithFacebook: "ดำเนินการต่อด้วย Facebook",
      noAccount: "ยังไม่มีบัญชี?",
      haveAccount: "มีบัญชีอยู่แล้ว?",
      switchToSignup: "สมัครสมาชิกที่นี่",
      switchToLogin: "เข้าสู่ระบบที่นี่",
      emailPlaceholder: "กรอกอีเมลของคุณ",
      passwordPlaceholder: "กรอกรหัสผ่านของคุณ",
    }
  };

  const t = translations[language];

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate login/signup
    toast({
      title: isSignUp ? "Account Created" : "Login Successful",
      description: isSignUp ? "Welcome to RVnCamp!" : "Welcome back!",
    });

    if (isSignUp) {
      navigate("/signup");
    } else {
      // Navigate to home page
      window.location.href = "https://preview--camper-van-compass.lovable.app/";
    }
    onClose();
  };

  const handleSocialLogin = (provider: 'google' | 'facebook') => {
    toast({
      title: "Feature Coming Soon",
      description: `${provider} login will be available soon!`,
    });
  };

  const handleSignupClick = () => {
    navigate("/signup");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md w-[95%] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-2xl">
        <DialogHeader className="text-center space-y-4">
          {/* Logo */}
          <div className="flex justify-center mb-2">
            <img 
              src="/lovable-uploads/185d641b-79c4-4ff4-8a62-6492f5109a4e.png" 
              alt="RVnCamp Logo" 
              className="h-12"
            />
          </div>

          {/* Language Toggle */}
          <div className="flex justify-center gap-2 mb-4">
            <Button
              variant={language === 'en' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setLanguage('en')}
              className="text-xs"
            >
              EN
            </Button>
            <Button
              variant={language === 'th' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setLanguage('th')}
              className="text-xs"
            >
              TH
            </Button>
          </div>

          <DialogTitle className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Kanit, sans-serif' }}>
            {t.title}
          </DialogTitle>
          <p className="text-gray-600 text-sm px-4" style={{ fontFamily: 'Kanit, sans-serif' }}>
            {t.subtitle}
          </p>
        </DialogHeader>

        <div className="space-y-6 px-2">
          {/* Social Login Buttons */}
          <div className="space-y-3">
            <Button
              onClick={() => handleSocialLogin('google')}
              variant="outline"
              className="w-full h-12 bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
            >
              <img 
                src="https://developers.google.com/identity/images/g-logo.png" 
                alt="Google" 
                className="w-5 h-5 mr-3"
              />
              <span className="font-medium" style={{ fontFamily: 'Kanit, sans-serif' }}>
                {t.loginWithGoogle}
              </span>
            </Button>

            <Button
              onClick={() => handleSocialLogin('facebook')}
              variant="outline"
              className="w-full h-12 bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div className="w-5 h-5 mr-3 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">f</span>
              </div>
              <span className="font-medium" style={{ fontFamily: 'Kanit, sans-serif' }}>
                {t.loginWithFacebook}
              </span>
            </Button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gradient-to-br from-green-50 to-blue-50 px-2 text-gray-500">or</span>
            </div>
          </div>

          {/* Email Login Form */}
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Kanit, sans-serif' }}>
                {t.email}
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="pl-10 h-12 rounded-xl border-2 border-gray-200 focus:border-green-400 bg-white"
                  style={{ fontFamily: 'Kanit, sans-serif' }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Kanit, sans-serif' }}>
                {t.password}
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t.passwordPlaceholder}
                  className="pl-10 pr-10 h-12 rounded-xl border-2 border-gray-200 focus:border-green-400 bg-white"
                  style={{ fontFamily: 'Kanit, sans-serif' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              style={{ fontFamily: 'Kanit, sans-serif' }}
            >
              <User className="mr-2 h-4 w-4" />
              {isSignUp ? t.signup : t.login}
            </Button>
          </form>

          {/* Toggle between Login/Signup */}
          <div className="text-center">
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Kanit, sans-serif' }}>
              {isSignUp ? t.haveAccount : t.noAccount}{" "}
              <button
                onClick={handleSignupClick}
                className="text-green-600 hover:text-green-700 font-medium underline"
              >
                {isSignUp ? t.switchToLogin : t.switchToSignup}
              </button>
            </p>
          </div>

          {/* Continue as Guest */}
          {onContinueAsGuest && (
            <Button
              onClick={() => {
                onContinueAsGuest();
                onClose();
              }}
              variant="ghost"
              className="w-full h-10 text-gray-600 hover:text-gray-800 rounded-xl"
              style={{ fontFamily: 'Kanit, sans-serif' }}
            >
              {t.continueAsGuest}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginPopup;
