import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';
import { clsx } from 'clsx';

interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'success',
  onClose,
  duration = 5000,
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div
      className={clsx(
        'fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl border text-sm font-medium animate-slideUp',
        type === 'success'
          ? 'bg-[#17221F] text-white border-[#526E68]'
          : 'bg-red-900 text-white border-red-700'
      )}
    >
      {type === 'success' ? (
        <CheckCircle2 className="w-5 h-5 text-[#526E68] flex-shrink-0" />
      ) : (
        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
      )}
      <span>{message}</span>
      <button onClick={onClose} className="ml-2 p-1 text-white/60 hover:text-white transition-colors">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
