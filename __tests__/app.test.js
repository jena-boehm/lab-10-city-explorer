require('dotenv').config();

const { mungeLocation, mungeWeather, mungeTrails, mungeYelp } = require('../utils.js');
const weatherData = require('../data/weather.json');
const trailData = require('../data/trails.json');
const yelpData = require('../data/reviews.json');

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


    test('returns munged reviews', () => {

      const expectation = [
        {
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/qHrzQy5ih2Sjhn7MdsCASw/o.jpg',
          'name': 'Voodoo Doughnut - Old Town',
          'price': '$',
          'rating': 3.5,
          'url': 'https://www.yelp.com/biz/voodoo-doughnut-old-town-portland-2?adjust_creative=fCmmSJMY8yOZVwHRjx4WDg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fCmmSJMY8yOZVwHRjx4WDg',
        },
        {
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/Ij9yv97Ch6NwKhNdpezRhw/o.jpg',
          'name': 'Andina Restaurant',
          'price': '$$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/andina-restaurant-portland?adjust_creative=fCmmSJMY8yOZVwHRjx4WDg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fCmmSJMY8yOZVwHRjx4WDg',
        },
        {
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/wxLJSjqdB0v3wZSRqyNweg/o.jpg',
          'name': 'Lechon',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/lechon-portland?adjust_creative=fCmmSJMY8yOZVwHRjx4WDg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fCmmSJMY8yOZVwHRjx4WDg',
        },
        {
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/9m-lciDcKbAOAvhh0uWAvw/o.jpg',
          'name': 'Luc Lac',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/luc-lac-portland-7?adjust_creative=fCmmSJMY8yOZVwHRjx4WDg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fCmmSJMY8yOZVwHRjx4WDg',
        },
        {
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/a-Av4dG6Xv3f1_XysFj4ow/o.jpg',
          'name': 'Deschutes Brewery Portland Public House',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/deschutes-brewery-portland-public-house-portland?adjust_creative=fCmmSJMY8yOZVwHRjx4WDg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fCmmSJMY8yOZVwHRjx4WDg',
        },
        {
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/pamrPZVIJuIhiRhOSZMH6g/o.jpg',
          'name': 'Portland City Grill',
          'price': '$$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/portland-city-grill-portland?adjust_creative=fCmmSJMY8yOZVwHRjx4WDg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fCmmSJMY8yOZVwHRjx4WDg',
        },
        {
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/w1tcp-5xJyQz19HH05JoVA/o.jpg',
          'name': 'Cheryl’s on 12th',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/cheryl-s-on-12th-portland?adjust_creative=fCmmSJMY8yOZVwHRjx4WDg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fCmmSJMY8yOZVwHRjx4WDg',
        },
        {
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/jAH0XyZe5N8YTrOy71SuJg/o.jpg',
          'name': 'Q Restaurant & Bar',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/q-restaurant-and-bar-portland?adjust_creative=fCmmSJMY8yOZVwHRjx4WDg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fCmmSJMY8yOZVwHRjx4WDg',
        },
        {
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/r6y-0Q2z3cnx1bQKxn-iHw/o.jpg',
          'name': 'Salt & Straw',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/salt-and-straw-portland-2?adjust_creative=fCmmSJMY8yOZVwHRjx4WDg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fCmmSJMY8yOZVwHRjx4WDg',
        },
        {
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/jtp9n8HTjid4lEeXlcKKiA/o.jpg',
          'name': 'Nong\'s Khao Man Gai',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/nongs-khao-man-gai-portland-2?adjust_creative=fCmmSJMY8yOZVwHRjx4WDg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fCmmSJMY8yOZVwHRjx4WDg',
        },
        {
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/zloG1rU5-15Q4MVmf8inbA/o.jpg',
          'name': 'Grassa',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/grassa-portland?adjust_creative=fCmmSJMY8yOZVwHRjx4WDg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fCmmSJMY8yOZVwHRjx4WDg',
        },
        {
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/Zetji_yDJJDG8eksunYiTg/o.jpg',
          'name': 'Cuon - Vietnamese Street Food',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/cuon-vietnamese-street-food-portland-3?adjust_creative=fCmmSJMY8yOZVwHRjx4WDg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fCmmSJMY8yOZVwHRjx4WDg',
        },
        {
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/ZRKWUoGRDo1FryxlHfooRw/o.jpg',
          'name': 'Stumptown Coffee Roasters',
          'price': '$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/stumptown-coffee-roasters-portland?adjust_creative=fCmmSJMY8yOZVwHRjx4WDg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fCmmSJMY8yOZVwHRjx4WDg',
        },
        {
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/ARlFgwCNq62izXYf1TUQiA/o.jpg',
          'name': 'Le Pigeon',
          'price': '$$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/le-pigeon-portland-2?adjust_creative=fCmmSJMY8yOZVwHRjx4WDg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fCmmSJMY8yOZVwHRjx4WDg',
        },
        {
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/w8w2mkIrowArbwpzIInq9g/o.jpg',
          'name': 'Olympia Provisions',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/olympia-provisions-portland-2?adjust_creative=fCmmSJMY8yOZVwHRjx4WDg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fCmmSJMY8yOZVwHRjx4WDg',
        },
        {
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/b0E-cDYYiWuvBxFH-YPONA/o.jpg',
          'name': 'Lardo',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/lardo-portland-4?adjust_creative=fCmmSJMY8yOZVwHRjx4WDg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fCmmSJMY8yOZVwHRjx4WDg',
        },
        {
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/AwxZ3eb04OiVH-92xKf_jg/o.jpg',
          'name': 'Mediterranean Exploration Company',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/mediterranean-exploration-company-portland-2?adjust_creative=fCmmSJMY8yOZVwHRjx4WDg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fCmmSJMY8yOZVwHRjx4WDg',
        },
        {
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/iSQOpx5GUr5QHjHVySv_2w/o.jpg',
          'name': 'Lan Su Chinese Garden',
          'price': undefined,
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/lan-su-chinese-garden-portland?adjust_creative=fCmmSJMY8yOZVwHRjx4WDg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fCmmSJMY8yOZVwHRjx4WDg',
        },
        {
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/Bq5mti2XW7PotWAXV3C5gQ/o.jpg',
          'name': 'Teardrop Cocktail Lounge',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/teardrop-cocktail-lounge-portland?adjust_creative=fCmmSJMY8yOZVwHRjx4WDg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fCmmSJMY8yOZVwHRjx4WDg',
        },
        {
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/160D-m4umO0jZoj2nMEPWQ/o.jpg',
          'name': 'Stumptown Coffee Roasters',
          'price': '$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/stumptown-coffee-roasters-portland-8?adjust_creative=fCmmSJMY8yOZVwHRjx4WDg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fCmmSJMY8yOZVwHRjx4WDg',
        }
      ];

      const result = mungeYelp(yelpData);
      expect(result).toEqual(expectation);
    });
  });
});
