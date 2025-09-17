import React from 'react';

const AirlineTicket = () => {
  return (
    <div className="min-h-screen bg-orange-400 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        {/* Perforación superior */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-orange-400 rounded-b-full"></div>
        
        <div className="flex">
          {/* Sección izquierda - QR Code */}
          <div className="w-64 p-6 flex items-center justify-center border-r border-dashed border-gray-300">
            <div className="w-40 h-40 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm text-center">QR Code<br/>Space</span>
            </div>
          </div>
          
          {/* Sección principal */}
          <div className="flex-1 p-6">
            {/* Header con ciudades */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="text-gray-600 text-sm mb-1">Mumbai,</div>
                <div className="text-gray-600 text-sm mb-3">India</div>
                <div className="text-4xl font-bold text-gray-800">BOM</div>
                <div className="text-gray-500 text-sm mt-2">Wed, July 27<sup>th</sup></div>
                <div className="text-gray-500 text-sm">1:00 AM</div>
              </div>
              
              <div className="flex items-center mx-8">
                <div className="w-16 h-px bg-gray-300"></div>
                <div className="mx-4 text-gray-400">✈</div>
                <div className="w-16 h-px bg-gray-300 border-dashed"></div>
              </div>
              
              <div className="text-right">
                <div className="text-gray-600 text-sm mb-1">Amsterdam,</div>
                <div className="text-gray-600 text-sm mb-3">Netherlands</div>
                <div className="text-4xl font-bold text-gray-800">AMS</div>
                <div className="text-gray-500 text-sm mt-2">Thu, July 27<sup>th</sup></div>
                <div className="text-gray-500 text-sm">8:30 AM</div>
              </div>
            </div>
            
            {/* Detalles del pasajero */}
            <div className="grid grid-cols-5 gap-4 text-sm">
              <div>
                <div className="text-gray-400 mb-2">Passenger</div>
                <div className="font-semibold text-gray-800">Nikita Sharma</div>
              </div>
              <div>
                <div className="text-gray-400 mb-2">Seat</div>
                <div className="font-semibold text-gray-800">4A</div>
              </div>
              <div>
                <div className="text-gray-400 mb-2">Terminal</div>
                <div className="font-semibold text-gray-800">D</div>
              </div>
              <div>
                <div className="text-gray-400 mb-2">Gate</div>
                <div className="font-semibold text-gray-800">32</div>
              </div>
              <div>
                <div className="text-gray-400 mb-2">Boarding</div>
                <div className="font-semibold text-gray-800">12:40 PM</div>
              </div>
            </div>
          </div>
          
          {/* Banda lateral derecha */}
          <div className="w-16 bg-blue-900 flex flex-col items-center justify-center text-white">
            <div className="transform -rotate-90 whitespace-nowrap text-sm font-medium tracking-wider">
              JET AIRWAYS
            </div>
            <div className="mt-8 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-blue-900 text-xs">✈</span>
            </div>
          </div>
        </div>
        
        {/* Perforación entre secciones */}
        <div className="absolute top-1/2 left-64 transform -translate-y-1/2 w-6 h-6 bg-orange-400 rounded-full border-4 border-white"></div>
        <div className="absolute bottom-0 left-1/2 transform translate-x-1/2 w-8 h-4 bg-orange-400 rounded-t-full"></div>
      </div>
    </div>
  );
};

export default AirlineTicket;