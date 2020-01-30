const request = require('supertest');
const server = require('./server');

describe('server', function() {
    it('runs the tests', function() {
        //to pass change 2nd one to true also, or both to false.
        expect(true).toBe(true);
    })

    describe('Get /', function() {
        it('should return 200 OK', function() {
            //make a  GET request to /
            return request(server).get('/')
            .then(res =>{
            //check that the status code is 200
            expect(res.status).toBe(200);
            })
        })

        it('should return JSON', function() {
            //make a  GET request to /
            return request(server).get('/')
            .then(res =>{
            //check that the match = to json not html, (text related)
            expect(res.type).toMatch(/json/i);
            })
        })

////////////////FAILING/////////////////////
        it('should return master', function() {
            //make a  GET request to /
            return request(server).get('/char')
            .then(res =>{
            //check that the match = to json not html, (text related)
            expect(res.type).toMatch(/master/i);
            })
        })



        it('should return info from body', function() {
            //make a  GET request to /
            return request(server).get('/')
            .then(res =>{
            
            //expect(res.type).toEqual({api:"up"});
            expect(res.body.api).toBe("up");
            })
        })

    })
    

})