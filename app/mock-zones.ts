import { Zone } from './zone';

export const ZONES: Zone[] = [
{ id: 1, name: 'Peak 1',
  imgUrl: "/img/peak1.jpg",
  imgWidth: 3000,
  imgHeight: 2000,
  missions: [{
    date: "test-date",
    notes: "test notes",
    patrollerIds: ["1", "2"],
    elements: [{
      patrollerId: "1",
      x: 10,
      y: 10
      }]
    }]},


{ id: 2, name: 'Peak 2', imgUrl: "/img/peak2.jpg", imgWidth: 3000, imgHeight: 2000, missions: []}
];

