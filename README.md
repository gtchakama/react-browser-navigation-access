# React Navigation Control Component

A React component that handles browser navigation control, preventing users from accidentally leaving a page with unsaved changes. The component shows a confirmation dialog when users attempt to navigate away using the browser's back button or keyboard shortcuts.

## Features

- Prevents accidental navigation away from the page
- Customizable confirmation dialog
- Handles browser back button and keyboard shortcuts
- Fallback to home page if no previous history exists
- Clean event listener management

## Installation

1. Copy the `NavigationControl.jsx` file into your React project:

```bash
src/
  components/
    NavigationControl.js
```

2. If you're using Tailwind CSS, no additional setup is required. If not, add the provided CSS to your stylesheets.

## Usage

### Basic Implementation

```jsx
import React from 'react';
import NavigationControl from './components/NavigationControl';

function App() {
  return (
    <div>
      <h1>Your App Content</h1>
      <NavigationControl />
    </div>
  );
}

export default App;
```

### Without Tailwind CSS

If you're not using Tailwind CSS, add these styles to your CSS file:

```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
}

.btn {
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  margin: 0 4px;
}

.btn-primary {
  background-color: #3490dc;
  color: white;
}

.btn-danger {
  background-color: #e3342f;
  color: white;
}

.alert {
  padding: 12px;
  margin-bottom: 16px;
  border-radius: 4px;
  background-color: #ebf8ff;
  border: 1px solid #63b3ed;
  color: #2b6cb0;
}
```

## Component Features

1. **Navigation Prevention**: 
   - Captures browser back button events
   - Prevents immediate navigation
   - Shows confirmation dialog

2. **Smart Navigation**:
   - Attempts to go back to previous page if history exists
   - Falls back to home page if no history is available
   - Handles navigation cleanup properly

3. **State Management**:
   - Tracks navigation control state
   - Manages dialog visibility
   - Handles history availability

## API

### Props

Currently, the component doesn't accept any props. Future versions may include:

- `onNavigateAway`: Callback function when navigation is confirmed
- `customMessages`: Object for dialog text customization
- `styling`: Custom styling options

### States

- `showDialog`: Controls the visibility of the confirmation dialog
- `pushStateEnabled`: Toggles navigation control
- `hasHistory`: Tracks whether there's a previous page in history


## Known Limitations

1. Cannot prevent navigation when closing the browser tab directly
2. Some browsers might handle history differently
3. May not work with certain routing configurations

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this component in your projects.