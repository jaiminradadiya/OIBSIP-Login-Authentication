import React from 'react';

const SecuredPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-green-100">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Secured Page</h2>
        <p className="text-lg">You are logged in and can view this content!</p>
      </div>
    </div>
  );
};

export default SecuredPage;
