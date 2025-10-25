import React, { createContext, useContext, useState, useEffect } from 'react';

type Mood = 'light' | 'dark' | 'yellow' | 'red' | 'green' | 'blue' | 'golden';

interface MoodContextType {
  mood: Mood;
  setMood: (mood: Mood) => void;
}

const MoodContext = createContext<MoodContextType | undefined>(undefined);

export const MoodProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mood, setMood] = useState<Mood>(() => {
    const saved = localStorage.getItem('mood');
    return (saved as Mood) || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark', 'yellow', 'red', 'green', 'blue', 'golden');
    root.classList.add(mood);
    localStorage.setItem('mood', mood);
  }, [mood]);

  return (
    <MoodContext.Provider value={{ mood, setMood }}>
      {children}
    </MoodContext.Provider>
  );
};

export const useMood = () => {
  const context = useContext(MoodContext);
  if (!context) throw new Error('useMood must be used within MoodProvider');
  return context;
};
