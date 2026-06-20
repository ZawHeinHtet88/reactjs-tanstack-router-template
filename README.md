# CCTV Video Management System (VMS)

A modern web-based CCTV Video Management System built with React, TypeScript, and TanStack.

## Tech Stack

| Library | Purpose |
|---------|---------|
| **React 19** | UI framework |
| **TypeScript 6** | Type safety |
| **Vite 8** | Build tool & dev server |
| **TanStack Router** | File-based routing with type-safe navigation |
| **TanStack Query** | Server state management (caching, refetching, mutations) |
| **Zustand** | Client state management |
| **Axios** | HTTP client for REST API calls |
| **Radix UI** | Headless, accessible UI primitives |
| **shadcn/ui** | Component library built on Radix (Radix Nova style) |
| **Tailwind CSS v4** | Utility-first styling |
| **Lucide React** | Icon library |
| **Zod** | Schema validation |
| **Biome** | Linter & formatter |
| **WebRTC** | Low-latency video streaming |
| **WebSocket** | Real-time events (motion, alerts) |

## Project Structure

```
src/
├── app/                  # App bootstrapping
│   ├── providers.tsx     # Global providers (QueryClient, Router)
│   └── router.ts         # Router instance
├── assets/               # Static assets
├── features/             # Domain modules (feature-based)
│   ├── auth/             # Authentication
│   │   ├── api/          # Auth API calls
│   │   ├── components/   # Login, logout UI
│   │   ├── schemas/      # Zod validation schemas
│   │   └── store/        # Auth state (Zustand)
│   ├── cameras/          # Camera management
│   │   ├── api/          # Camera CRUD API
│   │   ├── components/   # CameraGrid, CameraCard, etc.
│   │   ├── data/         # Static/mock data
│   │   ├── hooks/        # Camera-specific hooks
│   │   ├── schemas/      # Camera validation
│   │   └── store/        # Camera UI state
│   ├── events/           # Alerts & motion events
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── schemas/
│   └── recordings/       # Video recordings
│       ├── api/
│       ├── components/
│       └── schemas/
├── routes/               # File-based route definitions
│   ├── __root.tsx         # Root layout (AppShell)
│   ├── index.tsx          # Live View page
│   ├── cameras/           # Camera detail routes
│   ├── events.tsx         # Events page
│   └── recordings.tsx     # Recordings page
├── shared/               # Shared utilities
│   ├── components/
│   │   ├── layout/        # AppShell, Sidebar, Header
│   │   └── ui/            # shadcn/ui components
│   ├── hooks/             # Shared hooks
│   ├── lib/               # Utilities
│   │   ├── api.ts         # Axios instance
│   │   ├── queryClient.ts # TanStack Query client
│   │   ├── utils.ts       # cn() helper (tailwind-merge + clsx)
│   │   ├── webrtc.ts      # WebRTC peer connection helpers
│   │   └── wsClient.ts    # WebSocket client singleton
│   ├── schemas/           # Shared Zod schemas
│   ├── store/             # Shared Zustand stores
│   └── types/             # Shared TypeScript types
├── index.css              # Global styles (Tailwind + CSS variables)
├── main.tsx               # App entry point
└── routeTree.gen.ts       # Auto-generated route tree
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type-check
npm run typecheck

# Lint & format
npm run lint

# Build for production
npm run build
```

## How to Continue Development

### Adding a new page
1. Create a file in `src/routes/` (TanStack Router generates routes automatically)
2. Add the route component and wire up the API/data layer

### Adding a new feature
1. Create a new folder under `src/features/<feature-name>/`
2. Organise by concern: `api/`, `components/`, `hooks/`, `schemas/`, `store/`
3. Register API endpoints in the feature's `api/` module using the shared Axios instance
4. Add route pages in `src/routes/` that import from the feature

### Connecting to a backend
- Set `VITE_API_URL` in `.env` to point to your backend
- The shared Axios instance (`src/shared/lib/api.ts`) handles 401 redirects
- Use TanStack Query queries/mutations in feature hooks for server data

### Real-time updates
- Use `wsClient` (`src/shared/lib/wsClient.ts`) for WebSocket events (motion alerts, status changes)
- Messages are routed by `type` — subscribe with `wsClient.on("eventType", handler)`

### Video streaming
- Use `createPeerConnection()` from `src/shared/lib/webrtc.ts` for WebRTC-based streams
- Integrate with your streaming server (e.g., RTSP-to-WebRTC gateway)

### UI components
- All shadcn/ui components live in `src/shared/components/ui/`
- Add new ones with `npx shadcn add <component-name>`
- The `cn()` utility (`src/shared/lib/utils.ts`) is used for conditional class merging

### State management
- **Server state**: TanStack Query (queries, mutations, cache invalidation)
- **Client state**: Zustand stores (auth, UI preferences, camera filters)

### Code quality
- **Linting**: `npm run lint` (Biome)
- **Type checking**: `npm run typecheck` (TypeScript)
- **Pre-commit hooks**: enforced via Husky

### Environment variables
| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_API_URL` | `/api` | Backend API base URL |
