const { signup } = require("../Controllers/authenticate.js");
const route = require("../Routes/authentication.js");
const { check, validationResult } = require("express-validator");
const app = require("../app");
const request = require("supertest");
const signup_route = "/api/signup";
const signin = "/api/signin";
const signout = "/api/signout";
const users = "/api/users";
const history ="/api/trip/history";
const drive="/api/trip/drive";

let token;

    beforeAll((done) => {
      request(app)
        .post(signin)
        .send({
          email: "user1@gmail.com",
      password: "user1",
        })
        .end((err, response) => {
          token = response.body.token; // save the token!
          Error_tokken="weerrttffrt"
          done();
        });
    });

//-------------------------------------------------------------------------------------------
//Unit & Integration Testing for Signup Route
//-------------------------------------------------------------------------------------------

// Unit Test Signup

describe(signup_route, () => {
  it("post" + signup_route, async () => {
    const response = await request(app).post(signup_route).send({
      name: "user24356",
      Lastname: "user",
      email: "user243564@gmil.com",
      password: "user24356",
    });
    expect(response.status).toEqual(400);
  });
});

describe(signup_route, () => {
  it("post" + signup_route, async () => {
    const response = await request(app).post(signup_route).send({
      name: "A",
      Lastname: "Baluja",
      email: "Ad4rwere4@gmil.com",
      password: "rahul123",
    });
    expect(response.status).toEqual(422);
  });
});
// Integration Test Signup
describe(signup_route, () => {
  it("post" + signup_route, async () => {
    const response = await request(app).post(signup_route).send({
      name: "user126",
      Lastname: "user_surname",
      email: "user127@gmil.com",
      password: "user124",
    });
    expect(response.status).toEqual(200);
  });
});

//-------------------------------------------------------------------------------------------
//Unit & Integration Testing for Signin Route
//-------------------------------------------------------------------------------------------

//Unit Test SignIn
describe(signin, () => {
  it("post" + signin, async () => {
    const response = await request(app).post(signin).send({
      email: "B@gmail.com",
      password: "rahul123",
    });
    expect(response.status).toEqual(400);
  });
});

describe(signin, () => {
  it("post" + signin, async () => {
    const response = await request(app).post(signin).send({
      email: "Ad4rwere4@gmil.com",
      password: "rahul1",
    });
    expect(response.status).toEqual(401);
  });
});
// Integration test SignIn
describe(signin, () => {
  it("post" + signin, async () => {
    const response = await request(app).post(signin).send({
      email: "Ad4rwere4@gmil.com",
      password: "rahul123",
    });
    expect(response.status).toEqual(200);
  });
});

describe(signin, () => {
  it("post" + signin, async () => {
    const response = await request(app).post(signin).send({
      email: "B@gmail.com",
      password: "rahul123",
    });
    expect(response.status).toEqual(400);
  });
});
describe(signin, () => {
  it("post" + signin, async () => {
    const response = await request(app).post(signin).send({
      email: "Ad4rwere4",
      password: "rahul123",
    });
    expect(response.status).toEqual(422);
  });
});

//-------------------------------------------------------------------------------------------
//Unit & Integration Testing for Signout Route
//-------------------------------------------------------------------------------------------

describe(signout, () => {
  it("get" + signout, async () => {
    const response = await request(app).get(signout);
    expect(response.status).toEqual(400);
  });
});

//-------------------------------------------------------------------------------------------
//Unit & Integration Testing for all user  Route
//-------------------------------------------------------------------------------------------

describe(users, () => {
  it("get" + users, async () => {
    const response = await request(app).get(users);
    expect(response.status).toEqual(200);
  });
});

//-------------------------------------------------------------------------------------------
//Unit & Integration Testing for Drive Route
//-------------------------------------------------------------------------------------------

