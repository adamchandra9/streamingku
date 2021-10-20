import { Button, Empty, InputNumber, Skeleton } from 'antd';
import {
  useExpanded,
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';

import CButton from './CButton';
import CIcon from './CIcon';
import React from 'react';

interface IProps {
  columns;
  data;
  isLoading?;
  pagination?;
  useFilterGlobal?;
  handleOnDoubleClick?;
  renderRowSubComponent?;
}

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  return (
    <div>
      <div style={{ float: 'left', width: '5%', height: 40, paddingTop: 10 }}>
        Search:{' '}
      </div>
      <input
        id="inputGlobalSearch"
        className="inputSearchGlobalFilter"
        value={globalFilter || ''}
        onChange={e => {
          setGlobalFilter(e.target.value || undefined);
        }}
        placeholder={`${count} records...`}
        style={{ float: 'right', width: '95%', height: 40 }}
      />
    </div>
  );
}

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <input
      style={{ width: '100%' }}
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}

const renderPaginationOption = data => {
  const {
    pagination,
    gotoPage,
    canPreviousPage,
    previousPage,
    nextPage,
    canNextPage,
    pageCount,
    pageIndex,
    pageOptions,
    pageSize,
    setPageSize,
    preGlobalFilteredRows,
  } = data;
  if (pagination) {
    return (
      <div className="paginationTableReact">
        <span>
          Total {preGlobalFilteredRows.length} entires | Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <div style={{ marginTop: '5px' }}>
          Go to page:{' '}
          <InputNumber
            id="inputGoToPage"
            type="number"
            min={1}
            max={pageOptions.length}
            defaultValue={pageIndex + 1}
            onChange={e => {
              const pages = e ? Number(e) - 1 : 0;
              gotoPage(pages);
            }}
            style={{ width: '100px' }}
          />{' '}
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSizes => (
              <option key={pageSizes} value={pageSizes}>
                Show {pageSizes}
              </option>
            ))}
          </select>
        </div>
        <div className="navPagination">
          <Button
            type="primary"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            icon={<CIcon type="DoubleLeftOutlined" />}
            ghost={true}
            id="btnStartPage"
          />{' '}
          <Button
            type="primary"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            icon={<CIcon type="LeftOutlined" />}
            ghost={true}
            id="btnNextPage"
          />{' '}
          <Button
            type="primary"
            onClick={() => nextPage()}
            disabled={!canNextPage}
            icon={<CIcon type="RightOutlined" />}
            ghost={true}
            id="btnPrevPage"
          />{' '}
          <Button
            type="primary"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            icon={<CIcon type="DoubleRightOutlined" />}
            ghost={true}
            id="btnLastPage"
          />{' '}
        </div>
      </div>
    );
  }
  return null;
};

