# Architecture

## Project Overview

Global Explorer Dashboard is a React application built to demonstrate modern frontend architecture using React, TypeScript, Apollo Client, GraphQL, and other production-grade frontend technologies.

---

## Architecture Decision

### Selected Architecture

Feature-Based Architecture

### Why this Architecture?

Before starting implementation, the application requirements were analyzed to identify the business responsibilities of the system.

The application contains several independent business features, such as:

Authentication
Dashboard
Countries
Compare
Favourites
Settings

Each feature owns its own UI, hooks, GraphQL queries, types, utilities, and business logic. Organizing the project around these business capabilities improves code ownership, maintainability, and scalability as the application grows.

### Why Not Domain-Driven Design (DDD)?

Domain-Driven Design is better suited for applications with multiple large and complex business domains, such as banking, e-commerce, or ERP systems.

This project consists of a single frontend application with relatively independent features and limited business complexity. A Feature-Based Architecture provides a simpler, more maintainable solution while still supporting future growth.

This architecture was selected intentionally before implementation to establish a scalable foundation rather than introducing complexity prematurely.