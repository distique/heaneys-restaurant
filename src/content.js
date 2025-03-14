export const menus = {
  lunch: {
    name: 'Lunch Menu',
    sections: [
      {
        name: 'Starters',
        items: [
          {
            name: 'Soup of the Day',
            description: 'Served with fresh bread',
            price: '6.50'
          },
          {
            name: 'Welsh Rarebit',
            description: 'With leeks and mustard',
            price: '7.00'
          }
        ]
      },
      {
        name: 'Mains',
        items: [
          {
            name: 'Fish & Chips',
            description: 'Beer battered cod, triple cooked chips, mushy peas',
            price: '14.50'
          },
          {
            name: 'Steak Sandwich',
            description: 'Sirloin steak, caramelized onions, mustard mayo',
            price: '16.00'
          }
        ]
      }
    ]
  },
  dinner: {
    name: 'Dinner Menu',
    sections: [
      {
        name: 'Starters',
        items: [
          {
            name: 'Oysters',
            description: 'Fresh local oysters, shallot vinegar',
            price: '12.00'
          },
          {
            name: 'Beef Tartare',
            description: 'Hand cut beef, quail egg, sourdough',
            price: '14.00'
          }
        ]
      },
      {
        name: 'Mains',
        items: [
          {
            name: 'Welsh Lamb',
            description: 'Roasted rack, seasonal vegetables, red wine jus',
            price: '28.00'
          },
          {
            name: 'Catch of the Day',
            description: 'Market fresh fish, chefs preparation',
            price: 'Market Price'
          }
        ]
      }
    ]
  }
};

export const settings = {
  restaurant: {
    name: 'Heaneys Cardiff',
    contactInfo: {
      phone: '02920 341264',
      email: 'info@heaneyscardiff.co.uk',
      addressLine1: '6-10 Romilly Crescent',
      addressLine2: 'Pontcanna, Cardiff',
      postcode: 'CF11 9NR',
      uiscePhone: '02920 373009'
    },
    openingHours: {
      sunday: '12-6pm',
      monday: 'Closed',
      tuesday: 'Closed',
      wednesday: '12-11pm',
      thursday: '12-11pm',
      friday: '12-Midnight',
      saturday: '12-Midnight'
    },
    uisceOpeningHours: {
      sunday: '3pm - Late',
      monday: 'Closed',
      tuesday: 'Closed',
      wednesday: '5pm - 11pm',
      thursday: '5pm - 11pm',
      friday: '3pm - Late',
      saturday: '3pm - Late'
    },
    socialLinks: {
      instagram: 'https://www.instagram.com/heaneyscardiff/',
      facebook: 'https://www.facebook.com/heaneyscardiff',
      twitter: 'https://twitter.com/heaneyscardiff',
      tripadvisor: ''
    }
  },
  seo: {
    siteTitle: 'Heaneys Cardiff | Fine Dining Restaurant & UISCE Oyster Bar',
    siteDescription: 'Experience refined dining at Heaneys Cardiff with our seasonal menus featuring local ingredients and Chef\'s Garden produce. Visit UISCE, our oyster & wine bar.',
    ogImage: 'https://images.squarespace-cdn.com/content/v1/5f8d6829820fc27e9c2ac090/1603119562861-17CY8ZERA90LWUFMOEPZ/Heaneys_resturant_01.jpg'
  },
  hero: {
    headline1: 'Seasonal.',
    headline2: 'Local.',
    headline3: 'Uncompromising.',
    subheading: 'Fresh, bold flavors crafted with passion'
  }
};