import React from "react";

const WaitlistFormPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 mt-16 mb-8">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfzKQpevY5oGmDv9FFJHaGtCIzbsSnXADGNuQsEBDfF3H9YIg/viewform?embedded=true"
        style={{ width: '100%' }}
        height={700}
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title="Waitlist Form"
        className="w-full rounded-lg border"
      >
        Loading…
      </iframe>
    </div>
  </div>
);

export default WaitlistFormPage;
