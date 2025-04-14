import React from 'react';
import Link from 'next/link';
import { FaHome, FaArrowLeft } from 'react-icons/fa';
import Layout from '@/components/Layout/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-3xl font-bold">Page Not Found</h2>
        <p className="mt-6 max-w-md text-gray-600 dark:text-gray-300">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link
            href="/"
            className="flex items-center justify-center space-x-2 rounded-md bg-primary px-6 py-3 text-white transition-colors hover:bg-primary-dark"
          >
            <FaHome />
            <span>Go to Homepage</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center space-x-2 rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-dark dark:text-gray-200 dark:hover:bg-gray-800"
          >
            <FaArrowLeft />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage; 