import { Logo } from '../components/header/Logo';
import { LocationSelector } from '../components/header/LocationSelector';
import { Navigation } from '../components/header/Navigation';
import { UserProfile } from '../components/header/UserProfile';

export const Header: React.FC = () => {
  return (
    <header className="bg-white">
      <div className="w-full max-md:max-w-full">
        <div className="px-16 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-10 justify-between items-start pt-10 w-full bg-white max-md:max-w-full">
            <div className="flex gap-6 justify-center items-center font-medium min-w-60 max-md:max-w-full">
              <Logo />
              <LocationSelector />
            </div>
            <Navigation />
            <UserProfile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
