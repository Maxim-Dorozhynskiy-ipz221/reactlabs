import { useState, useEffect } from 'react';

/**
 * Хук для відстеження кліків поза елементом
 * @param {Ref} ref - реф елемента, для якого потрібно відслідковувати кліки
 * @param {Function} callback - функція, яка викликається при кліку поза елементом
 */
const useClickOutside = (ref, callback) => {
  useEffect(() => {
    // Функція, яка перевіряє, чи клік був поза елементом
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    // Додаємо слухач події
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    // Очищаємо слухачі події при розмонтуванні компонента
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, callback]);
};

export default useClickOutside;
