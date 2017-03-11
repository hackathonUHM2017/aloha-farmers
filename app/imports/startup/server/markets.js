import { Markets } from '../../api/markets/markets.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Markets to pre-fill the Collection.
 * @type {*[]}
 */
const marketSeeds = [
  {
    name: 'Waikoloa Village Farmers Market',
    days: 'Saturday',
    start: '7:15 AM',
    finish: '10:00 AM',
    island: 'Hawaii',
    city: 'Waikoloa',
    address: '68-3625 Paniolo Ave',
    latitude: '19.942734768000435',
    longitude: '-155.79099041899974',
  },
  {
    name: 'Dole Cannery',
    days: 'Friday',
    start: '10:00 AM',
    finish: '5:00 PM',
    island: 'Oahu',
    city: 'Honolulu',
    address: '650 Iwilei Rd',
    latitude: '21.316240109000432',
    longitude: '-157.87050896699975',
  },
  {
    name: 'Makawao Farmers Market',
    days: 'Wednesday',
    start: '9:30 AM',
    finish: '2:00 PM',
    island: 'Maui',
    city: 'Makawao',
    address: '200 Olinda Rd',
    latitude: '20.849390600000447',
    longitude: '-156.30839892799975',
  },
  {
    name: 'Molokai Saturday Market',
    days: 'Saturday',
    start: '7:00 AM',
    finish: '12:00 PM',
    island: 'Molokai',
    city: 'Kaunakakai',
    address: '40 Ala Malama St',
    latitude: '21.09017112200047',
    longitude: '-157.02199661599974',
  },
];

/**
 * Initialize the Market collection if empty with seed data.
 */

if (Markets.find().count() === 0) {
  _.each(marketSeeds, function seedMarkets(stuff) {
    Markets.insert(stuff);
  });
}
