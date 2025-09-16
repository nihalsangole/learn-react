import { useEffect, useMemo, useRef, useState } from 'react';
import TableRow from './TableRow';

function useVirtual({ itemCount, rowHeight, containerRef, overscan = 5 }: any) {
  const [range, setRange] = useState({ start: 0, end: 0, offset: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    function update() {
      const scrollTop = container.scrollTop;
      const height = container.clientHeight;
      const start = Math.max(0, Math.floor(scrollTop / rowHeight) - overscan);
      const visibleCount = Math.ceil(height / rowHeight) + 2 * overscan;
      const end = Math.min(itemCount - 1, start + visibleCount - 1);
      const offset = start * rowHeight;
      setRange({ start, end, offset });
    }

    update();
    container.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });

    return () => {
      container.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [itemCount, rowHeight, containerRef, overscan]);

  return range;
}

function Table({
  indices,
  rowHeight,
  columns,
  onEdit,
  containerHeight = 600,
}: any) {
  const containerRef = useRef(null);
  const itemCount = indices.length;
  const { start, end, offset } = useVirtual({
    itemCount,
    rowHeight,
    containerRef,
    overscan: 5,
  });

  const visibleSlice = useMemo(() => {
    return indices.slice(start, end + 1);
  }, [indices, start, end]);

  const totalHeight = itemCount * rowHeight;

  return (
    <div className='table-wrapper'>
      <div
        className='table-container'
        ref={containerRef}
        style={{
          height: containerHeight,
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        <table className='table'>
          <thead className='table-head'>
            <tr>
              {columns.map((col: any) => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: offset }}>
              <td colSpan={columns.length} style={{ padding: 0 }} />
            </tr>
            {visibleSlice.map((row: any) => {
              return (
                <TableRow
                  key={row.id}
                  row={row}
                  columns={columns}
                  onEdit={onEdit}
                />
              );
            })}
            <tr
              style={{
                height: totalHeight - offset - visibleSlice.length * rowHeight,
              }}
            >
              <td colSpan={columns.length} style={{ padding: 0 }} />
            </tr>
          </tbody>
        </table>
      </div>
      <div className='table-stats'>
        Showing rows {start + 1} – {end + 1} of {itemCount}
      </div>
    </div>
  );
}

export default Table;
