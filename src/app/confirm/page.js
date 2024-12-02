"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "../lib/supabase";

export default function ConfirmationPage() {
  const [status, setStatus] = useState("confirming");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        const token = searchParams.get("token");
        console.log("Received token:", token); // Debug log

        if (!token) {
          console.log("No token found in URL"); // Debug log
          setStatus("invalid");
          return;
        }

        // Using the auth-helpers-nextjs method for verification
        const { error } = await supabase.auth.verifyOtp({
          token_hash: token,
          type: "signup",
        });

        if (error) {
          console.error("Verification error:", error);
          setStatus("error");
          return;
        }

        console.log("Email verification successful");
        setStatus("success");

        // Redirect after success
        setTimeout(() => {
          router.push("/");
        }, 3000);
      } catch (error) {
        console.error("Confirmation error:", error);
        setStatus("error");
      }
    };

    confirmEmail();
  }, [searchParams, router]);

  const renderContent = () => {
    switch (status) {
      case "confirming":
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Confirming your email...
            </h2>
            <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        );

      case "success":
        return (
          <div className="text-center">
            <div className="mb-4 text-6xl">✓</div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Email Confirmed!
            </h2>
            <p className="text-green-500 mb-4">
              Your email has been successfully verified.
            </p>
            <p className="text-gray-400">Redirecting you to the homepage...</p>
          </div>
        );

      case "error":
        return (
          <div className="text-center">
            <div className="mb-4 text-6xl">⚠</div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Verification Failed
            </h2>
            <p className="text-red-500 mb-4">
              We encountered an error while verifying your email.
            </p>
            <button
              onClick={() => router.push("/")}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              Return Home
            </button>
          </div>
        );

      case "invalid":
        return (
          <div className="text-center">
            <div className="mb-4 text-6xl">⚠</div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Invalid Confirmation Link
            </h2>
            <p className="text-red-500 mb-4">
              The confirmation link appears to be invalid.
            </p>
            <button
              onClick={() => router.push("/")}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              Return Home
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 rounded-xl shadow-2xl p-8 border border-gray-800">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
