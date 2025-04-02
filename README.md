# Project Management Tracker Documentation

## Overview

The Project Management Tracker is a web application designed to help me manage projects, teams, members, and tasks. It provides a comprehensive solution for tracking project progress and managing team activities.

## Features

- Create and manage projects
- Add teams to projects
- Add members to teams
- Assign tasks to members
- Track task progress
- Generate reports

## Technology Stack

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React
- **Database**: MongoDB

[//]: # "- **Authentication**: JWT (optional)"

## Setup

### Prerequisites

- Node.js (v14 or later)
- MongoDB (v4 or later)

### Backend Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Gideon-Buba/ProjectTracker.git
   cd project-tracker
   ```

# Data Structure

This document outlines the relational structure of the data in a project management app similar to Asana. The app includes entities such as Users, Projects, Tasks, and Comments, along with their relationships.

## Entities and Relationships

1. **Users**: Represents the users of the application.
2. **Projects**: Represents the projects created by users.
3. **Tasks**: Represents the tasks within projects.
4. **Comments**: Represents the comments on tasks.

## Relationships

- A **User** can create multiple **Projects**.
- A **Project** can have multiple **Tasks**.
- A **Task** is created by a **User** and can be assigned to a **User**.
- A **Task** can have multiple **Comments**.
- A **Comment** is made by a **User** on a **Task**.

## ER Diagram

```plaintext
+----------------+        +----------------+        +----------------+        +----------------+
|     Users      |        |    Projects    |        |     Tasks      |        |    Comments    |
+----------------+        +----------------+        +----------------+        +----------------+
| id (PK)        |<------>| id (PK)        |<------>| id (PK)        |<------>| id (PK)        |
| username       |        | name           |        | title          |        | task_id (FK)   |
| email          |        | description    |        | description    |        | user_id (FK)   |
| password       |        | created_by (FK)|        | project_id (FK)|        | content        |
| created_at     |        | created_at     |        | created_by (FK)|        | created_at     |
| updated_at     |        | updated_at     |        | assigned_to (FK)|        | updated_at     |
+----------------+        +----------------+        | due_date       |        +----------------+
                          |                         | status         |
                          |                         | created_at     |
                          |                         | updated_at     |
                          +----------------+        +----------------+
```
