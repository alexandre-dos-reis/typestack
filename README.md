# Typestack

This project is wrapped with the monorepo NX build system. It's a POC using the latest fully type packages for NodeJS and browser javascript known at the moment, using Typescript, for a great developper experience.

- Orchid ORM: A fast NodeJs ORM creating types on declaration, conversion to Zod schema is possible.
- Trpc: Communication between api and front app fully type. Use Tanstack Query behind the hood (React Query)
- React-Hook-Form: Form lib for React, can use Zod schema for validation.
- Zod: RunTime type validation, can be used with Orchid ORM, Trpc and React-Hook-form.
- Tanstack Router: Modern 100% Typesafe router with lots of 

This is using a PostGres database via Docker.