const renderBody = (
  prepareRow,
  pagination,
  getTableBodyProps,
  page,
  rows,
  headerGroups,
  handleOnDoubleClick,
  visibleColumns,
  renderRowSubComponent
) => {
  const dclickEventHandle = dataRow => {
    return handleOnDoubleClick ? handleOnDoubleClick(dataRow.original) : null;
  };
  const renderTbodyData = dataLoop => {
    if (dataLoop.length > 0) {
      return dataLoop.map((row, i) => {
        prepareRow(row);
        return (
          <React.Fragment key={`rowTable${i}`}>
            <tr
              {...row.getRowProps()}
              onDoubleClick={() => dclickEventHandle(row)}
              className={i % 2 === 0 ? '' : 'rowTableGrey'}
            >
              {row.cells.map(cell => {
                return (
                  <td className="tdRowContentTable" {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
            {row.isExpanded ? (
              <tr>
                <td colSpan={visibleColumns.length}>
                  {renderRowSubComponent({ row })}
                </td>
              </tr>
            ) : null}
          </React.Fragment>
        );
      });
    }
    return (
      <tr>
        <td colSpan={headerGroups[0].headers.length}>
          <Empty />
        </td>
      </tr>
    );
  };
  if (pagination) {
    return (
      <tbody className="tbodyTableReact" {...getTableBodyProps()}>
        {renderTbodyData(page)}
      </tbody>
    );
  } else {
    return <tbody className="tbodyTableReact">{renderTbodyData(rows)}</tbody>;
  }
};

const renderGlobalFilter = (
  useFilterGlobal,
  visibleColumns,
  preGlobalFilteredRows,
  state,
  setGlobalFilter
) => {
  if (useFilterGlobal) {
    return (
      <tr className="globalFilter">
        <th
          colSpan={visibleColumns.length}
          style={{
            textAlign: 'left',
          }}
        >
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        </th>
      </tr>
    );
  }
  return null;
};
export default function Table(props: IProps) {
  const {
    columns,
    data,
    pagination,
    useFilterGlobal,
    isLoading,
    handleOnDoubleClick,
    renderRowSubComponent,
  } = props;

  const reSplitAlphaNumeric = /([0-9]+)/gm;
  function toString(a) {
    if (typeof a === 'number') {
      if (isNaN(a) || a === Infinity || a === -Infinity) {
        return '';
      }
      return String(a);
    }
    if (typeof a === 'string') {
      return a.toLocaleLowerCase();
    }
    return '';
  }

  const alphanumeric = (rowA, rowB, columnId) => {
    let a = getRowValueByColumnID(rowA, columnId);
    let b = getRowValueByColumnID(rowB, columnId);
    a = toString(a);
    b = toString(b);

    a = a.split(reSplitAlphaNumeric).filter(Boolean);
    b = b.split(reSplitAlphaNumeric).filter(Boolean);

    while (a.length && b.length) {
      const aa = a.shift();
      const bb = b.shift();

      const an = parseInt(aa, 10);
      const bn = parseInt(bb, 10);

      const combo = [an, bn].sort();

      if (isNaN(combo[0])) {
        if (aa > bb) {
          return 1;
        }
        if (bb > aa) {
          return -1;
        }
        continue;
      }

      if (isNaN(combo[1])) {
        return isNaN(an) ? -1 : 1;
      }
      if (an > bn) {
        return 1;
      }
      if (bn > an) {
        return -1;
      }
    }

    return a.length - b.length;
  };

  function getRowValueByColumnID(row, columnId) {
    return row.values[columnId];
  }

  const columnsData = columns;

  columnsData.forEach(element => {
    if (!element.disableSort) {
      element.sortType = alphanumeric;
    }
  });

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns: columnsData,
      data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination
  );

  const dataPagination = {
    pagination,
    gotoPage,
    canPreviousPage,
    previousPage,
    nextPage,
    canNextPage,
    pageCount,
    pageIndex,
    pageOptions,
    pageSize,
    setPageSize,
    preGlobalFilteredRows,
  };

  return (
    <Skeleton active={true} loading={isLoading}>
      <table className="tableReact" {...getTableProps()}>
        <thead className="theadTableReact">
          {headerGroups.map(headerGroup => (
            <tr className="trTableHead" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => {
                const columnIsSortedDesc = column.isSortedDesc ? ' 🔽' : ' 🔼';
                return (
                  <th
                    {...column.getHeaderProps(
                      column.disableSort
                        ? undefined
                        : column.getSortByToggleProps()
                    )}
                    className={`thTableHeader ${column.headerClassName}`}
                  >
                    {column.render('Header')}
                    <span>{column.isSorted ? columnIsSortedDesc : ''}</span>
                    <div>
                      {column.useFilter === true
                        ? column.render('Filter')
                        : null}
                    </div>
                  </th>
                );
              })}
            </tr>
          ))}
          {renderGlobalFilter(
            useFilterGlobal,
            visibleColumns,
            preGlobalFilteredRows,
            state,
            setGlobalFilter
          )}
        </thead>
        {renderBody(
          prepareRow,
          pagination,
          getTableBodyProps,
          page,
          rows,
          headerGroups,
          handleOnDoubleClick,
          visibleColumns,
          renderRowSubComponent
        )}
      </table>
      {renderPaginationOption(dataPagination)}
    </Skeleton>
  );
}

function filterGreaterThan(rows, id, filterValue) {
  return rows.filter(row => {
    const rowValue = row.values[id];
    return rowValue >= filterValue;
  });
}

filterGreaterThan.autoRemove = val => typeof val !== 'number';

export function generateColumnData(data, config: any = {}) {
  const { disableNumberRow } = config;
  const columnData: any[] = [];
  if (!disableNumberRow) {
    columnData.push({
      headerClassName: 'headerDatatableClass',
      Header: 'No',
      accessor: 'No',
      className: 'numberIndexDatatable',
      Cell: row => parseInt(row.row.id, 10) + 1,
      width: 35,
    });
  }
  for (const iterator of data) {
    iterator.headerClassName = 'headerDatatableClass';
    iterator.className = 'dataIndexDatatable';
    columnData.push(iterator);
  }
  return columnData;
}

export const renderActionComponent = (
  isLoading,
  id,
  renderData,
  handleData
) => {
  const buttonDataAction = [
    renderData.renderInfo === true
      ? {
          type: 'primary',
          icon: 'InfoOutlined',
          onClick: handleData.handleInfo,
          id: `btnInfo${id}`,
          className: 'buttonTable',
        }
      : null,
    renderData.renderUpdate === true
      ? {
          type: 'primary',
          icon: 'EditOutlined',
          onClick: handleData.handleUpdate,
          id: `btnEdit${id}`,
          className: 'buttonTable',
        }
      : null,
    renderData.renderDelete === true
      ? {
          type: 'danger',
          icon: 'DeleteOutlined',
          onClick: handleData.handleRemove,
          id: `btnDelete${id}`,
          className: 'buttonTable',
        }
      : null,
  ];
  return (
    <div className="containerButtonAction">
      <CButton
        buttonData={buttonDataAction}
        isLoading={isLoading}
        containerStyle={{ marginBottom: '0px' }}
      />
    </div>
  );
};
