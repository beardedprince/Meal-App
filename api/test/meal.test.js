import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';
import app from '../index';
import dummyData from '../utils/dummydata';


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


  /**
   * Test the POST /meals/ route
   */
  describe('POST /meals', () => {
        it('it should post a meal', (done) => {
      const meal = {
        name: 'Porridge',
        size: 'Small',
        price: '300',
      };
      chai
        .request(app)
        .post('/api/v1/meals')
        .send(meal)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          
          res.body.data.should.have.property('id');
          res.body.data.should.have.property('name');
          res.body.data.should.have.property('size');
          res.body.data.should.have.property('price');
          done();
        });
    });
  });


});
