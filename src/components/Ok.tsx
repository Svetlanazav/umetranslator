export function Ok() {
  return (
    <div className="text-center py-4 sm:py-6">
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 sm:h-7 sm:w-7 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h4 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">
        Thank You!
      </h4>
      <p className="text-sm sm:text-base text-gray-600">
        We'll notify you when Ume launches. Get ready to transform your texting
        game!
      </p>
    </div>
  );
}
