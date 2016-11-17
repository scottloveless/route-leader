import { Zone } from './zone';

export const ZONES: Zone[] = [
{ id: 1, name: 'Peak 1',
  imgUrl: "/img/peak1.jpg",
  imgWidth: 3000,
  imgHeight: 2000,
  missions: [{
    date: "11-03-2016",
    notes: "test notes",
    patrollerIds: ["1", "2"],
    elements: [{
      patrollerId: "1",
      x: 1120,
      y: 896
      },
      {
      patrollerId: "1",
      x: 1980,
      y: 456
      },
      {
      patrollerId: "1",
      x: 805,
      y: 904
      }
      ]
    },
    {
    date: "11-05-2016",
    notes: "test notes",
    patrollerIds: ["1", "2"],
    elements: [{
      patrollerId: "1",
      x: 2150,
      y: 518
      },
      {
      patrollerId: "1",
      x: 2324,
      y: 785
      },
      {
      patrollerId: "1",
      x: 2610,
      y: 1001
      }
      ]
    },
    {
    date: "11-10-2016",
    notes: "test notes",
    patrollerIds: ["1", "2"],
    elements: [{
      patrollerId: "1",
      x: 372,
      y: 1086
      },
      {
      patrollerId: "1",
      x: 237,
      y: 1210
      },
      {
      patrollerId: "1",
      x: 743,
      y: 1071
      }
      ]
    },
    {
    date: "11-12-2016",
    notes: "test notes",
    patrollerIds: ["1", "2"],
    elements: [{
      patrollerId: "1",
      x: 1257,
      y: 773
      },
      {
      patrollerId: "1",
      x: 1489,
      y: 673
      },
      {
      patrollerId: "1",
      x: 1655,
      y: 661
      }
      ]
    }]},


{ id: 2, name: 'The Professor', imgUrl: "/img/professor.jpg", imgWidth: 700, imgHeight: 438, missions: []},
{ id: 3, name: 'Loveland Pass', imgUrl: "/img/lovelandpass.jpg", imgWidth: 3279, imgHeight: 1128, missions: []},
// { id: 2, name: 'Peak 2', imgUrl: "/img/peak2.jpg", imgWidth: 3000, imgHeight: 2000, missions: []},
// { id: 3, name: 'Peak 3', imgUrl: "/img/peak3.jpg", imgWidth: 5266, imgHeight: 3511, missions: []}
];

