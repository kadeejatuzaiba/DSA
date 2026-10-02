# HireD — Entity Relationship Diagram

## 1. Overview

This document describes the main entities in the HireD database and their relationships.

The database uses **PostgreSQL** with a relational data model.

---

## 2. ER Diagram

```mermaid
erDiagram

    COMPANIES ||--o{ USERS : has
    COMPANIES ||--o{ ORDERS : creates
    COMPANIES ||--o{ STATEMENTS : receives

    USERS ||--o| DRIVERS : "can be"

    ORDERS ||--o{ TRIPS : contains

    DRIVERS ||--o{ TRIPS : assigned
    VEHICLES ||--o{ TRIPS : used

    TRIPS ||--o{ EXPENSES : has
    DRIVERS ||--o{ PAYROLL : receives
    DRIVERS ||--o{ WALLET : owns

    USERS ||--o{ AUDIT_LOGS : creates

    COMPANIES {
        uuid id PK
        string name
        string status
        timestamp created_at
        timestamp updated_at
    }

    USERS {
        uuid id PK
        uuid company_id FK
        string name
        string email
        string role
        string status
        timestamp created_at
        timestamp updated_at
    }

    DRIVERS {
        uuid id PK
        uuid user_id FK
        string status
        timestamp created_at
        timestamp updated_at
    }

    VEHICLES {
        uuid id PK
        string vehicle_number
        string type
        string status
        timestamp created_at
    }

    ORDERS {
        uuid id PK
        uuid company_id FK
        string status
        string pickup_location
        string drop_location
        timestamp created_at
        timestamp updated_at
    }

    TRIPS {
        uuid id PK
        uuid order_id FK
        uuid driver_id FK
        uuid vehicle_id FK
        string status
        timestamp started_at
        timestamp completed_at
        timestamp created_at
    }

    EXPENSES {
        uuid id PK
        uuid trip_id FK
        decimal amount
        string description
        timestamp created_at
    }

    PAYROLL {
        uuid id PK
        uuid driver_id FK
        decimal amount
        string period
        string status
        timestamp created_at
    }

    WALLET {
        uuid id PK
        uuid driver_id FK
        string type
        decimal amount
        string reference
        timestamp created_at
    }

    STATEMENTS {
        uuid id PK
        uuid company_id FK
        string period
        string status
        timestamp published_at
        timestamp created_at
    }

    AUDIT_LOGS {
        uuid id PK
        uuid user_id FK
        string action
        string entity
        uuid entity_id
        timestamp created_at
    }
```

---

## 3. Main Relationships

| Relationship | Description |
|---|---|
| Company → Users | A company can have multiple users |
| Company → Orders | A company can create multiple orders |
| Company → Statements | A company can have multiple statements |
| User → Driver | A user can be associated with a driver |
| Order → Trips | An order can have one or more trips |
| Driver → Trips | A driver can be assigned to multiple trips |
| Vehicle → Trips | A vehicle can be used for multiple trips |
| Trip → Expenses | A trip can have multiple expenses |
| Driver → Payroll | A driver can have multiple payroll records |
| Driver → Wallet | A driver can have wallet transactions |
| User → Audit Logs | User actions can be recorded in audit logs |

---

## 4. Core Data Flow

```text
Company
   |
   +── Users
   |
   +── Orders
          |
          +── Trips
                 |
                 +── Driver
                 |
                 +── Vehicle
                 |
                 +── Expenses
                 |
                 +── Payroll
                 |
                 +── Wallet
          |
          +── Statement
```

---

## 5. Relationship Rules

### Company

A company can have multiple users, orders, and statements.

### Order

An order belongs to a company and is associated with trip information.

### Trip

A trip connects an order with a driver and vehicle.

### Driver

A driver can have multiple trips and payroll records.

### Vehicle

A vehicle can be assigned to multiple trips over time.

### Expense

Expenses are associated with a specific trip.

### Payroll

Payroll records are associated with a driver.

### Wallet

Wallet records maintain driver-related financial transactions.

### Statement

Statements are generated for a company for a specific period.

### Audit Log

Audit logs record important user actions within the system.

---

## 6. Data Integrity

The relationships are maintained using:

- Primary keys
- Foreign keys
- Unique constraints
- Not-null constraints
- Database transactions where required

Foreign keys prevent records from referencing non-existing entities.

---

## 7. Source of Truth

The actual database schema is the source of truth for this diagram.

Any schema changes should also update:

- `database.md`
- `er-diagram.md`
- Related backend models/migrations