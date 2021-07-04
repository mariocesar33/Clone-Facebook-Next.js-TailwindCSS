import Image from 'next/image';
import { 
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon
} from '@heroicons/react/outline';

export function Header() {
  return (
    <div>
      {/**Left */}
      <div className="flex items-center">
        <Image 
          src="https://links.papareact.com/5me" 
          alt="facebook logo" 
          height={40}
          width={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100">
          <SearchIcon className="h-6" />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      {/**Center */}
      {/**Right */}
    </div>
  );
}