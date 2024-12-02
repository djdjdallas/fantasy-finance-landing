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
        // Redirect to home page after 3 seconds
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md w-full mx-4">
        <div className="bg-gray-900 rounded-lg shadow-xl p-8 text-center">
          {status === "confirming" && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Confirming your email...
              </h2>
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto"></div>
            </div>
          )}

          {status === "success" && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Email Confirmed!
              </h2>
              <p className="text-green-500 mb-4">
                Your email has been successfully verified.
              </p>
              <p className="text-gray-400">
                Redirecting you to the homepage...
              </p>
            </div>
          )}

          {status === "error" && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Verification Failed
              </h2>
              <p className="text-red-500 mb-4">
                Sorry, we couldn't verify your email.
              </p>
              <button
                onClick={() => router.push("/")}
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Return Home
              </button>
            </div>
          )}

          {status === "invalid" && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Invalid Confirmation Link
              </h2>
              <p className="text-red-500 mb-4">
                The confirmation link appears to be invalid.
              </p>
              <button
                onClick={() => router.push("/")}
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Return Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
