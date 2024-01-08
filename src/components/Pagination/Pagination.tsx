import React, { useCallback, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "../Button";

interface IPaginationComponent {
  pages: string[];
  onPageChange: (currentPageIndex: any) => void;
}

const PaginationComponent: React.FC<IPaginationComponent> = ({
  pages,
  onPageChange,
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const handleOnNextNavigation = useCallback(() => {
    if (currentPageIndex < pages.length - 1) {
      setCurrentPageIndex((prevState) => prevState + 1);
    }
  }, [currentPageIndex, pages.length]);

  const handleOnPreviousNavigation = useCallback(() => {
    if (currentPageIndex !== 0) {
      setCurrentPageIndex((prevState) => prevState - 1);
    }
  }, [currentPageIndex]);

  useEffect(() => {
    onPageChange(currentPageIndex);
  }, [currentPageIndex, onPageChange]);

  return (
    <div className="btn-group" role="group">
      <Button
        label="&laquo;"
        onClick={handleOnPreviousNavigation}
        variant="light"
      />
      <Button
        onClick={() => {}}
        label={pages[currentPageIndex]}
        variant="light"
      />
      <Button
        label="&raquo;"
        onClick={handleOnNextNavigation}
        variant="light"
      />
    </div>
  );
};

export const Pagination = React.memo(PaginationComponent);
