import pactum from 'pactum';
import { SimpleReporter } from '../simple-reporter';
import { StatusCodes } from 'http-status-codes';

describe('Star Wars API', () => {
  const p = pactum;
  const rep = SimpleReporter;
  const baseUrl = 'https://swapi.info/api/';

  p.request.setDefaultTimeout(90000);

  beforeAll(async () => {
    p.reporter.add(rep);
  });

  describe('Films', () => {
    it('GET /films - should return a list of films', async () => {
      await p
        .spec()
        .get(`${baseUrl}/films`)
        .expectStatus(StatusCodes.OK)
        .expectBodyContains('A New Hope')
        .expectBodyContains('The Empire Strikes Back');
    });

    it('GET /films/1 - should return A New Hope', async () => {
      await p
        .spec()
        .get(`${baseUrl}/films/1`)
        .expectStatus(StatusCodes.OK)
        .expectJsonLike({
          title: 'A New Hope',
          episode_id: 4,
          director: 'George Lucas',
          release_date: '1977-05-25'
        });
    });
  });

  describe('People', () => {
    it('GET /people - should return a list of people', async () => {
      await p
        .spec()
        .get(`${baseUrl}/people`)
        .expectStatus(StatusCodes.OK)
        .expectBodyContains('Luke Skywalker')
        .expectBodyContains('C-3PO');
    });

    it('GET /people/1 - should return Luke Skywalker', async () => {
      await p
        .spec()
        .get(`${baseUrl}/people/1`)
        .expectStatus(StatusCodes.OK)
        .expectJsonLike({
          name: 'Luke Skywalker',
          height: '172',
          mass: '77',
          birth_year: '19BBY',
          gender: 'male'
        });
    });
  });

  describe('Planets', () => {
    it('GET /planets - should return a list of planets', async () => {
      await p
        .spec()
        .get(`${baseUrl}/planets`)
        .expectStatus(StatusCodes.OK)
        .expectBodyContains('Tatooine')
        .expectBodyContains('Alderaan');
    });

    it('GET /planets/1 - should return Tatooine', async () => {
      await p
        .spec()
        .get(`${baseUrl}/planets/1`)
        .expectStatus(StatusCodes.OK)
        .expectJsonLike({
          name: 'Tatooine',
          rotation_period: '23',
          orbital_period: '304',
          climate: 'arid',
          terrain: 'desert',
          gravity: '1 standard'
        });
    });
  });

  describe('Species', () => {
    it('GET /species - should return a list of species', async () => {
      await p
        .spec()
        .get(`${baseUrl}/species`)
        .expectStatus(StatusCodes.OK)
        .expectBodyContains('Human')
        .expectBodyContains('Droid');
    });

    it('GET /species/1 - should return Human', async () => {
      await p
        .spec()
        .get(`${baseUrl}/species/1`)
        .expectStatus(StatusCodes.OK)
        .expectJsonLike({
          name: 'Human',
          classification: 'mammal',
          designation: 'sentient',
          average_height: '180',
          average_lifespan: '120',
          language: 'Galactic Basic'
        });
    });
  });

  describe('Vehicles', () => {
    it('GET /vehicles - should return a list of vehicles', async () => {
      await p
        .spec()
        .get(`${baseUrl}/vehicles`)
        .expectStatus(StatusCodes.OK)
        .expectBodyContains('Sand Crawler')
        .expectBodyContains('T-16 skyhopper');
    });

    it('GET /vehicles/4 - should return Sand Crawler', async () => {
      await p
        .spec()
        .get(`${baseUrl}/vehicles/4`)
        .expectStatus(StatusCodes.OK)
        .expectJsonLike({
          name: 'Sand Crawler',
          model: 'Digger Crawler',
          manufacturer: 'Corellia Mining Corporation',
          crew: '46',
          passengers: '30',
          vehicle_class: 'wheeled'
        });
    });
  });

  describe('Starships', () => {
    it('GET /starships - should return a list of starships', async () => {
      await p
        .spec()
        .get(`${baseUrl}/starships`)
        .expectStatus(StatusCodes.OK)
        .expectBodyContains('CR90 corvette')
        .expectBodyContains('Star Destroyer');
    });

    it('GET /starships/2 - should return CR90 corvette', async () => {
      await p
        .spec()
        .get(`${baseUrl}/starships/2`)
        .expectStatus(StatusCodes.OK)
        .expectJsonLike({
          name: 'CR90 corvette',
          model: 'CR90 corvette',
          manufacturer: 'Corellian Engineering Corporation',
          crew: '30-165',
          passengers: '600',
          hyperdrive_rating: '2.0',
          starship_class: 'corvette'
        });
    });
  });
});
