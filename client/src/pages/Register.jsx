import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle, Loader } from "lucide-react";
import api from "../utils/api.js";
import AuthLayout from "../components/AuthLayout";
import usePageTitle from "../hooks/usePageTitle";

const getPasswordStrength = (pass) => {
  if (!pass) return { strength: 0, label: "", color: "", bar: "" };
  let strength = 0;
  if (pass.length >= 8) strength++;
  if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) strength++;
  if (/\d/.test(pass)) strength++;
  if (/[^a-zA-Z\d]/.test(pass)) strength++;
  const levels = [
    { strength: 0, label: "", color: "", bar: "" },
    { strength: 1, label: "Weak", color: "text-red-500", bar: "bg-red-500" },
    { strength: 2, label: "Fair", color: "text-orange-500", bar: "bg-orange-500" },
    { strength: 3, label: "Good", color: "text-amber-500", bar: "bg-amber-500" },
    { strength: 4, label: "Strong", color: "text-emerald-600", bar: "bg-emerald-500" },
  ];
  return levels[strength];
};

const PasswordInput = ({ id, value, onChange, show, onToggle, placeholder, disabled, autoComplete }) => (
  <div className="relative">
    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
    <input
      id={id}
      type={show ? "text" : "password"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
      className="input pl-11 pr-12"
      disabled={disabled}
    />
    <button
      type="button"
      onClick={onToggle}
      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-brand"
      aria-label={show ? "Hide password" : "Show password"}
      disabled={disabled}
    >
      {show ? <EyeOff size={18} /> : <Eye size={18} />}
    </button>
  </div>
);

const Register = () => {
  usePageTitle("Join the Academy");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const passwordStrength = getPasswordStrength(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    if (name.length < 2) {
      setError("Name must be at least 2 characters long");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      await api.post("/auth/register", { name, email, password });
      setSuccess(true);
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      console.error("Registration error:", err);
      if (err.response?.status === 409 || err.response?.data?.message?.includes("exists")) {
        setError("This email is already registered. Please log in instead.");
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.message === "Network Error") {
        setError("Unable to connect to server. Please try again.");
      } else {
        setError("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const clear = (setter) => (e) => {
    setter(e.target.value);
    setError("");
  };

  return (
    <AuthLayout
      title={success ? "You're in!" : "Join the Academy"}
      subtitle={
        success
          ? "Your account has been created successfully."
          : "Create your TopestTech account to join the Academy and hear first about new sessions and programs."
      }
      points={["Practical, hands-on learning", "Real projects", "A growing community of learners"]}
      footer={
        !success && (
          <>
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-brand hover:text-brand-700">
              Log in
            </Link>
          </>
        )
      }
    >
      {success ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
          <CheckCircle className="mx-auto text-emerald-600" size={36} />
          <p className="mt-3 font-semibold text-emerald-800">Registration successful</p>
          <p className="mt-1 text-sm text-emerald-700">Redirecting you to the login page…</p>
        </div>
      ) : (
        <>
          {error && (
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
              <AlertCircle className="mt-0.5 shrink-0 text-red-500" size={18} />
              <p className="text-sm font-medium text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label htmlFor="reg-name" className="label">Full name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input id="reg-name" type="text" autoComplete="name" placeholder="Your full name" value={name} onChange={clear(setName)} className="input pl-11" disabled={loading} />
              </div>
            </div>

            <div>
              <label htmlFor="reg-email" className="label">Email address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input id="reg-email" type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={clear(setEmail)} className="input pl-11" disabled={loading} />
              </div>
            </div>

            <div>
              <label htmlFor="reg-password" className="label">Password</label>
              <PasswordInput
                id="reg-password"
                value={password}
                onChange={clear(setPassword)}
                show={showPassword}
                onToggle={() => setShowPassword(!showPassword)}
                placeholder="Create a strong password"
                autoComplete="new-password"
                disabled={loading}
              />
              {password && (
                <div className="mt-2 flex items-center gap-3">
                  <div className="flex flex-1 gap-1">
                    {[1, 2, 3, 4].map((n) => (
                      <span
                        key={n}
                        className={`h-1 flex-1 rounded-full ${n <= passwordStrength.strength ? passwordStrength.bar : "bg-slate-200"}`}
                      />
                    ))}
                  </div>
                  <span className={`text-xs font-semibold ${passwordStrength.color}`}>{passwordStrength.label}</span>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="reg-confirm" className="label">Confirm password</label>
              <PasswordInput
                id="reg-confirm"
                value={confirmPassword}
                onChange={clear(setConfirmPassword)}
                show={showConfirmPassword}
                onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
                placeholder="Confirm your password"
                autoComplete="new-password"
                disabled={loading}
              />
              {confirmPassword && password !== confirmPassword && (
                <p className="mt-1.5 text-xs font-medium text-red-500">Passwords don't match</p>
              )}
            </div>

            <button type="submit" disabled={loading} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? (
                <>
                  <Loader className="animate-spin" size={18} /> Creating account…
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-slate-400">
            By signing up, you agree to TopestTech's Terms of Service and Privacy Policy.
          </p>
        </>
      )}
    </AuthLayout>
  );
};

export default Register;
