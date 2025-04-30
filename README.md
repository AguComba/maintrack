# 🛠️ Maintrack

**Maintrack** es una plataforma SaaS para la gestión y seguimiento de tareas de mantenimiento en empresas con maquinaria. Permite crear activos, programar mantenimientos preventivos y registrar acciones realizadas sobre los equipos.

---

## 📂 Estructura del proyecto

```
Maintrack/
├── backend/        # API REST en Node.js (arquitectura modular y hexagonal)
├── frontend/       # Aplicación web en Next.js
├── docker-compose.yml
└── README.md
```

---

## 🚀 Inicio rápido

### 📦 Requisitos

- Node.js 20+
- Docker y Docker Compose
- MySQL 8.x
- Prisma

---

### 🖥️ Clonar el proyecto

```bash
git clone https://github.com/agucomba/maintrack.git
cd maintrack
```

---

### ⚙️ Variables de entorno

Configurá tus variables en cada entorno:

- `backend/.env` → ver `backend/.env.example`
- `frontend/.env` → ver `frontend/.env.example`

---

### 🧪 Levantar el proyecto con Docker

```bash
docker-compose up --build
```

Esto levanta:

- API (puerto 4000)
- Frontend (puerto 3000)
- Base de datos MySQL

---

### 🧰 Uso sin Docker (desarrollo local)

#### Backend

```bash
cd backend
npm install
npx prisma generate
npm run dev
```

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🧱 Arquitectura

Tanto frontend como backend están organizados en módulos por dominio (`asset`, `maintenance`, `auth`, etc.) siguiendo una **arquitectura hexagonal** con capas:

- `domain/`: entidades, interfaces y lógica de negocio
- `application/`: casos de uso
- `infrastructure/`: adaptadores como bases de datos
- `interface/`: controladores HTTP y componentes UI

---

## 📌 Estado del proyecto

✅ Estructura base definida  
✅ Conexión frontend-backend  
🚧 En desarrollo de funcionalidades principales

---

## 📃 Licencia

MIT © [Agustin Comba]
