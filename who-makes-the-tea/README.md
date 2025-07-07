# Who Makes The Tea Frontend

A React TypeScript application that provides a simple and intuitive interface for managing tea round participants and selections.
- [The server side Rest Api can be found here](https://github.com/puggyshugs/TeaRoundPicker)

## Overview

The frontend is a single-page application that allows users to:
- Add multiple participants via comma-separated input
- Select a random tea maker with a single click
- View all current participants
- Receive immediate feedback on actions

## Technologies Used

- **React 18** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **Modern CSS** - Responsive styling
- **Fetch API** - HTTP client for API communication

## Project Structure

```
frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── api/
│   │   └── teaApi.ts           # API client functions
│   ├── App.tsx                 # Main application component
│   ├── App.css                 # Application styles
│   ├── index.tsx               # React entry point
│   └── index.css               # Global styles
├── package.json
└── tsconfig.json
```

## Setup and Installation

### Prerequisites
- Node.js 18+ and npm
- The backend API running on `http://localhost:5027`

### Running the Application

1. **Navigate to the frontend directory**
   ```bash
   cd WhoMakesTheTea/who-makes-the-tea
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## Features

### Participant Management
- **Add Participants**: Enter names separated by commas
- **Unique Names**: Prevents duplicate participant names
- **Real-time Validation**: Immediate feedback on input errors

### Tea Maker Selection
- **Random Selection**: Fair selection using backend randomization
- **Visual Feedback**: Clear display of selected participant
- **Loading States**: User feedback during API calls

## API Integration

The frontend communicates with the backend through the `teaApi.ts` module:

```typescript
// Get all participants
const participants = await getAllParticipants();

// Add multiple participants
await createParticipants(['Alice', 'Bob', 'Charlie']);

// Select random participant
const teaMaker = await selectParticipant();
```

### Error Handling

The application handles various error scenarios:
- Network connectivity issues
- Invalid input data
- Duplicate participant names
- Empty participant lists

## Component Structure

### App Component
The main application component manages:
- Application state (participants, selected tea maker, loading, errors)
- User interactions (input handling, button clicks)
- API communication and error handling

### State Management
Uses React hooks for state management:
- `useState` for component state
- Error boundary for error handling
- Loading states for user feedback

## Styling

The application uses modern CSS with:
- **Flexbox Layout** - Responsive and flexible layouts
- **CSS Grid** - Structured component placement
- **Custom Properties** - Consistent color scheme and spacing
- **Responsive Design** - Mobile-first approach

### Color Scheme
- Primary: Modern blue tones
- Secondary: Complementary accent colors
- Error: Red for error states
- Success: Green for success states

## User Experience

### Design Principles
- **Simplicity**: Clean, uncluttered interface
- **Feedback**: Immediate response to user actions
- **Accessibility**: Proper labels and semantic HTML
- **Responsiveness**: Works across device sizes

### Interactive Elements
- **Hover States**: Visual feedback on interactive elements
- **Loading States**: Spinners and disabled states during API calls
- **Error Messages**: Clear, actionable error messages
- **Success Feedback**: Confirmation of successful actions

## Configuration

### API Base URL
The API base URL is configured in `teaApi.ts`:
```typescript
const API_BASE_URL = "http://localhost:5027";
```

## Development

### Code Style
- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting and formatting
- **Consistent Naming**: camelCase for variables and functions

### Adding New Features

1. **State Management**: Add new state variables using `useState`
2. **API Integration**: Extend `teaApi.ts` with new endpoints
3. **UI Components**: Create new components in separate files
4. **Error Handling**: Implement proper error boundaries

## Browser Support

The application supports modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
