require('dotenv').config();

const { mungeLocation, mungeWeather, mungeTrails, mungeYelp } = require('../utils.js');
const weatherData = require('../data/weather.json');
const trailData = require('../data/trails.json');

describe('app routes', () => {
  describe('routes', () => {

    test('returns munged locations', () => {

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



    test('returns munged weather', () => {

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


    test('returns munged trails', () => {

      const expectation =
      [
        {
          'condition_date': '2020-10-13',
          'condition_time': '14:06:06',
          'conditions': 'Dry',
          'length': 19.1,
          'location': 'Leavenworth, Washington',
          'name': 'Enchantments Traverse',
          'star_votes': 77,
          'stars': 4.9,
          'summary': 'An extraordinary hike that takes you through all of the beauty that the Enchantments have to offer!',
          'trail_url': 'https://www.hikingproject.com/trail/7005246/enchantments-traverse',
        },
        {
          'condition_date': '2020-10-17',
          'condition_time': '20:45:08',
          'conditions': 'Some Mud - foggy with some rain',
          'length': 5.3,
          'location': 'Eatonville, Washington',
          'name': 'Skyline Trail',
          'star_votes': 97,
          'stars': 4.8,
          'summary': 'A popular and easily accessible route, skirting the slopes of Mount Rainier and Paradise Glacier.',
          'trail_url': 'https://www.hikingproject.com/trail/7002140/skyline-trail',
        },
        {
          'condition_date': '2020-10-03',
          'condition_time': '16:34:57',
          'conditions': 'Dry',
          'length': 7.8,
          'location': 'Lyons, Oregon',
          'name': 'Trail of Ten Falls',
          'star_votes': 86,
          'stars': 4.7,
          'summary': 'A captivating loop that travels to all of the waterfalls in the park.',
          'trail_url': 'https://www.hikingproject.com/trail/7022261/trail-of-ten-falls',
        },
        {
          'condition_date': '2020-09-07',
          'condition_time': '16:58:30',
          'conditions': 'Dry',
          'length': 4.3,
          'location': 'Riverbend, Washington',
          'name': 'Rattlesnake Ledge',
          'star_votes': 133,
          'stars': 4.4,
          'summary': 'An extremely popular out-and-back hike to the viewpoint on Rattlesnake Ledge.',
          'trail_url': 'https://www.hikingproject.com/trail/7021679/rattlesnake-ledge',
        },
        {
          'condition_date': '2020-11-06',
          'condition_time': '13:44:50',
          'conditions': 'Some Mud',
          'length': 2.3,
          'location': 'Riverbend, Washington',
          'name': 'Twin Falls',
          'star_votes': 70,
          'stars': 4.3,
          'summary': 'A classic family-friendly route through old growth trees with a spectacular waterfall in the mix.',
          'trail_url': 'https://www.hikingproject.com/trail/7019080/twin-falls',
        },
        {
          'condition_date': '2020-10-02',
          'condition_time': '12:45:58',
          'conditions': 'Dry',
          'length': 4.1,
          'location': 'Terrebonne, Oregon',
          'name': 'Misery Ridge Loop',
          'star_votes': 48,
          'stars': 4.8,
          'summary': 'The most popular route in Smith Rock State Park.',
          'trail_url': 'https://www.hikingproject.com/trail/7006070/misery-ridge-loop',
        },
        {
          'condition_date': '2020-08-22',
          'condition_time': '15:00:37',
          'conditions': '',
          'length': 9.7,
          'location': 'Riverbend, Washington',
          'name': 'Mailbox Peak Trail',
          'star_votes': 52,
          'stars': 4.5,
          'summary': 'An infamous (easier) hike with a mailbox (maintained by volunteers) at the top!',
          'trail_url': 'https://www.hikingproject.com/trail/7005408/mailbox-peak-trail',
        },
        {
          'condition_date': '2020-08-07',
          'condition_time': '12:30:26',
          'conditions': 'Dry - spur loop at top of mountain is impassable unless you like bushwhacking',
          'length': 6.5,
          'location': 'Carson, Washington',
          'name': 'Dog Mountain Trail #147',
          'star_votes': 48,
          'stars': 4.5,
          'summary': 'Great views of the Columbia River Gorge.',
          'trail_url': 'https://www.hikingproject.com/trail/7005409/dog-mountain-trail-147',
        },
        {
          'condition_date': '2020-09-29',
          'condition_time': '22:41:04',
          'conditions': 'Muddy',
          'length': 5.6,
          'location': 'Eatonville, Washington',
          'name': 'Tolmie Peak',
          'star_votes': 40,
          'stars': 4.7,
          'summary': 'A manageable out-and-back showcasing multiple lakes and panoramic views from atop Tolmie Peak.',
          'trail_url': 'https://www.hikingproject.com/trail/7002181/tolmie-peak',
        },
        {
          'condition_date': '2020-08-30',
          'condition_time': '18:14:35',
          'conditions': 'Dry',
          'length': 3.6,
          'location': 'Eatonville, Washington',
          'name': 'Naches Peak Loop',
          'star_votes': 39,
          'stars': 4.7,
          'summary': 'This loop provides some of the best views of Mount Rainier around, and a plethora of wildflowers.',
          'trail_url': 'https://www.hikingproject.com/trail/7002094/naches-peak-loop',
        },
      ];

      const result = mungeTrails(trailData);
      expect(result).toEqual(expectation);
    });
  });
});
