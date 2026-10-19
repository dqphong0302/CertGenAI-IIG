import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QuizApp } from '@/components/quiz/quiz-app';
import './globals.css';

const container = document.getElementById('root');
if (!container) throw new Error('Thiếu #root trong index.html');

createRoot(container).render(
  <StrictMode>
    <QuizApp />
  </StrictMode>,
);
