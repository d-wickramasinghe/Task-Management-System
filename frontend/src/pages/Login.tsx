// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../services/api";

// function Login() {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const res = await api.post("/auth/login", {
//         email,
//         password,
//       });

//       localStorage.setItem("token", res.data.token);

//       navigate("/dashboard");

//     } catch (err) {
//       alert("Invalid email or password");
//     }
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h1>Task Management Login</h1>

//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <br /><br />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <br /><br />

//         <button type="submit">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Eye, EyeOff, ClipboardCheck, ShieldCheck, BarChart3, Loader2 } from "lucide-react";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      toast.success("Welcome back!");
      navigate("/dashboard");
    } catch (err) {
      toast.error("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
        {/* Hero side */}
        <div className="hidden lg:flex flex-col justify-between bg-indigo-950 text-white p-12">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center">
              <ClipboardCheck size={18} strokeWidth={2.5} />
            </div>
            <span className="text-lg font-semibold tracking-tight">TaskFlow</span>
          </div>

          <div>
            <h1 className="text-3xl font-bold tracking-tight leading-tight mb-3">
              Welcome back
            </h1>
            <p className="text-indigo-200 text-sm leading-relaxed mb-8 max-w-xs">
              Manage your work with ease. Sign in to pick up right where you left off.
            </p>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5 text-indigo-100">
                <ShieldCheck size={16} className="text-indigo-400 shrink-0" />
                Secure JWT authentication
              </li>
              <li className="flex items-center gap-2.5 text-indigo-100">
                <ClipboardCheck size={16} className="text-indigo-400 shrink-0" />
                Effortless task management
              </li>
              <li className="flex items-center gap-2.5 text-indigo-100">
                <BarChart3 size={16} className="text-indigo-400 shrink-0" />
                Insightful analytics dashboard
              </li>
            </ul>
          </div>

          <p className="text-xs text-indigo-400">© 2026 TaskFlow. All rights reserved.</p>
        </div>

        {/* Form side */}
        <div className="flex flex-col justify-center p-8 sm:p-12">
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <ClipboardCheck size={18} strokeWidth={2.5} />
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900">TaskFlow</span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">
            Sign in to your account
          </h2>
          <p className="text-sm text-slate-500 mb-8">
            Enter your details below to continue.
          </p>

          <form onSubmit={handleLogin} noValidate className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1.5">
                Email
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full border rounded-lg px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 transition-shadow duration-150 focus:ring-2 focus:outline-none ${
                  errors.email
                    ? "border-red-400 focus:ring-red-500/30 focus:border-red-500"
                    : "border-slate-300 focus:ring-indigo-500/40 focus:border-indigo-500"
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full border rounded-lg px-3.5 py-2.5 pr-10 text-sm text-slate-800 placeholder:text-slate-400 transition-shadow duration-150 focus:ring-2 focus:outline-none ${
                    errors.password
                      ? "border-red-400 focus:ring-red-500/30 focus:border-red-500"
                      : "border-slate-300 focus:ring-indigo-500/40 focus:border-indigo-500"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-500 mt-1.5">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500/40"
                />
                Remember me
              </label>
              <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 disabled:bg-indigo-400 disabled:cursor-not-allowed text-white text-sm font-semibold py-3 rounded-lg transition-colors duration-150 shadow-sm hover:shadow"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <p className="text-sm text-slate-500 text-center mt-8">
            Don't have an account?{" "}
            <a href="/register" className="text-indigo-600 hover:text-indigo-700 font-medium">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;