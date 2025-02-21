const getPagination = ({ page, size = process.env.PAGINATION }) => {
    const limit = parseInt(size, 10);
    const offset = (() => {
      if (page) {
        return page <= 0 ? 0 : (page - 1) * limit;
      }
      return 0;
    })();
    console.log({ limit, offset });
    return { limit, offset };
  };
  
  const getPagingData = ({ count, page, limit }) => {
    const currentPage = page && page > 0 ? parseInt(page, 10) : 1;
    const totalPages = limit ? Math.ceil(count / limit) : 1;
  
    return { totalPages, currentPage };
  };
  
  const Pagination = Object.freeze({
    getPagination,
    getPagingData,
  });
  
  export default Pagination;