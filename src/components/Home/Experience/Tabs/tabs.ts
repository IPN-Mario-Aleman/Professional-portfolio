export interface Tabs {
  start: string;
  finish: string;
  year: string;
  img: string;
  title: string;
  desciption: string;
  job: string;
}

export const allJobs = [
  { start: 'Enero - ', finish: 'Agosto - 2022', year: '2022', img: 'ads', title: 'Erona', description: 'Despliegue y mantenimiento de los sitios web con React, React redux, Next, conexiones api con el backend existente, etc.', job: 'Junior' },
  { start: 'Septiembre - 2022', finish: 'Actual', year: '2023', img: 'ads', title: 'Invercratos', description: 'Desarrollo y despliegue de las aplicaciones web de la empresa, testing unitario y e2e, implementación de marcos de referencia, trabajo colaborativo con el equipo de UI/UX.', job: 'Semi Senior' }
]

const [a, b] = allJobs
export const initialTabs = [a, b]
