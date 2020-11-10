require('dotenv').config();

const { mungeLocation, mungeWeather } = require('../utils.js');
const weatherData = require('../data/weather.json');

describe('app routes', () => {
  describe('routes', () => {

    test('returns locations', () => {

      const location = [{
        'place_id': '282983083',
        'licence': 'https://locationiq.com/attribution',
        'osm_type': 'relation',
        'osm_id': '186579',
        'boundingbox': [
          '45.432536',
          '45.6528812',
          '-122.8367489',
          '-122.4720252'
        ],
        'lat': '45.5202471',
        'lon': '-122.6741949',
        'display_name': 'Portland, Multnomah County, Oregon, USA',
        'class': 'place',
        'type': 'city',
        'importance': 0.75356571743377,
        'icon': 'https://locationiq.org/static/images/mapicons/poi_place_city.p.20.png'
      }];

      const expectation =
      {
        formatted_query: 'Portland, Multnomah County, Oregon, USA',
        latitude: '45.5202471',
        longitude: '-122.6741949'
      };

      const result = mungeLocation(location);
      expect(result).toEqual(expectation);
    });



    test('returns weather', () => {

      const expectation =
      [
        {
          'forecast': 'Scattered clouds', 'time': '2020-05-05'
        },
        {
          'forecast': 'Light snow', 'time': '2020-05-06'
        }, 
        {
          'forecast': 'Few clouds', 'time': '2020-05-07'
        }, 
        {
          'forecast': 'Few clouds', 'time': '2020-05-08'
        }, 
        {
          'forecast': 'Broken clouds', 'time': '2020-05-09'
        }, 
        {
          'forecast': 'Overcast clouds', 'time': '2020-05-10'
        }, 
        {
          'forecast': 'Overcast clouds', 'time': '2020-05-11'
        }, 
        {
          'forecast': 'Light rain', 'time': '2020-05-12'
        }];

      const result = mungeWeather(weatherData);
      expect(result).toEqual(expectation);
    });
  });
});
