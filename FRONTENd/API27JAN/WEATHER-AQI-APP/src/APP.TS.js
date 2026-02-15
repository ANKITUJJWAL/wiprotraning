var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var API_KEY = "e887e61ab0b3297e09fef9a5c1a1cd70"; //  Replace this with your API Key
var cityInput = document.getElementById("city");
var countryInput = document.getElementById("country");
var resultDiv = document.getElementById("result");
function getWeatherAndAQI() {
    return __awaiter(this, void 0, void 0, function () {
        var city, country, weatherRes, weatherData, lat, lon, aqiRes, aqiData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    city = cityInput.value.trim();
                    country = countryInput.value.trim();
                    if (!city || !country) {
                        alert("Please enter city and country code");
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(city, ",").concat(country, "&appid=").concat(API_KEY, "&units=metric"))];
                case 2:
                    weatherRes = _a.sent();
                    if (!weatherRes.ok)
                        throw new Error("City not found");
                    return [4 /*yield*/, weatherRes.json()];
                case 3:
                    weatherData = _a.sent();
                    lat = weatherData.coord.lat;
                    lon = weatherData.coord.lon;
                    return [4 /*yield*/, fetch("https://api.openweathermap.org/data/2.5/air_pollution?lat=".concat(lat, "&lon=").concat(lon, "&appid=").concat(API_KEY))];
                case 4:
                    aqiRes = _a.sent();
                    return [4 /*yield*/, aqiRes.json()];
                case 5:
                    aqiData = _a.sent();
                    displayResult(weatherData, aqiData);
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    resultDiv.innerHTML = "<div class=\"alert alert-danger\">Failed to fetch data</div>";
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function displayResult(weather, aqi) {
    var aqiValue = aqi.list[0].main.aqi;
    var aqiText = getAQIText(aqiValue);
    resultDiv.innerHTML = "\n    <div class=\"alert alert-success\">\n      <h5>".concat(weather.name, "</h5>\n      <p>\uD83C\uDF21 Temperature: ").concat(weather.main.temp, " \u00B0C</p>\n      <p>\u2601 Weather: ").concat(weather.weather[0].description, "</p>\n      <p>\uD83C\uDF2B AQI: <strong>").concat(aqiText, "</strong></p>\n    </div>\n  ");
}
function getAQIText(aqi) {
    switch (aqi) {
        case 1: return "Good 😊";
        case 2: return "Fair 🙂";
        case 3: return "Moderate 😐";
        case 4: return "Poor 😷";
        case 5: return "Very Poor ☠️";
        default: return "Unknown";
    }
}
