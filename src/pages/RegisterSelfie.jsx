import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import logo from '../Assets/images/logo.png';
import CameraModal from '../components/CamaraModal';
import { useNavigate } from 'react-router-dom';
import BtnBack from '../components/BtnBack'


function RegisterSelfie() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate()


  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  const handleNavigate = () => {
    navigate('/registrations')

  }


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <BtnBack />

      <img
        src={logo}
        alt="Logo"
        className="mb-8 w-24 absolute top-16 left-38 md:static md:left-auto md:top-auto"
      />

      <FaCamera className="text-6xl text-gray-400 mb-6" />

      <h1 className="text-2xl font-bold mb-2">¡Es hora de la selfie!</h1>

      <p className="text-gray-600 mb-8 text-center">
        Sonríe y asegúrate de tener buena iluminación.
      </p>

      <button
        onClick={toggleModal}
        className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        Continuar
      </button>

      <CameraModal isOpen={isModalOpen} onClose={toggleModal} navigate={handleNavigate} />
    </div>
  );
}

export default RegisterSelfie;
