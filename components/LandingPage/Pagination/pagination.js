import { useFilterContext } from '../../../context/StateContext';
import { FixedButton, PaginationContainer } from './paginationStyles';

export const Pagination = ({ offersLength }) => {
    const { page, setPage } = useFilterContext();

    const handleClickPagination = (more) => {
        const newPage = more ? page + 1 : page - 1;
        setPage(newPage);
        window.sessionStorage.setItem('actualPage', newPage);
    };

    return (
        <PaginationContainer>
            {page > 0 && (
                <FixedButton onClick={() => handleClickPagination(false)}>
                    Load Minus
                </FixedButton>
            )}
            {page < offersLength - 1 && (
                <FixedButton onClick={() => handleClickPagination(true)}>
                    Load More
                </FixedButton>
            )}
        </PaginationContainer>
    );
};
