import { EventSpace } from './event-space';


export const SPACES: EventSpace[] = [
  { 
    id: 0,
    name: '334',
    capacity: 150,
    floor: 4,
    recording_capabilities: true,
    breakout_room: false,
    location: 'Google',
  },
  { 
    id: 1,
    name: 'South Room',
    capacity: 50,
    floor: 10,
    recording_capabilities: false,
    breakout_room: false,
    location: 'WeWork'
  },
  {
    id: 2,
    name: '1456',
    capacity: 30,
    floor: 21,
    recording_capabilities: false,
    breakout_room: true,
    location: 'iHeart Radio'
  },
  {
    id: 3,
    name: 'West Room',
    capacity: 200,
    floor: 3,
    recording_capabilities: true,
    breakout_room: true,
    location: 'Google'
  },
  {
    id: 4,
    name: 'Conference Room',
    capacity: 60,
    floor: 5,
    recording_capabilities: true,
    breakout_room: false,
    location: 'BuzzFeed'
  },
  {
    id: 5,
    name: '333',
    capacity: 20,
    floor: 10,
    recording_capabilities: true,
    breakout_room: false,
    location: 'Galvanize'
  },
  {
    id: 6,
    name: 'Quadrant Room',
    capacity: 220,
    floor: 5,
    recording_capabilities: false,
    breakout_room: true,
    location: 'American Express'
  },
  {
    id: 7,
    name: 'Cafeteria',
    capacity: 210,
    floor: 12,
    recording_capabilities: true,
    breakout_room: false,
    location: 'ShutterStock'
  },
  {
    id: 8,
    name: 'keyNote',
    capacity: 6,
    floor: 6,
    recording_capabilities: false,
    breakout_room: true,
    location: 'WeWork'
  },
  {
    id: 9,
    name: '323',
    capacity: 105,
    floor: 12,
    recording_capabilities: false,
    breakout_room: true,
    location: 'Conde Naste'
  }
];