const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3ef9d7149d07f0e31705a7d07d304015&query=' + latitude + ',' + longitude// +'&units=f'

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weatherstack api!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degree celsius out. It feels like ' + body.current.feelslike + ' degree celsius out. The humidity is '+ body.current.humidity +'% and the wind speed is ' + body.current.wind_speed + 'mph.')
        }     
    })
}

module.exports = forecast