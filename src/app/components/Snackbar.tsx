"use client";

import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

interface SnackbarContextType {
  showSnackbar: (message: string, type?: 'success' | 'error' | 'info' | 'warning') => void;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export function useSnackbar() {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar deve ser usado dentro de SnackbarProvider');
  }
  return context;
}

export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'success' | 'error' | 'info' | 'warning'>('info');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showSnackbar = useCallback((msg: string, t: 'success' | 'error' | 'info' | 'warning' = 'info') => {
    setMessage(msg);
    setType(t);
    setOpen(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setOpen(false), 4000);
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {open && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded shadow-lg text-button bg-button transition-all
            ${type === 'success' ? 'bg-button' : type === 'error' ? 'bg-error text-error' : type === 'warning' ? 'bg-highlight text-card' : 'bg-card text-card'}`}
          tabIndex={0}
        >
          <span>{message}</span>
          <button
            onClick={handleClose}
            aria-label="Fechar notificação"
            className="ml-4 text-button hover:text-card focus:outline-none"
          >
            ×
          </button>
        </div>
      )}
    </SnackbarContext.Provider>
  );
};
