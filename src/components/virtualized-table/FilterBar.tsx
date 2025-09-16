function FilterBar({
  statusFilter,
  setStatusFilter,
  scoreMin,
  setScoreMin,
  scoreMax,
  setScoreMax,
  text,
  setText,
  onReset,
}: any) {
  return (
    <div className='filter-bar'>
      <label htmlFor='search'>
        Status:
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value=''>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </label>

      <label>
        Score Min:
        <input
          type='number'
          value={scoreMin}
          onChange={(e) => setScoreMin(e.target.value)}
          placeholder='min'
        />
      </label>

      <label>
        Score Max:
        <input
          type='number'
          value={scoreMax}
          onChange={(e) => setScoreMax(e.target.value)}
          placeholder='max'
        />
      </label>

      <label>
        Search:
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='search...'
        />
      </label>

      <button className='reset-btn' onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default FilterBar;
