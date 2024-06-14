import Link from 'next/link';
import { Button } from '../ui/button';
import { VscCode } from 'react-icons/vsc';

function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <VscCode className='w-6 h-6' />
      </Link>
    </Button>
  );
}
export default Logo;
