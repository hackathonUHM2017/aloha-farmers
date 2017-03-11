import { Markets } from '../../api/markets/markets.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Markets to pre-fill the Collection.
 * @type {*[]}
 */

const marketSeeds = [
  {
    Name: 'Waikoloa Village Farmers Market',
    Days: 'Saturday',
    Start: '7:15 AM',
    Finish: '10:00 AM',
    Island: 'Hawaii',
    City: 'Waikoloa',
    Address: '68-3625 Paniolo Ave',
    Latitude: '19.942734768000435',
    Longitude: '-155.79099041899974',
  },
  {
    Name: 'Dole Cannery',
    Days: 'Friday',
    Start: '10:00 AM',
    Finish: '5:00 PM',
    Island: 'Oahu',
    City: 'Honolulu',
    Address: '650 Iwilei Rd',
    Latitude: '21.316240109000432',
    Longitude: '-157.87050896699975',
  },
  {
    Name: 'Makawao Farmers Market',
    Days: 'Wednesday',
    Start: '9:30 AM',
    Finish: '2:00 PM',
    Island: 'Maui',
    City: 'Makawao',
    Address: '200 Olinda Rd',
    Latitude: '20.849390600000447',
    Longitude: '-156.30839892799975',
  },
  {
    Name: 'Molokai Saturday Market',
    Days: 'Saturday',
    Start: '7:00 AM',
    Finish: '12:00 PM',
    Island: 'Molokai',
    City: 'Kaunakakai',
    Address: '40 Ala Malama St',
    Latitude: '21.09017112200047',
    Longitude: '-157.02199661599974',
  },
];


/**
 * Initialize the Contacts collection if empty with seed data.
 */

if (Markets.find().count() === 0) {
  _.each(marketSeeds, function seedMarkets(markets) {
    Markets.insert(markets);
  });
}

