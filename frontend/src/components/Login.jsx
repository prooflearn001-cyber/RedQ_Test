export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
      <div className="w-full max-w-md bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
        
        {/* Header */}
        <div className="px-8 py-6 text-center border-b border-gray-700">
          <h1 className="text-3xl font-bold text-cyan-400">Welcome Back</h1>
          <p className="text-gray-400 mt-2">Log in to your account</p>
        </div>

        {/* Body */}
        <div className="px-8 py-8 space-y-6">
          {/* Email */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-gray-600 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-gray-600 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-400">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-cyan-400 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold rounded-lg shadow-lg transition">
            Sign In
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-700" />
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <hr className="flex-1 border-gray-700" />
          </div>

          {/* Social Buttons */}
          <div className="space-y-3">
            {/* Google */}
            <button className="w-full py-3 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-lg flex items-center justify-center gap-2 shadow-md transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5" />
              Continue with Google
            </button>

            {/* Facebook */}
            <button className="w-full py-3 bg-[#1877F2] hover:bg-[#145DB2] text-white font-medium rounded-lg flex items-center justify-center gap-2 shadow-md transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" className="w-5 h-5" />
              Continue with Facebook
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 bg-slate-800 text-center border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            Don’t have an account?{" "}
            <a href="#" className="text-cyan-400 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
