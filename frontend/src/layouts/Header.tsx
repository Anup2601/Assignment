import { Logo } from '../components/header/Logo';
import { LocationSelector } from '../components/header/LocationSelector';
import { Navigation } from '../components/header/Navigation';
import { UserProfile } from '../components/header/UserProfile';

export const Header: React.FC = () => {
  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="w-full max-md:max-w-full">
        <div className=" w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-8 items-start pt-10  w-full bg-white max-md:max-w-full">
              <Logo />
              <LocationSelector />
             <Navigation />
            <UserProfile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
