const data = require('../Data')
module.exports = (app) => {
    app.get("/api/getAllEmp", (req, res) => {
        res.send(data.EMP);
    })
    app.get('/api/getSurveys', (req, res) => {
        res.send({ surveys: data['SURVEY'], emp_data: data['EMP_DATA'] })
    })
    app.post('/api/saveData', (req, res) => {
        console.log("THE DATA RECIEVED====>>>", req.body.emp_data);
        res.sendStatus(200);
    })
}