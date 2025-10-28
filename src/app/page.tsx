"use client";

import {useState} from "react";

export default function Home() {
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleApiCall = async () => {
    setLoading(true);
    setError("");
    setResponse("");

    try {
      const res = await fetch("/api/config");
      const data = await res.json();

      if (data.success) {
        setResponse(data.data);
      } else {
        setError(data.error || "Erro desconhecido");
      }
    } catch (err) {
      console.error("Erro ao chamar API:", err);
      setError("Erro ao conectar com o servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            API Tester
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
            Teste sua API com um clique
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 flex items-center justify-center flex-col gap-2">
          {/* Button */}
          <div className="flex items-center justify-center">
            <button
              onClick={handleApiCall}
              disabled={loading}
              className={`
                relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-xl
                transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer
                shadow-lg hover:shadow-xl
                ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                }
                disabled:transform-none disabled:hover:scale-100
                focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800
              `}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Carregando...
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Chamar API
                </>
              )}
            </button>
          </div>

          {/* Response Area */}
          {(response || error) && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Resposta da API:
              </h3>

              {error ? (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-red-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-red-700 dark:text-red-300 font-medium">
                      Erro:
                    </span>
                  </div>
                  <p className="text-red-600 dark:text-red-400 mt-2">{error}</p>
                </div>
              ) : (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-green-700 dark:text-green-300 font-medium">
                      Sucesso!
                    </span>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-md p-3 border border-gray-200 dark:border-gray-600">
                    <pre className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap font-mono text-sm">
                      {response}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Feito com ❤️ usando Next.js e Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}
