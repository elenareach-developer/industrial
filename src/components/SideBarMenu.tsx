import React, { useState } from 'react';

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen flex">
      {/* Боковое меню */}
      <aside
        className={`w-64 bg-gray-800 text-white p-4 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Здесь вы можете добавить элементы меню */}
        <ul>
          <li className="py-2">Пункт меню 1</li>
          <li className="py-2">Пункт меню 2</li>
          <li className="py-2">Пункт меню 3</li>
        </ul>
      </aside>

      {/* Основное содержание */}
      <div className="flex-grow p-4">
        {/* Кнопка для открытия/закрытия бокового меню */}
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-md mb-4"
          onClick={toggleSidebar}
        >
          {isOpen ? 'Закрыть меню' : 'Открыть меню'}
        </button>

        {/* Здесь вы можете размещать контент вашего приложения */}
        <p>Основное содержание вашего приложения</p>
      </div>
    </div>
  );
};

export default SidebarMenu;
