import React, { useEffect, useState } from 'react';

const NavigationControl = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [pushStateEnabled, setPushStateEnabled] = useState(false);
  const [hasHistory, setHasHistory] = useState(false);

  useEffect(() => {
    // Check if there's previous history
    setHasHistory(window.history.length > 1);

    const handleBeforeUnload = (event) => {
      if (pushStateEnabled) {
        event.preventDefault();
        event.returnValue = '';
      }
    };

    const handlePopState = () => {
      if (pushStateEnabled) {
        window.history.pushState(null, '', window.location.pathname);
        setShowDialog(true);
      }
    };

    if (pushStateEnabled) {
      window.history.pushState(null, '', window.location.pathname);
    }

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [pushStateEnabled]);

  const handleConfirmNavigation = () => {
    setShowDialog(false);
    setPushStateEnabled(false);

    // Try to go back first
    if (hasHistory) {
      window.history.back();
    } else {
      // If no history exists, redirect to home page
      window.location.href = '/';
    }
  };

  const handleCancelNavigation = () => {
    setShowDialog(false);
  };

  // Function to navigate home directly
  const goToHomePage = () => {
    setShowDialog(false);
    setPushStateEnabled(false);
    window.location.href = '/';
  };

  return (
    <div className="p-4">
      {/* Alert Message */}
      <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4">
        This page has navigation controls enabled. Try using the browser's back button.
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setPushStateEnabled(!pushStateEnabled)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
      >
        {pushStateEnabled ? 'Disable' : 'Enable'} Push State Navigation Control
      </button>

      {/* Navigation Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
            <h2 className="text-xl font-bold mb-4">Are you sure you want to leave?</h2>
            <p className="mb-6">You have unsaved changes. Are you sure you want to leave this page?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleConfirmNavigation}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                {hasHistory ? 'Go Back' : 'Go to Home'}
              </button>
              <button
                onClick={handleCancelNavigation}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Stay on Page
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationControl;
