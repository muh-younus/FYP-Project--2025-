import React, { useState, useEffect } from 'react';
// Lucide-React Icons for a professional look
import { 
  CloudRain, 
  Wind, 
  Droplets, 
  Thermometer, 
  Cloud, 
  Search, 
  MapPin,
  Sunrise,
  AlertTriangle 
} from 'lucide-react';

// --- CONFIGURATION ---
const BASE_COLOR = '#059AA0'; // Custom color: Dark Cyan/Teal
const FALLBACK_GRADIENT = `from-[${BASE_COLOR}] to-blue-900`;

// --- CUSTOM CARD COMPONENT (Further reduced size) ---
const MetricCard = ({ icon: Icon, label, value, unit, color }) => (
  // Reduced padding (p-2) and space-x (space-x-2)
  <div className="bg-white/20 p-2 rounded-xl flex items-center space-x-2 shadow-lg transition duration-300 hover:bg-white/30">
    <div className={`p-1.5 rounded-full ${color}`} style={{ backgroundColor: `${color}40` }}> 
      {/* Reduced icon size (w-4 h-4) */}
      <Icon className={`w-4 h-4 ${color}`} />
    </div>
    <div>
      {/* Reduced text size (text-lg/text-xs/text-3xs) */}
      <p className="text-lg font-bold text-white leading-tight">{value}<span className="text-xs font-medium">{unit}</span></p>
      <p className="text-3xs text-gray-200 uppercase tracking-wide">{label}</p>
    </div>
  </div>
);

