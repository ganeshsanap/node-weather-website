const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3ef9d7149d07f0e31705a7d07d304015&query='+ latitude +','+ longitude +'&units=f'

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weatherstack api!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degress out.')
        }     
    })
}

module.exports = forecast