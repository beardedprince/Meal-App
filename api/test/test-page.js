import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';
import app from '../index';


chai.use(chaiHttp);

describe('Meal', () => {
  beforeEach((done) => {
    done();
  });

/**
   * Test the GET /meals/ route
   */
  describe('GET /meals', () => {
    it('it should get all the meals', (done) => {
      chai
        .request(app)
        .get('/api/v1/meals')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a('array');
          done();
        });
    });
  });
<<<<<<< HEAD
=======

>>>>>>> 01dab9c5a8548a8d673f82dcdeac7307f4dbe3ff

});
