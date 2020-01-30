const Halo = require('./haloModel');
const db = require('../data/dbConfig');

describe('halo model', function() {

    describe('test environment', function() {
        it('should use the testing environment', function() {
            // is testing switch to be to soemthing else to fail.
            expect(process.env.DB_ENV).toBe('testing');
        })
    })


    describe('insert()', function() {
            //runs before test
        beforeEach(async () => {
            await db('halo').truncate();
        })

        it('adds the new char to db', async function() {
            //call insert passin a hobbit
            await Halo.insert({name: 'sam'});
            await Halo.insert({name: 'frodo'});

            //open the db and see characters
          const haloo = await db('halo');
          expect(haloo).toHaveLength(2);
        })


        it('removes the char from db', async function() {
            //check taht the table is empty

            //add a hobbit

            //check taht the hobbit is there

            //delete teh hobbit 

            //check hobbit is gone
            await Halo.insert({name: 'sam'});
            await Halo.insert({name: 'frodo'});

            //open the db and see taht hobbit is there
          const haloo = await db('halo');
          expect(halooo).toHaveLength(2);
        })

    })
})