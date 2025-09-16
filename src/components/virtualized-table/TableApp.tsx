import { useCallback, useMemo, useRef, useState } from 'react';
import { columns, generateData } from '../utils/generateData';
import FilterBar from './FilterBar';
import SortBar from './SortBart';
import Table from './Table';

function TableApp() {
  const dataRef = useRef(generateData(1000));
  const [dataVersion, setDataVersion] = useState(0);

  const [statusFilter, setStatusFilter] = useState('');
  const [scoreMin, setScoreMin] = useState('');
  const [scoreMax, setScoreMax] = useState('');
  const [text, setText] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortKey, setSortKey] = useState('asc');

  const resetFilters = useCallback(() => {
    setStatusFilter('');
    setScoreMin('');
    setScoreMax('');
    setText('');
    setSortBy('');
    setSortKey('asc');
  }, []);

  const indices = useMemo(() => {
    const arr = [];
    const d = dataRef.current;
    for (let i = 0; i < d.length; i++) {
      const row = d[i];
      if (statusFilter && row.status !== statusFilter) continue;
      if (scoreMin && row.score < Number(scoreMin)) continue;
      if (scoreMax && row.score > Number(scoreMax)) continue;
      if (text) {
        const txt = text.toLowerCase();
        if (
          !(
            row.name.toLowerCase().includes(txt) ||
            row.email.toLowerCase().includes(txt) ||
            row.city.toLowerCase().includes(txt) ||
            row.country.toLowerCase().includes(txt) ||
            row.phone.toLowerCase().includes(txt) ||
            row.department.toLowerCase().includes(txt)
          )
        )
          continue;
      }
      arr.push(row);
    }
    if (sortBy) {
      const dir = sortKey === 'asc' ? 1 : -1;
      arr.sort((a, b) => {
        const A = (a as any)[sortBy];
        const B = (b as any)[sortBy];
        if (A === B) return 0;
        if (sortBy === 'score' || sortBy === 'id')
          return (Number(A) - Number(B)) * dir;
        if (sortBy === 'updatedAt')
          return (new Date(A).getTime() - new Date(B).getTime()) * dir;
        return String(A).localeCompare(String(B)) * dir;
      });
    }

    return arr;
  }, [statusFilter, scoreMin, scoreMax, text, sortBy, sortKey, dataVersion]);

  const handleEdit = useCallback((id: number, key: string, value: any) => {
    // Find the item by ID instead of using index
    const idx = dataRef.current.findIndex((item) => item.id === id);

    if (idx === -1) {
      return; // Item not found
    }

    const old = dataRef.current[idx];
    dataRef.current[idx] = {
      ...old,
      [key]: value,
      updatedAt: new Date().toISOString(),
    };

    setDataVersion((v) => v + 1);
  }, []);

  return (
    <div className='table-app'>
      <h2>Virtualized large table</h2>
      <div className='controls'>
        <FilterBar
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          scoreMin={scoreMin}
          setScoreMin={setScoreMin}
          scoreMax={scoreMax}
          setScoreMax={setScoreMax}
          text={text}
          setText={setText}
          onReset={resetFilters}
        />
        <SortBar
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortKey={sortKey}
          setSortKey={setSortKey}
        />
      </div>

      <Table
        indices={indices}
        columns={columns}
        rowHeight={30}
        containerHeight={600}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default TableApp;
