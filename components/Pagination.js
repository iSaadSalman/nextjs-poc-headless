const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
 const pagesCount = Math.ceil(items / pageSize); // 100/10

 if (pagesCount === 1) return null;
 const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
   <div>
     <ul className="flex items-center justify-center my-8">
       {pages.map((page) => (
         <li 
           className="text-success-dark px-4 py-2 mx-1 rounded-full text-sm font-semibold no-underline"
           key={page} >
           <a className="w-10 h-10 text-center" onClick={() => onPageChange(page)}>
             {page}
           </a>
         </li>
       ))}
     </ul>
   </div>
 );
};

export default Pagination;