// --- MAIN COMPONENT ---
const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [city, setCity] = useState('Balikpapan');
  const [inputCity, setInputCity] = useState('Balikpapan');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Note: The API Key is exposed here, but in a real app, it should be in environment variables.
  const API_KEY = 'b22130263a3a449a8d0155902251312'; 

  useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      setError(null);
      setCurrentWeather(null);
      
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
        );
        const data = await res.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        setCurrentWeather(data.current);
        setLoading(false);
      } catch (e) {
        console.error("Fetch error:", e);
        setError(`Could not find weather for "${city}". Please try again.`);
        setLoading(false);
      }
    };

    getWeather();
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputCity.trim() !== '') {
      setCity(inputCity.trim());
    }
  };

  // --- Utility functions for aesthetic background/styling ---
  const getWeatherStyle = (conditionText) => {
    const text = conditionText ? conditionText.toLowerCase() : '';
    
    if (text.includes('sunny') || text.includes('clear')) {
      return { 
        gradient: 'from-yellow-400 to-amber-600', 
        cardClass: 'bg-amber-700/30' 
      };
    }
    if (text.includes('rain') || text.includes('drizzle')) {
      return { 
        gradient: 'from-blue-600 to-indigo-800', 
        cardClass: 'bg-blue-800/30' 
      };
    }
    if (text.includes('cloud') || text.includes('overcast')) {
      return { 
        gradient: 'from-gray-500 to-slate-700', 
        cardClass: 'bg-slate-700/30' 
      };
    }
    if (text.includes('snow') || text.includes('ice')) {
      return { 
        gradient: 'from-slate-300 to-cyan-500', 
        cardClass: 'bg-cyan-600/30' 
      };
    }
    // Default to custom color
    return { 
        gradient: FALLBACK_GRADIENT, 
        cardClass: 'bg-sky-800/30' 
    };
  };

  const currentStyle = currentWeather ? getWeatherStyle(currentWeather.condition.text) : getWeatherStyle('');

  // --- Render logic for loading, error, and main content ---

  if (loading) {
    return (
      <div className={`flex items-center justify-center h-screen bg-gradient-to-br ${currentStyle.gradient}`}>
        <p className="text-white text-2xl animate-pulse">Loading weather data for {city}...</p>
      </div>
    );
  }

  if (error || !currentWeather) {
      return (
        <div className={`flex items-center justify-center h-screen bg-gradient-to-br ${currentStyle.gradient} p-4`}>
            <div className="bg-red-700/70 p-8 rounded-xl max-w-lg text-white text-center shadow-2xl">
                <AlertTriangle className="w-10 h-10 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-3">Data Error</h2>
                <p className="text-lg">{error}</p>
                <button 
                    onClick={() => { setCity('Balikpapan'); setError(null); setInputCity('Balikpapan'); }}
                    className="mt-4 px-4 py-2 bg-white text-red-700 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                    Back to Default City
                </button>
            </div>
        </div>
      );
  }

  // Destructure for cleaner access
  const { temp_c, humidity, wind_kph, precip_mm, cloud, condition } = currentWeather;
  const locationName = `${city.charAt(0).toUpperCase() + city.slice(1)}`;

  // The main aesthetic return structure
  return (
    // Key Fix: h-screen to enforce full height, flex and items-center/justify-center to center content
    // and prevent content from dictating height beyond the viewport.
    <div className={`h-screen bg-gradient-to-br ${currentStyle.gradient} flex items-center justify-center p-3 transition-all duration-700`}>
      
      {/* Key Fix: max-h-full to ensure the card does not overflow the viewport height. 
          Use 'flex flex-col' to ensure vertical alignment and spacing are predictable. */}
      <div className={`backdrop-blur-xl rounded-2xl p-4 w-full max-w-sm max-h-full flex flex-col text-white shadow-2xl border border-white/30 ${currentStyle.cardClass}`}>
        
        {/* City Search Form (mb-4 instead of mb-6) */}
        <form onSubmit={handleSearch} className="flex mb-4 space-x-2">
          <input
            type="text"
            value={inputCity}
            onChange={(e) => setInputCity(e.target.value)}
            placeholder="Search city..."
            className="flex-grow p-2 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white/80 transition duration-200 text-sm"
          />
          <button 
            type="submit" 
            className="p-2 bg-white/60 rounded-lg hover:bg-white/80 transition duration-200 text-gray-800"
          >
            <Search className="w-5 h-5" />
          </button>
        </form>

        {/* --- MAIN WEATHER DISPLAY (mb-4 instead of mb-6) --- */}
        <div className="text-center mb-4">
          <MapPin className="w-5 h-5 mx-auto mb-1 text-white/90" />
          <h1 className="text-3xl font-extrabold leading-none">{locationName}</h1>
          
          {/* Reduced image size (w-14 h-14) */}
          <img 
            src={`https:${condition.icon}`} 
            alt={condition.text} 
            className="w-14 h-14 mx-auto"
          />
          
          {/* Reduced text size (text-4xl instead of 5xl) */}
          <p className="text-4xl font-light mt-2 mb-0">{temp_c}°C</p>
          <p className="text-md font-medium text-gray-200 border-t border-white/50 pt-1 inline-block">{condition.text}</p>
        </div>

        {/* --- METRICS GRID (Optimized for space, reduced gap) --- */}
        <div className="grid grid-cols-2 gap-2">
          <MetricCard 
            icon={Thermometer} 
            label="Feels Like" 
            value={currentWeather.feelslike_c} 
            unit="°C" 
            color="text-red-400" 
          />
          <MetricCard 
            icon={Droplets} 
            label="Humidity" 
            value={humidity} 
            unit="%" 
            color="text-blue-400" 
          />
          <MetricCard 
            icon={Wind} 
            label="Wind Speed" 
            value={wind_kph} 
            unit=" km/h" 
            color="text-green-400" 
          />
          <MetricCard 
            icon={CloudRain} 
            label="Precipitation" 
            value={precip_mm} 
            unit=" mm" 
            color="text-cyan-400" 
          />
          <MetricCard 
            icon={Cloud} 
            label="Cloud Cover" 
            value={cloud} 
            unit="%" 
            color="text-gray-300" 
          />
          <MetricCard 
            icon={Sunrise} 
            label="Local Time" 
            value={new Date(currentWeather.last_updated).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} 
            unit="" 
            color="text-yellow-300" 
          />
        </div>
        
        {/* Footer info (mt-3 instead of mt-4) */}
        <p className="text-center text-3xs text-gray-400 mt-3">
            Last Updated: {new Date(currentWeather.last_updated).toLocaleString()}
        </p>

      </div>
    </div>
  );
};

export default App;