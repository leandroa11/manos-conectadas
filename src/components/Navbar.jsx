import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      command: () => navigate('/')
    },
    {
      label: 'Práctica',
      icon: 'pi pi-camera',
      command: () => navigate('/practica')
    },
    {
      label: 'Juega',
      icon: 'pi pi-play',
      command: () => navigate('/juega')
    },
    {
      label: 'Acerca de',
      icon: 'pi pi-info-circle',
      command: () => navigate('/about')
    }
  ];

  return (
    <Menubar
      model={items}
      className="border-noround sticky top-0 w-full shadow-2"
      style={{ zIndex: 1000 }}
    />
  );
};

export default Navbar;