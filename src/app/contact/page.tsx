import React from 'react';  
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


// Contact Page Component
export default function Page() {
  // Define the position for the map center and marker
  const position = [37.7749, -122.4194];
  return (
    <div className="container mx-auto p-4">
      {/* Contact Us Heading */}
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      {/* Contact Form */}
      <form className="space-y-4">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block mb-2">Name<span className='text-red-500'>*</span></label>
          <input type="text" id="name" className="border border-gray-300 px-4 py-2 w-full" required placeholder='Enter your name'/>
        </div>
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block mb-2">Email<span className='text-red-500'>*</span></label>
          <input type="email" id="email" className="border border-gray-300 px-4 py-2 w-full" required placeholder='Enter your email'/>
        </div>
        {/* Phone Input */}
        <div>
          <label htmlFor="phone" className="block mb-2">Phone</label>
          <input type="text" id="phone" className="border border-gray-300 px-4 py-2 w-full" pattern="[0-9-()]+" placeholder='Enter your phone number'/>
        </div>
        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block mb-2">Message<span className='text-red-500'>*</span></label>
          <textarea id="message" className="border border-gray-300 px-4 py-2 w-full h-32" required/>
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
        </div>
      </form>
      {/* Map Section */}
      <div className='mt-8'>
            {/* Map Container */}
            <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
                {/* Tile Layer */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                {/* Marker */}
                <Marker position={position}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
            </MapContainer>
        </div>
      </div>
  );
}