// check proper history
describe(history, () => {
  it("get" + history, async () => {
    const response2 = await request(app).get(history).set('Authorization', `Bearer ${token}`);
    expect(response2.status).toEqual(200);
    
  });
});
// check fail issignin
describe(history, () => {
  it("get" + history, async () => {
    const response2 = await request(app).get(history);
    expect(response2.status).toEqual(401);
    
  });
});
// check incorrect tokken
describe(history, () => {
  it("get" + history, async () => {
    const response2 = await request(app).get(history).set('Authorization', `Bearer ${Error_tokken}`);
    expect(response2.status).toEqual(401);
    
  });
});
// check a;ready active trip
describe(drive, () => {
  it("post" + drive, async () => {
    const response2 = await request(app).post(drive).send({
      "src": {
          "lat": 43.48849834594833,
          "lng": -80.54167768508073
      },
      "dst": {
          "lat": 43.46897334449664,
          "lng": -80.56300904300979
      },
      "route": [
          {
              "lat": 43.4885,
              "lng": -80.54153000000001
          },
          {
              "lat": 43.48774,
              "lng": -80.54155
          },
          {
              "lat": 43.48718,
              "lng": -80.54146
          },
          {
              "lat": 43.48682,
              "lng": -80.54142
          },
          {
              "lat": 43.48666,
              "lng": -80.54136000000001
          },
          {
              "lat": 43.48651,
              "lng": -80.5413
          },
          {
              "lat": 43.486160000000005,
              "lng": -80.54113000000001
          },
          {
              "lat": 43.4859,
              "lng": -80.54095000000001
          },
          {
              "lat": 43.485290000000006,
              "lng": -80.54042000000001
          },
          {
              "lat": 43.48443,
              "lng": -80.53964
          },
          {
              "lat": 43.48415000000001,
              "lng": -80.54033000000001
          },
          {
              "lat": 43.48402,
              "lng": -80.54057
          },
          {
              "lat": 43.483940000000004,
              "lng": -80.54068000000001
          },
          {
              "lat": 43.483830000000005,
              "lng": -80.54076
          },
          {
              "lat": 43.48306,
              "lng": -80.54127000000001
          },
          {
              "lat": 43.482490000000006,
              "lng": -80.54162000000001
          },
          {
              "lat": 43.48151,
              "lng": -80.54219
          },
          {
              "lat": 43.48127,
              "lng": -80.54228
          },
          {
              "lat": 43.48115000000001,
              "lng": -80.54230000000001
          },
          {
              "lat": 43.480920000000005,
              "lng": -80.54231
          },
          {
              "lat": 43.48067,
              "lng": -80.54227
          },
          {
              "lat": 43.480500000000006,
              "lng": -80.54221000000001
          },
          {
              "lat": 43.4802,
              "lng": -80.54204
          },
          {
              "lat": 43.479310000000005,
              "lng": -80.54147
          },
          {
              "lat": 43.47815000000001,
              "lng": -80.54069000000001
          },
          {
              "lat": 43.4774,
              "lng": -80.54023000000001
          },
          {
              "lat": 43.477000000000004,
              "lng": -80.53997000000001
          },
          {
              "lat": 43.47692000000001,
              "lng": -80.54021
          },
          {
              "lat": 43.47625,
              "lng": -80.54204
          },
          {
              "lat": 43.47605,
              "lng": -80.54263
          },
          {
              "lat": 43.47605,
              "lng": -80.54275000000001
          },
          {
              "lat": 43.47589000000001,
              "lng": -80.54322
          },
          {
              "lat": 43.47509,
              "lng": -80.54553000000001
          },
          {
              "lat": 43.47476,
              "lng": -80.54653
          },
          {
              "lat": 43.474500000000006,
              "lng": -80.54728
          },
          {
              "lat": 43.47384,
              "lng": -80.54908
          },
          {
              "lat": 43.47334,
              "lng": -80.55040000000001
          },
          {
              "lat": 43.47169,
              "lng": -80.55501000000001
          },
          {
              "lat": 43.47063000000001,
              "lng": -80.55792000000001
          },
          {
              "lat": 43.47052,
              "lng": -80.5583
          },
          {
              "lat": 43.470380000000006,
              "lng": -80.55867
          },
          {
              "lat": 43.469840000000005,
              "lng": -80.56019
          },
          {
              "lat": 43.46886000000001,
              "lng": -80.56293000000001
          }
      ],
      "dateTime": "2022-03-19T18:44:07.066Z",
      "max_riders": "2"
  }).set('Authorization', `Bearer ${token}`);
    expect(response2.status).toEqual(400);
    
  });
});
