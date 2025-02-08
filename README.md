# Next.js TypeScript Template

A Next.js project template with TypeScript, ESLint, and Prettier configuration.

## Repository Setup

```bash
# Clone the repository
git clone [REPOSITORY_URL]

# Navigate to project directory
cd nextjs-typescript-template

# Switch to develop branch
git checkout develop

# Install dependencies
npm install
```

## Git Workflow

### Branches

- `main` - Production branch, contains stable code ready for deployment
- `develop` - Development branch, contains latest features and fixes

### Getting Started

1. Always work from the `develop` branch
2. Keep your local develop branch up to date:

```bash
git checkout develop
git pull origin develop
```

### Creating Feature Branches

```bash
# Create and switch to a new feature branch
git checkout -b feature/your-feature-name develop

# Push your feature branch to remote
git push -u origin feature/your-feature-name
```

### Before Creating a Pull Request

1. Ensure your code passes all checks:

```bash
npm run lint
npm run format:check
npm run build
```

2. Update your branch with latest develop changes:

```bash
git checkout develop
git pull origin develop
git checkout feature/your-feature-name
git merge develop
```

3. Resolve any conflicts and test your changes

### Pull Request Process

1. Create PR from your feature branch to `develop`
2. Ensure PR passes all automated checks
3. Request code review from team members
4. Address review comments if any
5. Merge only after approval

## Installation

```bash
npm install
```

## Development Scripts

- `npm run dev` - Start the development server at http://localhost:8080
- `npm run build` - Build the application for production (includes linting check)
- `npm run start` - Start the production server (includes linting check)

## Code Quality Tools

### Linting

- `npm run lint` - Check for code issues using ESLint
- `npm run lint:fix` - Automatically fix ESLint issues

### Formatting

- `npm run format` - Format all files using Prettier
- `npm run format:check` - Check if files are properly formatted

## VS Code Setup

### Required Extensions

1. Install ESLint extension

   ```
   Name: ESLint
   ID: dbaeumer.vscode-eslint
   ```

2. Install Prettier extension
   ```
   Name: Prettier - Code formatter
   ID: esbenp.prettier-vscode
   ```

### VS Code Settings

1. Open VS Code Settings (Command Palette → "Preferences: Open Settings (JSON)")
2. Add the following configuration:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### Project-Specific Settings (Recommended)

1. Create `.vscode` folder in your project root
2. Create `settings.json` inside `.vscode` folder with:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

### Verifying Setup

1. Open any TypeScript/TSX file
2. Make some formatting changes (add extra spaces, wrong indentation)
3. Save the file - it should automatically format
4. If you have ESLint issues, they should be visible in the Problems panel
5. Saving should also attempt to fix auto-fixable ESLint issues

## Project Structure

```
nextjs-typescript-template/
├── src/
│   ├── app/                    # Next.js 13+ App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx          # Home page
│   │   └── [...routes]/      # Other routes
│   │
│   ├── components/            # Reusable React components
│   │   ├── common/           # Shared components (buttons, inputs, etc.)
│   │   ├── layout/           # Layout components (header, footer, etc.)
│   │   └── features/         # Feature-specific components
│   │
│   ├── hooks/                 # Custom React hooks
│   │   ├── common/           # Shared hooks
│   │   └── features/         # Feature-specific hooks
│   │
│   ├── lib/                   # Utility functions and libraries
│   │   ├── api/              # API-related utilities
│   │   ├── constants/        # Constants and configuration
│   │   └── utils/            # Helper functions
│   │
│   ├── types/                # TypeScript type definitions
│   │   ├── api.ts           # API-related types
│   │   ├── common.ts        # Shared types
│   │   └── models.ts        # Data model types
│   │
│   ├── styles/               # Global styles and theme
│   │   ├── globals.css      # Global CSS
│   │   └── theme/           # Theme configuration
│   │
│   └── services/             # External service integrations
│       ├── api/             # API service functions
│       └── external/        # Third-party service integrations
│
├── public/                    # Static files
│   ├── images/              # Image assets
│   ├── fonts/              # Font files
│   └── icons/              # Icon assets
│
├── .vscode/                   # VS Code specific settings
├── .eslintrc.json            # ESLint configuration
├── .prettierrc               # Prettier configuration
├── .gitignore                # Git ignore rules
├── package.json              # Project dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

### Key Directories Explained

- `src/app/`: Contains all Next.js pages and routes using the App Router
- `src/components/`: React components organized by scope
  - `common/`: Reusable components across features
  - `layout/`: Page layout components
  - `features/`: Feature-specific components
- `src/hooks/`: Custom React hooks
- `src/lib/`: Utility functions, constants, and helpers
- `src/types/`: TypeScript type definitions
- `src/styles/`: Global styles and theming
- `src/services/`: External service integrations and API calls

### Naming Conventions

- Components: PascalCase (e.g., `Button.tsx`, `UserProfile.tsx`)
- Hooks: camelCase with 'use' prefix (e.g., `useAuth.ts`, `useForm.ts`)
- Utilities: camelCase (e.g., `formatDate.ts`, `validation.ts`)
- Types: PascalCase with type-specific suffix (e.g., `UserType.ts`, `AuthProps.ts`)

## Dependencies

### Main Dependencies

- Next.js 15.1.2
- React 19.0.0
- React DOM 19.0.0

### Development Dependencies

- TypeScript 5
- ESLint 9.17.0
- Prettier 3.4.2
- Various ESLint plugins and configurations

## Pre-commit Hooks

The build and start commands include automatic linting checks:

- `npm run build` runs linting before building
- `npm run start` runs linting before starting the production server

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [ESLint Documentation](https://eslint.org/docs/user-guide/getting-started)
- [Prettier Documentation](https://prettier.io/docs/en/index.html)
