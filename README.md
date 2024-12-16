```
backend/
├── src/ # Main source code directory
│ ├── controllers/ # Logic for handling requests and responses
│ ├── models/ # Database models or schemas
│ ├── routes/ # API route definitions
│ ├── config/ # Configuration files (e.g., env, db config)
│ ├── utils/ # Helper functions and utilities
│ ├── tests/ # Unit and integration tests
│ └── app.js (or index.js) # Application entry point
├── node_modules/ # Installed dependencies
├── package.json # Project metadata and dependencies
├── package-lock.json # Lock file for exact dependency versions
├── .env # Environment variables
└── README.md # Documentation
└── .gitignore # files to not push to GitHub
```

"type": "module" inside .json will allow our .js file to behave like a .mjs module file, allowing us to use "import" syntax instead of "require" syntax.

Must have Node.js v14 or newer.
