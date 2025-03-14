import React from 'react';
import { useSettings } from '../context/SettingsContext';

const WebsiteSettings: React.FC = () => {
  const { settings, isLoading, error } = useSettings();

  if (isLoading) {
    return <div>Loading settings...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!settings) {
    return <div>No settings found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Website Settings</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Restaurant Information</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Contact Information</h3>
            <p>Phone: {settings.restaurant.contactInfo.phone}</p>
            <p>Email: {settings.restaurant.contactInfo.email}</p>
            <p>Address: {settings.restaurant.contactInfo.addressLine1}</p>
            <p>{settings.restaurant.contactInfo.addressLine2}</p>
            <p>{settings.restaurant.contactInfo.postcode}</p>
          </div>

          <div>
            <h3 className="font-medium">Opening Hours</h3>
            <div className="grid grid-cols-2 gap-2">
              <p>Sunday:</p><p>{settings.restaurant.openingHours.sunday}</p>
              <p>Monday:</p><p>{settings.restaurant.openingHours.monday}</p>
              <p>Tuesday:</p><p>{settings.restaurant.openingHours.tuesday}</p>
              <p>Wednesday:</p><p>{settings.restaurant.openingHours.wednesday}</p>
              <p>Thursday:</p><p>{settings.restaurant.openingHours.thursday}</p>
              <p>Friday:</p><p>{settings.restaurant.openingHours.friday}</p>
              <p>Saturday:</p><p>{settings.restaurant.openingHours.saturday}</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium">Social Links</h3>
            <p>Instagram: {settings.restaurant.socialLinks.instagram}</p>
            <p>Facebook: {settings.restaurant.socialLinks.facebook}</p>
            <p>Twitter: {settings.restaurant.socialLinks.twitter}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">SEO Settings</h2>
        <div className="space-y-2">
          <p><strong>Site Title:</strong> {settings.seo.siteTitle}</p>
          <p><strong>Description:</strong> {settings.seo.siteDescription}</p>
          <p><strong>OG Image:</strong> {settings.seo.ogImage}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">Hero Section</h2>
        <div className="space-y-2">
          <p><strong>Headline 1:</strong> {settings.hero.headline1}</p>
          <p><strong>Headline 2:</strong> {settings.hero.headline2}</p>
          <p><strong>Headline 3:</strong> {settings.hero.headline3}</p>
          <p><strong>Subheading:</strong> {settings.hero.subheading}</p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteSettings;