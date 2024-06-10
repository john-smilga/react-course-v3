'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type ButtonContainerProps = {
  currentPage: number;
  totalPages: number;
};
import { Button } from './ui/button';
function ButtonContainer({ currentPage, totalPages }: ButtonContainerProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const pageButtons = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page: number) => {
    const defaultParams = {
      search: searchParams.get('search') || '',
      jobStatus: searchParams.get('jobStatus') || '',
      page: String(page),
    };

    let params = new URLSearchParams(defaultParams);

    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <div className='flex  gap-x-2'>
      {pageButtons.map((page) => {
        return (
          <Button
            key={page}
            size='icon'
            variant={currentPage === page ? 'default' : 'outline'}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Button>
        );
      })}
    </div>
  );
}
export default ButtonContainer;
