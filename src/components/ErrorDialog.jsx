"use client";

import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FiAlertCircle, FiLoader, FiX, FiRefreshCcw } from 'react-icons/fi';

const ErrorDialog = ({ 
  isOpen, 
  setIsOpen, 
  title = "Error",
  message = "An error occurred while loading the content.", 
  onRetry 
}) => {
  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog 
        as="div" 
        className="relative z-50"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                      <FiAlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-white">
                      {title}
                    </Dialog.Title>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {message}
                    </p>
                    
                    <div className="mt-6 flex gap-3">
                      {onRetry && (
                        <button
                          onClick={onRetry}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 
                          hover:bg-amber-600 text-white transition-colors"
                        >
                          <FiRefreshCcw className="w-4 h-4" />
                          Try Again
                        </button>
                      )}
                      <button
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                        text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700
                        transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex-shrink-0 text-gray-400 hover:text-gray-500 
                    dark:text-gray-500 dark:hover:text-gray-400 transition-colors"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ErrorDialog;