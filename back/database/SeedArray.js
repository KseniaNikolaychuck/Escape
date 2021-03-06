const clubs = [
  {
    name: 'Чкаловская',
    address: 'Большая Зеленина, д. 15',
    phone: '+7 (931) 580 82 81',
    computers: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Ленинский',
    address: 'Ленинский проспект, д. 92к1',
    phone: '+7 (953) 341 01 92',
    computers: 25,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Большевиков',
    address: 'Проспект Пятилеток, д. 8к1',
    phone: '+7 (931) 582 63 24',
    computers: 25,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Парнас',
    address: 'Валерия Гаврилина, д. 3к1',
    phone: '+7 (909) 577 36 83',
    computers: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const prices = [
  {
    ClubId: 1,
    room: 'common',
    onehour: 90,
    fivehours: 350,
    nightweekday: 390,
    nightweekend: 490,
    morning: 250,
    twentyfourhours: 1500,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    ClubId: 1,
    room: 'vip',
    onehour: 120,
    fivehours: 500,
    nightweekday: 490,
    nightweekend: 590,
    morning: 290,
    twentyfourhours: 2000,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    ClubId: 2,
    room: 'common',
    onehour: 70,
    fivehours: 300,
    nightweekday: 390,
    nightweekend: 450,
    morning: 250,
    twentyfourhours: 1200,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    ClubId: 2,
    room: 'vip',
    onehour: 120,
    fivehours: 500,
    nightweekday: 490,
    nightweekend: 590,
    morning: 350,
    twentyfourhours: 1800,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    ClubId: 3,
    room: 'common',
    onehour: 90,
    fivehours: 350,
    nightweekday: 390,
    nightweekend: 490,
    morning: 290,
    twentyfourhours: 1300,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    ClubId: 3,
    room: 'vip',
    onehour: 120,
    fivehours: 500,
    nightweekday: 490,
    nightweekend: 590,
    morning: 390,
    twentyfourhours: 1800,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    ClubId: 4,
    room: 'common',
    onehour: 80,
    fivehours: 300,
    nightweekday: 350,
    nightweekend: 420,
    morning: 250,
    twentyfourhours: 1200,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    ClubId: 4,
    room: 'vip',
    onehour: 100,
    fivehours: 400,
    nightweekday: 390,
    nightweekend: 490,
    morning: 290,
    twentyfourhours: 1600,
    PS: 100,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const computers = [
  {
    ClubId: 1,
    room: 'common',
    graphics: 'GTX 1660 8GB',
    cpu: 'AMD Ryzen 5 2600 3.2/3.6 Ghz',
    monitor: 'Acer 27" 144Hz',
    ram: '2x8 GB 2666 MHz',
    keyboard: 'Rapier',
    mouse: 'Logitech G102',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    ClubId: 1,
    room: 'vip',
    graphics: 'RTX 2070s 8GB',
    cpu: 'AMD Ryzen 5 3600 4.2 Ghz',
    monitor: 'Acer 25" 240Hz',
    ram: '2x8 GB 3200 MHz',
    keyboard: 'HyperX',
    mouse: 'Logitech G102',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    ClubId: 2,
    room: 'common',
    graphics: 'GTX 1660 8GB',
    cpu: 'AMD Ryzen 5 1600 3.2/3.6 Ghz',
    monitor: 'Acer 27" 144Hz',
    ram: '2x8 GB 2666 MHz',
    keyboard: 'Rapier',
    mouse: 'Logitech G102',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    ClubId: 2,
    room: 'vip',
    graphics: 'GTX 2070 8GB',
    cpu: 'AMD Ryzen 5 3600 4.2 Ghz',
    monitor: 'Acer 25" 240Hz',
    ram: '2x8 GB 3000 MHz',
    keyboard: 'HyperX',
    mouse: 'Logitech G102',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    ClubId: 3,
    room: 'common',
    graphics: 'GTX 1660 8GB',
    cpu: 'AMD Ryzen 5 1600 3.2/3.6 Ghz',
    monitor: 'Acer 27" 144Hz',
    ram: '2x8 GB 2666 MHz',
    keyboard: 'Rapier',
    mouse: 'Logitech G102',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    ClubId: 3,
    room: 'vip',
    graphics: 'RTX 2070s 8GB',
    cpu: 'AMD Ryzen 5 3600 4.2 Ghz',
    monitor: 'Acer 25" 240Hz',
    ram: '2x8 GB 3200 MHz',
    keyboard: 'HyperX',
    mouse: 'Logitech G102',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    ClubId: 4,
    room: 'common',
    graphics: 'GTX 1660 6GB GDDR5+',
    cpu: 'AMD Ryzen 5 1600 3.2/3.6 Ghz',
    monitor: 'Acer 27" 144Hz',
    ram: '2x4 GB 2666 MHz',
    keyboard: 'Rapier',
    mouse: 'X7',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    ClubId: 4,
    room: 'vip',
    graphics: 'GTX 2070 8GB',
    cpu: 'AMD Ryzen 5 3600 4.2 Ghz',
    monitor: 'Acer 25" 240Hz',
    ram: '2x8 GB 3000 MHz',
    keyboard: 'HyperX',
    mouse: 'Logitech G102',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = { clubs, prices, computers };
