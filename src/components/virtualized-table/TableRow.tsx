import TableCell from './TableCell';

function TableRow({ row, columns, onEdit }: any) {
  return (
    <tr className='table-row'>
      {columns.map((col: any) => (
        <TableCell
          key={col.key}
          row={row}
          columnKey={col.key}
          onEdit={onEdit}
        />
      ))}
    </tr>
  );
}

export default TableRow;
