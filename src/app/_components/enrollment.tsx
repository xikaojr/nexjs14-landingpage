'use client';
import Link from 'next/link';

function Enrollment() {
  return (
    <Link
      href='javascript:;'
      target='_blank'
      onClick={(event) => {
        event.preventDefault();
        alert("Matriculas em breve!")
      }}
      className='bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105'
    >
      Matricular
    </Link>
  );
}

export default Enrollment;
