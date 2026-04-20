# 🏅 Sistema de Gestión Deportiva del Valle del Cauca
INTEGRANTES ZORAYA CATALINA GIRALDO VELASQUEZ

Plataforma híbrida (Web y Móvil) para centralizar el seguimiento del rendimiento de atletas de la región del Valle del Cauca. Permite registrar deportistas, sesiones de entrenamiento, competencias y generar reportes oficiales de desempeño.

---

## 📋 Tabla de Contenido

- [Descripción General](#descripción-general)
- [Roles de Usuario](#roles-de-usuario)
- [Requerimientos Funcionales](#requerimientos-funcionales)
- [Requerimientos No Funcionales](#requerimientos-no-funcionales)
- [Arquitectura y Diagramas](#arquitectura-y-diagramas)
- [Guiones de Diseño](#guiones-de-diseño)
- [Mockups](#mockups)
- [Historias de Usuario](#historias-de-usuario)
- [Requerimientos Legales y Éticos](#requerimientos-legales-y-éticos)
- [Requerimientos Futuros](#requerimientos-futuros-backlog)
- [Instalación y Configuración](#instalación-y-configuración)
- [Tecnologías](#tecnologías)

---

## 📌 Descripción General

El sistema se concibe como una **plataforma híbrida (Web y Móvil)** con capacidad de crecimiento hacia el Internet de las Cosas (IoT) mediante la integración de wearables.

### Indicadores de Desempeño
Métricas cuantitativas como:
- ⚡ Velocidad
- 💪 Fuerza
- 🏃 Resistencia

### Restricciones
- Requiere conexión a internet
- Cumplimiento de normativas de protección de datos
- Acceso mediante autenticación segura

---

## 👥 Roles de Usuario

| Rol | Responsabilidad Principal |
|-----|--------------------------|
| **Administrador** | Gestión de usuarios, parámetros del sistema y filtros geográficos |
| **Entrenador** | Registro de entrenamientos, competencias y análisis de progreso |
| **Deportista** | Consulta de métricas personales y visualización de evolución |

---

## ✅ Requerimientos Funcionales

| ID | Descripción |
|----|-------------|
| RF-01 | El sistema debe permitir registrar deportistas con datos personales básicos |
| RF-02 | El sistema debe permitir registrar sesiones de entrenamiento |
| RF-03 | El sistema debe permitir registrar competencias oficiales |
| RF-04 | El sistema debe calcular indicadores de progreso automáticamente |
| RF-05 | El sistema debe mostrar gráficas de evolución del rendimiento |
| RF-06 | El sistema debe permitir al entrenador agregar observaciones cualitativas |
| RF-07 | El sistema debe permitir exportar reportes en PDF y Excel |
| RF-08 | El sistema debe permitir filtrar atletas por deporte, categoría y municipio |

---

## ⚙️ Requerimientos No Funcionales

### Rendimiento
| ID | Descripción |
|----|-------------|
| RNF-09 | El sistema debe responder en menos de 2-3 segundos para consultas estándar |
| RNF-10 | El sistema debe cerrar sesión automáticamente tras 15 minutos de inactividad |
| RNF-11 | El sistema debe permitir la recuperación de contraseña mediante correo electrónico |
| RNF-12 | El sistema debe registrar intentos fallidos de inicio de sesión |
| RNF-13 | La aplicación debe ser compatible con navegadores modernos (Chrome, Edge, Firefox) |
| RNF-14 | La aplicación móvil debe ser compatible con Android / iOS |
| RNF-15 | La interfaz debe adaptarse correctamente a diferentes tamaños de pantalla |
| RNF-16 | El sistema debe poder desplegarse en servicios en la nube |
| RNF-17 | El sistema debe permitir segmentar información por municipio del Valle del Cauca |
| RNF-18 | El sistema debe permitir auditorías internas sobre el uso del sistema |

### Seguridad
- Autenticación por usuario y contraseña
- Encriptación de datos sensibles
- Control de accesos por roles

### Usabilidad
- Interfaz intuitiva
- Accesible desde móvil y web
- Soporte para usuarios con baja alfabetización digital

### Disponibilidad
- Disponibilidad mínima del **99%**
- Respaldos automáticos diarios

---

## 🗂️ Arquitectura y Diagramas

### Diagrama de Casos de Uso
Representa los actores del sistema (**Entrenador** y **Deportista**) y los casos de uso disponibles:

- Iniciar Sesión
- Registrar Deportista
- Registrar Entrenamiento
- Registrar Competencia
- Agregar Observaciones
- Exportar Reporte (PDF / Excel)
- Consultar Progreso Personal
- Ver Gráficas de Rendimiento
- Consultar Métricas de Desempeño

> 📁 Archivo: `diagramas/diagrama_casos_uso.xml`

### BPMN
Flujo de procesos del sistema con tres carriles: **Entrenador**, **Sistema** y **Deportista**.

Flujo principal:
```
Inicio → Iniciar sesión → [Acceso OK?]
  ├── Sí → Registrar deportista → Registrar entrenamientos → Registrar competencia
  │         └── Registrar observaciones
  └── No → (fin)

Sistema: Autenticar usuario → Calcular indicadores → Generar gráficas → Exportar reporte PDF

Deportista: Consultar progreso → Consultar métricas → Ver gráficas de rendimiento → Fin
```

> 📁 Archivo: `diagramas/bpmn.xml`

### Diagrama de Secuencia (Frecuencia)
Muestra la interacción entre **Administrador**, **Entrenador**, **Deportista**, **Sistema** y **BaseDatos**.

Secuencia principal:
1. Los tres actores inician sesión → Sistema valida credenciales con BaseDatos
2. Entrenador registra deportista → Sistema guarda en BaseDatos
3. Entrenador registra entrenamiento → Sistema calcula métricas y guarda
4. Deportista consulta rendimiento → Sistema obtiene datos de BaseDatos
5. Entrenador/Administrador generan reportes → Descarga PDF/Excel

> 📁 Archivo: `diagramas/diagrama_frecuencia.xml`

---

## 🎨 Guiones de Diseño

Árbol de navegación general del sistema:

```
Usuario inicia sesión
└── Dashboard
    ├── Menú lateral
    │   ├── Deportistas
    │   ├── Entrenamientos
    │   ├── Competencias
    │   └── Reportes
    ├── Indicadores
    │   ├── Velocidad
    │   ├── Fuerza
    │   └── Resistencia
    └── Gráficas de rendimiento
```

### 1. Inicio de Sesión
```
Usuario
  └── Ingresar usuario y contraseña
        └── Validación
              ├── [Correcto] → Acceso al sistema
              └── [Incorrecto] → Error → Intentos fallidos → Bloqueo temporal
```
> 📁 Archivo: `diagramas/guion_inicio_sesion.xml`

### 2. Registro de Deportistas
```
Entrenador
  └── Selecciona Registrar Deportista
        └── Formulario
              ├── Nombre
              ├── Documento
              ├── Edad
              ├── Deporte
              ├── Categoría
              └── Municipio
                    └── Guardar → Validación → Registro exitoso
```
> 📁 Archivo: `diagramas/guion_registro_deportistas.xml`

### 3. Registro de Entrenamiento
```
Entrenador
  └── Registrar Entrenamiento
        └── Seleccionar Deportista
              └── Ingresar Datos
                    ├── Fecha
                    ├── Tipo
                    ├── Duración
                    └── Observaciones
                          └── Guardar → Cálculo automático → Datos almacenados
```
> 📁 Archivo: `diagramas/guion_registro_entrenamiento.xml`

### 4. Visualización de Rendimiento
```
Usuario
  └── Selecciona Deportista
        └── Ver Rendimiento
              ├── Gráficas
              │     ├── Velocidad
              │     ├── Fuerza
              │     └── Resistencia
              └── Filtros por fecha
                    └── Comparar periodos
```
> 📁 Archivo: `diagramas/guion_visualizacion_rendimiento.xml`

### 5. Generar Reportes
```
Usuario
  └── Módulo Reportes
        └── Aplicar filtros
              ├── Deporte
              ├── Municipio
              └── Categoría
                    └── Generar reporte
                          ├── PDF  ──┐
                          └── Excel ─┴── Descarga
```
> 📁 Archivo: `diagramas/guion_generar_reportes.xml`

---

## 🖼️ Mockups

### Registrar Nuevo Deportista
Formulario con campos: Nombre Completo, Número de Identificación, Deporte, Categoría, Municipio y Consentimiento Informado obligatorio.

**Criterios de aceptación:**
1. Campos requeridos: nombre, identificación, deporte, categoría y municipio
2. Checkbox de consentimiento informado obligatorio
3. Validación de duplicados por número de identificación

### Dashboard de Rendimiento
Tablero con KPIs (Sesiones, Velocidad Promedio, Progreso), gráfica de barras semanal y tabs de métricas (Velocidad / Fuerza / Resistencia).

**Criterios de aceptación:**
1. Tablero con indicadores clave de desempeño
2. Gráficas dinámicas con filtros por periodo (semanal, mensual, anual)
3. Interfaz adaptable a dispositivos móviles y web

### Generar Informe de Desempeño
Selección de deportista, rango de fechas, datos a incluir y formato de descarga (PDF / Excel).

**Criterios de aceptación:**
1. Botón visible de "Generar Reporte"
2. Opciones de formato: PDF y Excel
3. Estadísticas automáticas calculadas por el sistema

### Inicio de Sesión / Recuperar Contraseña
Flujo en 3 pantallas: Login → Recuperación → Confirmación de envío.

---

## 📖 Historias de Usuario

| ID-Req | HU | Rol | Funcionalidad | Criterios de Aceptación |
|--------|----|-----|---------------|------------------------|
| RF-01 | HU-001ENT | Entrenador | Registrar deportistas con datos básicos | Ingreso de nombre, identificación, deporte, categoría y municipio. Checkbox de consentimiento. Validación de duplicados |
| RF-02 / RF-03 | HU-002 | Entrenador | Registrar sesiones y competencias | Selección de tipo de evento. Carga de métricas (tiempo, velocidad, fuerza, resistencia). Observaciones cualitativas |
| RF-05 | HU-003 | Deportista / Entrenador | Visualizar gráficas de evolución | Dashboard con KPIs. Gráficas dinámicas filtrables por periodo. Diseño responsive |
| RF-07 | HU-004 | Entrenador / Administrador | Exportar informes en PDF y Excel | Botón visible de "Generar Reporte". Opciones PDF y Excel. Promedios y estadísticas automáticas |
| RNF-11 | HU-005 | Usuario (Todos) | Recuperar contraseña por correo | Hipervínculo en login. Validación del correo en BD. Enlace único y temporal |
| RF-08 | HU-006 | Administrador | Filtrar atletas por criterios geográficos y deportivos | Componente select para municipios del Valle. Búsqueda multivariable. Visualización en lista o tarjeta |

---

## ⚖️ Requerimientos Legales y Éticos

- Cumplimiento de la normativa de **protección de datos personales**
- **Consentimiento informado** del deportista
- Uso responsable de la información

---

## 🔮 Requerimientos Futuros (Backlog)

- [ ] Integración con dispositivos de medición biométrica (wearables)
- [ ] Módulo de análisis predictivo
- [ ] Rankings departamentales

---

## 🚀 Instalación y Configuración

```bash
# Clonar el repositorio
git clone https://github.com/tu-org/sistema-gestion-deportiva.git
cd sistema-gestion-deportiva

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con las credenciales de base de datos y configuración de correo

# Ejecutar en desarrollo
npm run dev

# Ejecutar en producción
npm run build
npm start
```

### Variables de entorno requeridas

```env
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/gestion_deportiva
JWT_SECRET=tu_clave_secreta
MAIL_HOST=smtp.tuservicio.com
MAIL_PORT=587
MAIL_USER=correo@dominio.com
MAIL_PASS=tu_contraseña
```

---

## 🛠️ Tecnologías

| Capa | Tecnología sugerida |
|------|---------------------|
| Frontend Web | React.js / Vue.js |
| Frontend Móvil | React Native / Flutter |
| Backend | Node.js + Express / Django |
| Base de Datos | PostgreSQL / MySQL |
| Autenticación | JWT + Bcrypt |
| Exportación | PDFKit / ExcelJS |
| Despliegue | AWS / Google Cloud / Azure |
| API | REST (con soporte futuro para IoT) |

---

## 📁 Estructura del Proyecto

```
sistema-gestion-deportiva/
├── diagramas/
│   ├── diagrama_casos_uso.xml
│   ├── diagrama_frecuencia.xml
│   ├── bpmn.xml
│   ├── guion_inicio_sesion.xml
│   ├── guion_registro_deportistas.xml
│   ├── guion_registro_entrenamiento.xml
│   ├── guion_visualizacion_rendimiento.xml
│   └── guion_generar_reportes.xml
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── utils/
├── public/
├── .env.example
├── package.json
└── README.md
```

---

## 📄 Licencia



> **Sistema de Gestión Deportiva del Valle del Cauca** · Versión 1.0
