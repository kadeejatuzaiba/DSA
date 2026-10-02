# ER Diagram

This Entity Relationship Diagram represents the database structure of the HireD Phase 1 MVP.

```mermaid
erDiagram

    companies {
        uuid id PK
        varchar name
        varchar email
        varchar phone
        text address
        decimal driver_percentage
        decimal company_percentage
        varchar status
        timestamp created_at
        timestamp updated_at
    }

    users {
        uuid id PK
        uuid company_id FK
        varchar name
        varchar email UK
        varchar phone UK
        varchar password_hash
        varchar role
        varchar status
        timestamp created_at
        timestamp updated_at
    }

    drivers {
        uuid id PK
        uuid user_id FK UK
        varchar full_name
        varchar phone
        date date_of_birth
        text address
        varchar onboarding_status
        varchar availability_status
        timestamp created_at
        timestamp updated_at
    }

    driver_documents {
        uuid id PK
        uuid driver_id FK
        varchar document_type
        varchar document_number
        varchar file_url
        varchar status
        timestamp expires_at
        timestamp uploaded_at
        timestamp updated_at
    }

    driver_availability {
        uuid id PK
        uuid driver_id FK
        date availability_date
        boolean is_available
        timestamp start_time
        timestamp end_time
        timestamp created_at
        timestamp updated_at
    }

    vehicles {
        uuid id PK
        varchar registration_number UK
        varchar vehicle_type
        varchar model
        varchar capacity
        varchar status
        timestamp created_at
        timestamp updated_at
    }

    orders {
        uuid id PK
        uuid company_id FK
        uuid created_by FK
        varchar source
        varchar pickup_location
        varchar drop_location
        timestamp requested_datetime
        varchar vehicle_type
        text service_notes
        varchar contact_name
        varchar contact_phone
        varchar status
        text rejection_reason
        uuid accepted_by FK
        timestamp accepted_at
        uuid rejected_by FK
        timestamp rejected_at
        timestamp created_at
        timestamp updated_at
    }

    trips {
        uuid id PK
        varchar trip_number UK
        uuid order_id FK UK
        uuid company_id FK
        uuid driver_id FK
        uuid vehicle_id FK
        varchar pickup_location
        varchar drop_location
        timestamp scheduled_at
        integer estimated_duration_minutes
        decimal estimated_distance_km
        decimal trip_amount
        varchar status
        varchar selfie_url
        varchar otp_hash
        timestamp otp_expires_at
        timestamp started_at
        timestamp closed_at
        timestamp created_at
        timestamp updated_at
    }

    trip_assignments {
        uuid id PK
        uuid trip_id FK
        uuid driver_id FK
        uuid vehicle_id FK
        uuid assigned_by FK
        timestamp assigned_at
        timestamp unassigned_at
        text reason
    }

    trip_events {
        uuid id PK
        uuid trip_id FK
        varchar event_type
        uuid performed_by FK
        json metadata
        timestamp created_at
    }

    expenses {
        uuid id PK
        uuid trip_id FK
        uuid driver_id FK
        varchar category
        decimal amount
        text description
        varchar receipt_url
        timestamp created_at
    }

    trip_payroll_records {
        uuid id PK
        uuid trip_id FK UK
        uuid driver_id FK
        uuid company_id FK
        decimal trip_amount
        decimal applied_driver_percentage
        decimal applied_company_percentage
        decimal driver_share
        decimal company_share
        varchar payout_status
        timestamp calculated_at
        timestamp created_at
        timestamp updated_at
    }

    wallets {
        uuid id PK
        uuid driver_id FK UK
        decimal balance
        timestamp created_at
        timestamp updated_at
    }

    wallet_transactions {
        uuid id PK
        uuid wallet_id FK
        uuid driver_id FK
        uuid trip_id FK UK
        uuid payroll_record_id FK UK
        varchar transaction_type
        decimal amount
        varchar reference
        timestamp created_at
    }

    statements {
        uuid id PK
        uuid company_id FK
        date period_start
        date period_end
        decimal total_trip_amount
        decimal total_driver_share
        decimal total_company_share
        varchar status
        uuid created_by FK
        timestamp created_at
        timestamp verified_at
        timestamp published_at
    }

    statement_items {
        uuid id PK
        uuid statement_id FK
        uuid payroll_record_id FK UK
        uuid trip_id FK
        decimal trip_amount
        decimal driver_percentage
        decimal company_percentage
        decimal driver_share
        decimal company_share
        timestamp created_at
    }

    statement_verifications {
        uuid id PK
        uuid statement_id FK
        uuid admin_id FK
        varchar verification_type
        timestamp verified_at
        text comments
    }

    notifications {
        uuid id PK
        uuid user_id FK
        varchar title
        text message
        varchar type
        boolean is_read
        timestamp read_at
        timestamp created_at
    }

    audit_logs {
        uuid id PK
        uuid user_id FK
        varchar action
        varchar entity_type
        uuid entity_id
        json old_values
        json new_values
        varchar ip_address
        timestamp created_at
    }


    %% ============================================
    %% COMPANY & USER RELATIONSHIPS
    %% ============================================

    companies ||--o{ users : "has"
    companies ||--o{ orders : "receives"
    companies ||--o{ trips : "owns"
    companies ||--o{ trip_payroll_records : "has"
    companies ||--o{ statements : "has"


    %% ============================================
    %% DRIVER RELATIONSHIPS
    %% ============================================

    users ||--o| drivers : "has"
    drivers ||--o{ driver_documents : "has"
    drivers ||--o{ driver_availability : "has"
    drivers ||--o{ trips : "assigned to"
    drivers ||--o{ trip_assignments : "assigned"
    drivers ||--o{ expenses : "records"
    drivers ||--o{ trip_payroll_records : "earns"
    drivers ||--o| wallets : "owns"
    drivers ||--o{ wallet_transactions : "receives"


    %% ============================================
    %% ORDER RELATIONSHIPS
    %% ============================================

    users ||--o{ orders : "creates"
    users ||--o{ orders : "accepts"
    users ||--o{ orders : "rejects"

    orders ||--o| trips : "creates"


    %% ============================================
    %% VEHICLE & TRIP RELATIONSHIPS
    %% ============================================

    vehicles ||--o{ trips : "used for"
    vehicles ||--o{ trip_assignments : "assigned"

    trips ||--o{ trip_assignments : "has"
    trips ||--o{ trip_events : "has"
    trips ||--o{ expenses : "has"
    trips ||--o| trip_payroll_records : "generates"


    %% ============================================
    %% TRIP EVENT RELATIONSHIPS
    %% ============================================

    users ||--o{ trip_events : "performs"


    %% ============================================
    %% WALLET RELATIONSHIPS
    %% ============================================

    wallets ||--o{ wallet_transactions : "contains"

    trip_payroll_records ||--o| wallet_transactions : "creates"


    %% ============================================
    %% STATEMENT RELATIONSHIPS
    %% ============================================

    users ||--o{ statements : "creates"

    statements ||--o{ statement_items : "contains"
    statements ||--o{ statement_verifications : "has"

    trip_payroll_records ||--o{ statement_items : "included in"
    trips ||--o{ statement_items : "included in"

    users ||--o{ statement_verifications : "verifies"


    %% ============================================
    %% SYSTEM RELATIONSHIPS
    %% ============================================

    users ||--o{ notifications : "receives"
    users ||--o{ audit_logs : "creates"