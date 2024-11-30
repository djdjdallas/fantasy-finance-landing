"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { supabase } from "../lib/supabase";
export default function ConfirmationPage() {
  const [status, setStatus] = useState("confirming");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        const token = searchParams.get("token");
        const type = searchParams.get("type");

        if (!token || !type) {
          setStatus("invalid");
          return;
        }

        const { error } = await supabase.auth.verifyOtp({
          token_hash: token,
          type: type,
        });

        if (error) {
          console.error("Verification error:", error);
          setStatus("error");
          return;
        }

        setStatus("success");
        // Redirect after successful confirmation
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
            <Loader2 className="h-16 w-16 text-green-500 animate-spin mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">
              Confirming your email...
            </h2>
            <p className="text-gray-400">
              Please wait while we verify your account
            </p>
          </div>
        );

      case "success":
        return (
          <div className="flex flex-col items-center">
            <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">
              Email Confirmed!
            </h2>
            <p className="text-gray-400 mb-4">
              Your email has been successfully verified
            </p>
            <p className="text-green-500">Redirecting you to Commons...</p>
          </div>
        );

      case "error":
        return (
          <div className="flex flex-col items-center">
            <XCircle className="h-16 w-16 text-red-500 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">
              Verification Failed
            </h2>
            <p className="text-gray-400 mb-6">
              We couldn't verify your email. Please try again.
            </p>
            <button
              onClick={() => router.push("/")}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-200 font-semibold"
            >
              Return to Commons
            </button>
          </div>
        );

      case "invalid":
        return (
          <div className="flex flex-col items-center">
            <XCircle className="h-16 w-16 text-red-500 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">
              Invalid Confirmation Link
            </h2>
            <p className="text-gray-400 mb-6">
              The confirmation link appears to be invalid or has expired.
            </p>
            <button
              onClick={() => router.push("/")}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-200 font-semibold"
            >
              Return to Commons
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-2xl p-8">
          <div className="flex justify-center mb-8">
            <h1 className="text-2xl font-bold text-green-500">Commons</h1>
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
