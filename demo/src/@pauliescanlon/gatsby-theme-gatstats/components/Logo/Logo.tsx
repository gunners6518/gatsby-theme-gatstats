/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export const Logo: React.FC = () => (
  <Link to="/">
    <svg id="demo-logo" x="0px" y="0px" viewBox="0 0 220 50" width="150px">
      <path
        sx={{
          fill: 'primary'
        }}
        d="M210.81,18.83c-0.05-0.08-0.11-0.15-0.18-0.21l0,0l-0.01,0
   c-0.03-0.02-0.07-0.04-0.1-0.06l-10.58-6.1l0,0c-0.11-0.07-0.24-0.12-0.38-0.12c-0.24,0-0.44,0.13-0.56,0.32v13.23
   c0.12,0.19,0.32,0.32,0.56,0.32c0.14,0,0.28-0.04,0.39-0.12l0,0l10.63-6.31l0,0c0.1-0.06,0.18-0.14,0.24-0.24V18.83z"
      />
      <path
        sx={{
          fill: 'secondary'
        }}
        d="M198.7,33.54L198.7,33.54L198.7,33.54c-0.01-0.05-0.02-0.09-0.03-0.13
   l-3.17-11.79l0,0c-0.03-0.13-0.09-0.25-0.19-0.35c-0.17-0.17-0.4-0.22-0.62-0.18l-9.36,9.36c-0.04,0.22,0.01,0.45,0.18,0.62
   c0.1,0.1,0.23,0.16,0.36,0.19l0,0l11.98,3.05l0,0c0.11,0.03,0.23,0.03,0.34,0l0.49-0.49C198.71,33.72,198.72,33.63,198.7,33.54z"
      />
      <path
        sx={{
          fill: 'textMuted'
        }}
        d="M213.27,36.91c0.13-0.03,0.25-0.09,0.35-0.19c0.17-0.17,0.22-0.4,0.18-0.62
   l-9.36-9.36c-0.22-0.04-0.45,0.01-0.62,0.18c-0.1,0.1-0.16,0.23-0.19,0.36l0,0l-3.05,11.98l0,0c-0.03,0.11-0.03,0.23,0,0.34
   l0.49,0.49c0.09,0.02,0.18,0.03,0.28,0.02l0,0l0.01,0c0.04-0.01,0.08-0.02,0.12-0.03L213.27,36.91L213.27,36.91z"
      />

      <path
        sx={{
          fill: 'textSecondary'
        }}
        d="M18.92,24.55v5.68h5.44c-1.01,3.08-2.88,4.47-5.72,4.47c-3.45,0-6.49-2.39-6.49-9.46c0-6.05,2.96-8.97,6.54-8.97
   c2.96,0,4.79,1.42,5.4,4.42l0.08,0.41h7.31l-0.04-0.41c-0.57-5.52-4.67-9.78-12.66-9.78c-7.67,0-14.25,5.03-14.25,14.78
   c0,9.42,5.24,14.37,12.71,14.37c2.96,0,4.87-0.45,6.45-1.79l1.22-3.08l0.69,4.3h5.68V24.55H18.92z"
      />
      <path
        sx={{
          fill: 'textSecondary'
        }}
        d="M44.29,35.11c-1.46,0-2.48-0.73-2.48-2.03c0-2.15,2.35-3,5.64-2.76v1.42C47.46,34.01,45.75,35.11,44.29,35.11z M48.03,39.49
   h7.14c-0.32-2.39-0.41-3.86-0.41-5.48v-6.09c0-1.34-0.04-2.6-0.12-3.69c-0.32-3.94-2.68-6.98-9.54-6.98
   c-5.48,0-9.99,2.88-10.03,7.96l6.9-0.04c0.12-1.87,1.1-2.96,2.8-2.96c1.58,0,2.48,0.97,2.6,2.07c0.08,0.69,0.08,1.14,0.08,1.58v0.32
   h-1.38c-7.35,0-11.73,2.84-11.73,7.47c0,4.18,3.37,6.41,6.94,6.41c1.99,0,3.82-0.49,5.36-1.46l0.89-2.27L48.03,39.49z"
      />
      <path
        sx={{
          fill: 'textSecondary'
        }}
        d="M67.92,22.52h4.79v-4.55h-4.79v-5.6h-7.31v5.6h-3.45v4.55h3.45v9.05c0,1.22,0,2.23,0.08,3.49c0.24,3.33,1.87,4.99,7.27,4.99
   c1.54,0,2.88-0.12,4.3-0.37v-4.55c-3.45,0.16-4.14-0.32-4.3-2.52c-0.04-0.57-0.04-1.38-0.04-2.11V22.52z"
      />
      <path
        sx={{
          fill: 'textSecondary'
        }}
        d="M86.26,10.91c-5.56,0-10.59,3.04-10.59,8.44c0,5.6,3.73,7.59,10.11,9.17c3.45,0.85,4.51,2.11,4.51,3.57
   c0,1.54-1.54,2.6-3.57,2.6c-2.19,0-4.34-1.14-4.83-3.77h-7.31c0.45,6.29,5.24,9.13,12.34,9.13c5.64,0,11-2.84,11-8.44
   c0-4.3-2.52-7.39-8.69-8.85c-4.63-1.1-5.93-2.19-5.93-3.98c0-1.7,1.14-2.52,2.8-2.52c2.39,0,3.61,1.54,3.94,3.86h7.31
   C96.74,14.93,93.65,10.91,86.26,10.91z"
      />
      <path
        sx={{
          fill: 'textSecondary'
        }}
        d="M109.56,22.52h4.79v-4.55h-4.79v-5.6h-7.31v5.6h-3.45v4.55h3.45v9.05c0,1.22,0,2.23,0.08,3.49
   c0.24,3.33,1.87,4.99,7.27,4.99c1.54,0,2.88-0.12,4.3-0.37v-4.55c-3.45,0.16-4.14-0.32-4.3-2.52c-0.04-0.57-0.04-1.38-0.04-2.11
   V22.52z"
      />
      <path
        sx={{
          fill: 'textSecondary'
        }}
        d="M126,35.11c-1.46,0-2.48-0.73-2.48-2.03c0-2.15,2.35-3,5.64-2.76v1.42C129.17,34.01,127.47,35.11,126,35.11z M129.74,39.49
   h7.14c-0.32-2.39-0.41-3.86-0.41-5.48v-6.09c0-1.34-0.04-2.6-0.12-3.69c-0.32-3.94-2.68-6.98-9.54-6.98
   c-5.48,0-9.99,2.88-10.03,7.96l6.9-0.04c0.12-1.87,1.1-2.96,2.8-2.96c1.58,0,2.48,0.97,2.6,2.07c0.08,0.69,0.08,1.14,0.08,1.58v0.32
   h-1.38c-7.35,0-11.73,2.84-11.73,7.47c0,4.18,3.37,6.41,6.94,6.41c1.99,0,3.82-0.49,5.36-1.46l0.89-2.27L129.74,39.49z"
      />
      <path
        sx={{
          fill: 'textSecondary'
        }}
        d="M149.63,22.52h4.79v-4.55h-4.79v-5.6h-7.31v5.6h-3.45v4.55h3.45v9.05c0,1.22,0,2.23,0.08,3.49
   c0.24,3.33,1.87,4.99,7.27,4.99c1.54,0,2.88-0.12,4.3-0.37v-4.55c-3.45,0.16-4.14-0.32-4.3-2.52c-0.04-0.57-0.04-1.38-0.04-2.11
   V22.52z"
      />
      <path
        sx={{
          fill: 'textSecondary'
        }}
        d="M166.03,17.25c-5.76,0-9.5,2.68-9.5,6.98c0,3.69,2.48,5.6,6.62,6.58c3.86,0.89,5.24,1.66,5.24,3.04
   c0,1.14-1.01,1.66-2.31,1.66c-1.54,0-2.84-1.1-3.25-2.76h-7.18c0.57,4.87,4.59,7.31,10.47,7.31c5.24,0,9.58-2.15,9.58-6.78
   c0-4.18-2.8-5.89-6.74-6.86c-4.14-1.01-5.11-1.83-5.11-3.04c0-0.93,0.73-1.58,1.75-1.58c1.3,0,2.03,0.85,2.35,2.35h7.18
   C174.55,20.21,171.43,17.25,166.03,17.25z"
      />
    </svg>
  </Link>
)
