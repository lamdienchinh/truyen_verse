# @workspace/shared

Shared utilities, types, constants, and hooks for Truyện Verse monorepo.

## 📁 Structure

```
src/
├── config/           # Application constants and configuration
├── hooks/            # Reusable React hooks
├── services/         # API service classes and utilities  
├── types/            # TypeScript type definitions
├── utils/            # Common utility functions
└── index.ts          # Main export file
```

## 🚀 Usage

### Types

```typescript
import { User, ApiResponse, PaginatedResponse } from "@workspace/shared/types";
```

### Constants

```typescript
import { APP_CONFIG, QUERY_KEYS, API_ENDPOINTS } from "@workspace/shared/config";
```

### Hooks

```typescript
import { useFilters } from "@workspace/shared/hooks";

const { filters, updateFilter, clearFilters } = useFilters(DEFAULT_FILTERS);
```

### Utilities

```typescript
import { debounce, formatCurrency, formatDate } from "@workspace/shared/utils";
```

## 📋 Features

### Filter Management
- Generic `useFilters` hook for managing filter state
- Type-safe filter updates and clearing
- Active filter detection

### API Utilities
- Base API service class with common CRUD operations
- Standardized response types
- Query string building utilities

### Date & Time
- Locale-aware date formatting
- Relative time formatting
- Date manipulation utilities

### Common Utilities
- Debounce and throttle functions
- Currency and number formatting
- Array manipulation utilities
- Safe JSON parsing
- String and object utilities

## 🔧 Development

```bash
# Install dependencies
pnpm install

# Type checking
pnpm check-types

# Linting
pnpm lint
```

## 📦 Exports

The package provides multiple entry points:

- `@workspace/shared/types` - Type definitions
- `@workspace/shared/config` - Constants and configuration
- `@workspace/shared/hooks` - React hooks
- `@workspace/shared/utils` - Utility functions
