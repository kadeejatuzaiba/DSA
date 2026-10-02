# ER Diagram

```mermaid
erDiagram

    COMPANIES ||--o{ USERS : has
    COMPANIES ||--o{ ORDERS : creates
    USERS ||--o{ ORDERS : creates

    USERS ||--o| DRIVERS : has
    DRIVERS ||--o{ DRIVER_DOCUMENTS : has
    DRIVERS ||--o{ DRIVER_AVAILABILITY : has

    ORDERS ||--o| TRIPS : creates

    TRIPS ||--o{ TRIP_ASSIGNMENTS : has
    TRIPS ||--o{ TRIP_EVENTS : has
    TRIPS ||--o{ EXPENSES : has
    TRIPS ||--o| TRIP_PAYROLL_RECORDS : generates

    DRIVERS ||--o{ TRIPS : assigned
    VEHICLES ||--o{ TRIPS : used

    DRIVERS ||--o| WALLETS : has
    WALLETS ||--o{ WALLET_TRANSACTIONS : contains

    COMPANIES ||--o{ STATEMENTS : has
    STATEMENTS ||--o{ STATEMENT_ITEMS : contains
    STATEMENTS ||--o{ STATEMENT_VERIFICATIONS : has

    USERS ||--o{ NOTIFICATIONS : receives
    USERS ||--o{ AUDIT_LOGS : creates