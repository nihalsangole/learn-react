# Virtualized Large Table - React + TypeScript + Vite

A high-performance virtualized table implementation capable of handling 100,000+ rows without external libraries. Built with React, TypeScript, and Vite.

## Features

- **Virtualized Scrolling**: Only renders visible rows for optimal performance
- **Large Dataset Support**: Handles 100k+ rows smoothly
- **Real-time Filtering**: Filter by status, score range, and text search
- **Inline Editing**: Edit cells directly in the table
- **Responsive Design**: Adapts to different screen sizes
- **Memory Efficient**: Minimal DOM nodes for maximum performance

## Project Structure

```
src/
├── components/
│   ├── virtualized-table/
│   │   ├── Table.tsx           # Main virtualized table component
│   │   ├── TableApp.tsx        # Parent component with data management
│   │   ├── TableRow.tsx        # Individual table row component
│   │   ├── TableCell.tsx       # Editable table cell component
│   │   ├── FilterBar.tsx       # Filter controls
│   │   ├── SortBart.tsx        # Sorting controls
│   │   ├── TableApp.css        # Styling
│   │   └── README.md           # Detailed documentation
│   └── utils/
│       └── generateData.ts     # Data generation utility
```

## Key Components

### Table.tsx

The core virtualization logic with custom `useVirtual` hook that calculates visible rows based on scroll position.

### TableApp.tsx

Manages data state, filtering, and editing operations. Uses `useRef` for large datasets and `useMemo` for performance optimization.

### TableCell.tsx

Handles inline editing for score and status columns with proper state management.

## Performance Optimizations

- **React.memo**: Prevents unnecessary re-renders
- **useCallback**: Memoizes event handlers
- **useMemo**: Caches expensive calculations
- **Virtualization**: Only renders visible rows
- **Custom Hooks**: Separates logic from UI components

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open browser to see the virtualized table in action

## Technical Details

The table uses a custom virtualization algorithm that:

- Calculates visible row range based on scroll position
- Renders only visible rows plus a small buffer
- Maintains scroll height with spacer elements
- Updates efficiently on data changes

This approach reduces DOM nodes from 100,000+ to ~25, resulting in smooth performance even with massive datasets.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT
