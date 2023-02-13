import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const parada1 = await prisma.paradas.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'huaynacapac1',
      street1: 'huaynacapac',
      street2: 'Bolivar',
    },
  });

  const parada2 = await prisma.paradas.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'huaynacapac2',
      street1: 'huaynacapac',
      street2: 'presidente Cordova',
    },
  });

  const parada3 = await prisma.paradas.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: 'huaynacapac3',
      street1: 'huaynacapac',
      street2: 'honorato Vasquez',
    },
  });

  const linea7 = await prisma.linea.upsert({
    where: { id: 7 },
    update: {},
    create: {
      number: 7,
      
    },
  });
  const linea15 = await prisma.linea.upsert({
    where: { id: 15 },
    update: {},
    create: {
      number: 7,
      
    },
  });

  const linea22 = await prisma.linea.upsert({
    where: { id: 22 },
    update: {},
    create: {
      number: 7,
      
    },
  });

  const recorrido1 = await prisma.recorrido.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "trigales altos",
      
    },
  });

  const recorrido2 = await prisma.recorrido.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: "Uncovia",
      
    },
  });

  const recorrido3= await prisma.recorrido.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: "Parque industrial",
      
    },
  });

  const Ruta1= await prisma.ruta.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Ruta1",
      direction: "ida"
      
    },
  });

  const Ruta2= await prisma.ruta.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: "Ruta2",
      direction: "ida"
      
    },
  });

  const Ruta3= await prisma.ruta.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: "Ruta3",
      direction: "ida"
      
    },
  });

  const Estado1= await prisma.estado.upsert({
    where: { id: 1 },
    update: {},
    create: {
      parada_id: 1,  
      linea_id: 7,
      status: "La frecuencia de llegada es cada 7 minutos"
    },
  });

  const Estado2= await prisma.estado.upsert({
    where: { id: 1 },
    update: {},
    create: {
      parada_id: 1,  
      linea_id: 7,
      status: "La frecuencia de llegada es cada 7 minutos"
    },
  });

  const Estado3= await prisma.estado.upsert({
    where: { id: 1 },
    update: {},
    create: {
      parada_id: 1,  
      linea_id: 7,
      status: "La frecuencia de llegada es cada 7 minutos"
    },
  });

  
  
  console.log(
    'PARADAS' +
      { parada1, parada2, parada3 },
  );

  console.log(
    'LINEAS' + { linea7, linea15, linea22 },
  );

  console.log(
    'RECORRIDOS' + { recorrido1, recorrido2, recorrido3 },
  );
  console.log(
    'RUTAS' + { Ruta1, Ruta2, Ruta3 },
  );
  console.log(
    'ESTADO' + { Estado1, Estado2, Estado3},
  );

}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });