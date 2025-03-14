import React, { createContext, useContext, useState, useEffect } from 'react';
import { settings as defaultSettings } from '../content';

interface Settings {
  restaurant: {
    contactInfo: {
      phone: string;
      email: string;
      addressLine1: string;
      addressLine2: string;
      postcode: string;
    };
    openingHours: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    };
    socialLinks: {
      facebook: string;
      instagram: string;
      twitter: string;
    };
  };
  seo: {
    siteTitle: string;
    siteDescription: string;
    ogImage: string;
  };
  hero: {
    headline1: string;
    headline2: string;
    headline3: string;
    subheading: string;
  };
}

interface SettingsContextType {
  settings: Settings | null;
  isLoading: boolean;
  error: string | null;
}

const SettingsContext = createContext<SettingsContextType>({
  settings: null,
  isLoading: true,
  error: null,
});

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setSettings(defaultSettings);
      setIsLoading(false);
    } catch (err) {
      setError('Failed to load settings');
      setIsLoading(false);
    }
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, isLoading, error }}>
      {children}
    </SettingsContext.Provider>
  );
};