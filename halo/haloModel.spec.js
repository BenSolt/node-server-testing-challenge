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
            await Halo.add({name: 'jorge'});
            await Halo.add({name: 'lock'});

            //open the db and see taht hobbit is there
          const halo = await db('halo');
          expect(halo).toHaveLength(2);
        })

     


    })
})